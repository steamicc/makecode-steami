/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts"/>
/// <reference path="../built/common-sim.d.ts"/>

namespace pxsim {
    export let pinIds: Map<number>;

    export function pinByName(name: string) {
        let v = pinIds[name];
        if (v == null) {
            v = getConfig(getConfigKey('PIN_' + name));
        }
        let p = pxtcore.getPin(v);
        if (!p) console.error('missing pin: ' + name + '(' + v + ')');
        return p;
    }

    export class DalBoard extends CoreBoard {
        // state & update logic for component services
        viewHost: visuals.BoardHost;
        view: SVGElement;
        edgeConnectorState: EdgeConnectorState;
        lightSensorState: AnalogSensorState;
        buttonState: CommonButtonState;
        lightState: pxt.Map<CommonNeoPixelState>;
        audioState: AudioState;
        neopixelPin: Pin;
        touchButtonState: TouchButtonState;
        storageState: StorageState;
        thermometerState: AnalogSensorState;
        thermometerUnitState: TemperatureUnit;
        microphoneState: MicrophoneState;
        screenState: ScreenState;
        irState: InfraredState;
        lcdState: LCDState;
        radioState: RadioState;
        controlMessageState: ControlMessageState;

        constructor(public boardDefinition: BoardDefinition) {
            super();

            const pinList: number[] = [];
            const servos: Map<number> = {};

            function pinId(name: string) {
                let key = getConfigKey('PIN_' + name);
                if (key != null) return getConfig(key);
                // this is for P03 format used by NRF - these are direct names of CPU pins
                let m = /^P(\d+)$/.exec(name);
                if (m) return parseInt(m[1]);
                return null;
            }

            pinIds = {};

            for (let block of (boardDefinition.visual as BoardImageDefinition)
                .pinBlocks) {
                // scan labels
                for (let lbl of block.labels) {
                    for (let sublbl of lbl.split(/[\/,]/)) {
                        sublbl = sublbl.replace(/[~\s]+/g, '');
                        let id = pinId(sublbl);

                        if (id != null) {
                            if (pinList.indexOf(id) < 0) {
                                pinList.push(id);
                                servos[sublbl] = id;
                            }
                            pinIds[lbl] = id;
                            pinIds[sublbl] = id;
                        }
                    }
                }
            }

            // also add pins that might not have visual representation
            for (let k of getAllConfigKeys()) {
                if (/^PIN_/.test(k)) {
                    let id = getConfig(getConfigKey(k));
                    if (id != null) {
                        if (pinList.indexOf(id) < 0) pinList.push(id);
                        pinIds[k.replace(/^PIN_/, '')] = id;
                    }
                }
            }
        }

        kill() {
            super.kill();
            AudioContextManager.stop();
        }

        initAsync(msg: SimulatorRunMessage): Promise<void> {
            super.initAsync(msg);

            const options = (msg.options || {}) as pxt.RuntimeOptions;

            const boardDef = msg.boardDefinition;
            const cmpsList = msg.parts;
            cmpsList.sort();
            const cmpDefs = msg.partDefinitions || {};
            const fnArgs = msg.fnArgs;

            const opts: visuals.BoardHostOpts = {
                state: this,
                boardDef: boardDef,
                partsList: cmpsList,
                partDefs: cmpDefs,
                fnArgs: fnArgs,
                maxWidth: '100%',
                maxHeight: '100%',
                forceBreadboardLayout: true,
                forceBreadboardRender: true,
            };
            this.viewHost = new visuals.BoardHost(
                pxsim.visuals.mkBoardView({
                    visual: boardDef.visual,
                    boardDef,
                }),
                opts,
            );

            document.body.innerHTML = ''; // clear children
            document.body.appendChild((this.view = this.viewHost.getView()));

            return Promise.resolve();
        }

        screenshotAsync(width?: number): Promise<ImageData> {
            return this.viewHost.screenshotAsync(width);
        }

        tryGetNeopixelState(pinId: number): CommonNeoPixelState {
            return this.lightState[pinId];
        }

        neopixelState(pinId: number): CommonNeoPixelState {
            if (pinId === undefined) {
                pinId = pxtcore.getConfig(DAL.CFG_PIN_MOSI, -1);
            }
            let state = this.lightState[pinId];
            if (!state)
                state = this.lightState[pinId] = new CommonNeoPixelState();
            return state;
        }
    }
}
