/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts"/>
/// <reference path="../built/common-sim.d.ts"/>
/// <reference path="../libs/core/dal.d.ts"/>

namespace pxsim {
    export module SteamiPinName {
        export let A0 = -1;
        export let A1 = -1;
        export let A2 = -1;
        export let A3 = -1;
        export let A4 = -1;
        export let A5 = -1;
        export let A6 = -1;
        export let A7 = -1;
        export let A8 = -1;
        export let A9 = -1;
        export let D4 = -1;
        export let D5 = -1;
        export let D6 = -1;
        export let D7 = -1;
        export let D8 = -1;
        export let LED2 = 1;
        export let LED3 = -1;
        export let LED = -1;

        export let D13 = -1;
        export let IR_IN = -1;
        export let IR_OUT = -1;
        export let TX = -1;
        export let RX = -1;

        export function init() {
            let v = SteamiPinName as any;
            for (let k of Object.keys(v)) {
                let key = getConfigKey('PIN_' + k);
                if (key != null) {
                    v[k] = getConfig(key);
                }
            }
        }
    }

    export class DalBoard extends CoreBoard {
        viewHost: visuals.BoardHost;
        view: SVGSVGElement;

        constructor() {
            super();

            SteamiPinName.init();

            this.bus.setNotify(DAL.DEVICE_ID_NOTIFY, DAL.DEVICE_ID_NOTIFY_ONE);
        }

        receiveMessage(msg: SimulatorMessage) {
            if (!runtime || runtime.dead) return;

            switch (msg.type || '') {
                case 'eventbus': {
                    let ev = <SimulatorEventBusMessage>msg;
                    this.bus.queue(ev.id, ev.eventid, ev.value);
                    break;
                }
                case 'serial': {
                    let data = (<SimulatorSerialMessage>msg).data || '';
                    // TODO
                    break;
                }
            }
        }

        initAsync(msg: SimulatorRunMessage): Promise<void> {
            super.initAsync(msg);

            const options = (msg.options || {}) as pxt.RuntimeOptions;

            const boardDef = msg.boardDefinition;
            const cmpsList = msg.parts;
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
            };
            this.viewHost = new visuals.BoardHost(
                pxsim.visuals.mkBoardView({
                    visual: boardDef.visual,
                    boardDef,
                }),
                opts,
            );

            document.body.innerHTML = ''; // clear children
            document.body.appendChild(
                (this.view = this.viewHost.getView() as SVGSVGElement),
            );

            return Promise.resolve();
        }

        screenshotAsync(width?: number): Promise<ImageData> {
            return this.viewHost.screenshotAsync(width);
        }
    }

    export function initRuntimeWithDalBoard() {
        U.assert(!runtime.board);
        let b = new DalBoard();
        runtime.board = b;
        runtime.postError = e => {
            // TODO
            runtime.updateDisplay();
        };
    }

    if (!pxsim.initCurrentRuntime) {
        pxsim.initCurrentRuntime = initRuntimeWithDalBoard;
    }
}
