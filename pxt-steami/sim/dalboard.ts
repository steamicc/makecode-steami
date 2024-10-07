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

    export class DalBoard
        extends CoreBoard
        implements
            AccelerometerBoard,
            LightSensorBoard,
            TemperatureBoard,
            CapTouchBoard,
            StorageBoard,
            LedBoard
    {
        // state & update logic for component services
        buttonState: CommonButtonState;
        lightSensorState: AnalogSensorState;
        thermometerState: AnalogSensorState;
        thermometerUnitState: number;
        edgeConnectorState: EdgeConnectorState;
        capacitiveSensorState: CapacitiveSensorState;
        accelerometerState: AccelerometerState;
        touchButtonState: TouchButtonState;
        storageState: StorageState;

        ledState: LedState;

        invertAccelerometerYAxis = true;

        viewHost: visuals.BoardHost;
        view: SVGSVGElement;

        constructor() {
            super();

            SteamiPinName.init();

            this.bus.setNotify(DAL.DEVICE_ID_NOTIFY, DAL.DEVICE_ID_NOTIFY_ONE);

            //components
            this.storageState = new StorageState();

            //LEDs
            this.builtinParts['leds'] = this.ledState = new LedState([]);

            this.builtinParts['buttonpair'] = this.buttonState =
                new CommonButtonState();

            this.builtinParts['lightsensor'] = this.lightSensorState =
                new AnalogSensorState(DAL.DEVICE_ID_LIGHT_SENSOR, 0, 255);
            this.builtinParts['thermometer'] = this.thermometerState =
                new AnalogSensorState(DAL.DEVICE_ID_THERMOMETER, -5, 50);
            this.builtinParts['capacitivesensor'] = this.capacitiveSensorState =
                new CapacitiveSensorState({
                    0: 0,
                    1: 1,
                    2: 2,
                    3: 3,
                    6: 4,
                    9: 5,
                    10: 6,
                    12: 7,
                });

            this.builtinParts['accelerometer'] = this.accelerometerState =
                new AccelerometerState(runtime);
            this.builtinParts['edgeconnector'] = this.edgeConnectorState =
                new EdgeConnectorState({
                    pins: [
                        pxsim.SteamiPinName.A0,
                        pxsim.SteamiPinName.A1,
                        pxsim.SteamiPinName.A2,
                        pxsim.SteamiPinName.A3,
                        pxsim.SteamiPinName.A4,
                        pxsim.SteamiPinName.A5,
                        pxsim.SteamiPinName.A6,
                        pxsim.SteamiPinName.A7,
                        pxsim.SteamiPinName.A8,
                        pxsim.SteamiPinName.A9,
                        pxsim.SteamiPinName.D4,
                        pxsim.SteamiPinName.D5,
                        pxsim.SteamiPinName.D6,
                        pxsim.SteamiPinName.D7,
                        pxsim.SteamiPinName.D8,
                        pxsim.SteamiPinName.D13,
                        pxsim.SteamiPinName.IR_IN,
                        pxsim.SteamiPinName.IR_OUT,
                    ],
                });
            this.builtinParts['microservo'] = this.edgeConnectorState;

            this.builtinVisuals['microservo'] = () =>
                new visuals.MicroServoView();
            this.builtinPartVisuals['microservo'] = (xy: visuals.Coord) =>
                visuals.mkMicroServoPart(xy);
            this.touchButtonState = new TouchButtonState([
                pxsim.SteamiPinName.A1,
                pxsim.SteamiPinName.A2,
                pxsim.SteamiPinName.A3,
                pxsim.SteamiPinName.A4,
                pxsim.SteamiPinName.A5,
                pxsim.SteamiPinName.A6,
                pxsim.SteamiPinName.A7,
            ]);
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

        getDefaultPitchPin() {
            return this.edgeConnectorState.getPin(SteamiPinName.D6);
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
