namespace pxsim.visuals {
    const STEAMI_STYLE = `
        svg.sim {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            display: block;
        }
        .sim-pin:hover{cursor:pointer;}

        svg.sim.grayscale {
            -moz-filter: grayscale(1);
            -webkit-filter: grayscale(1);
            filter: grayscale(1);
        }
        .sim-button {
            pointer-events: none;
        }

        .sim-button-outer {
            cursor: pointer;
        }
        .sim-button-outer:hover {
            stroke-width: 1px;
            stroke: orange !important;
        }
        .sim-button-nut {
            fill:#704A4A;
            pointer-events:none;
        }
        .sim-button-nut:hover {
            stroke:1px solid #704A4A;
        }
        .sim-pin-touch:hover {
            stroke:#D4AF37;
            stroke-width:1px;
        }

        .sim-pin-touch.touched:hover {
            stroke:darkorange;
        }

        .sim-led-back:hover {
            stroke:#fff;
            stroke-width:3px;
        }
        .sim-led:hover {
            stroke:#ff7f7f;
            stroke-width:3px;
        }

        .sim-systemled {
            fill:#333;
            stroke:#555;
            stroke-width: 1px;
        }

        .sim-light-level-button {
            stroke:#f1c40f;
            stroke-width: 1px;
        }

        .sim-pin-level-button {
            stroke:darkorange;
            stroke-width: 1px;
        }

        .sim-sound-level-button {
            stroke:#7f8c8d;
            stroke-width: 1px;
        }

        .sim-antenna {
            stroke:#555;
            stroke-width: 2px;
        }

        .sim-text {
            font-family:"Lucida Console", Monaco, monospace;
            font-size:8px;
            fill:#fff;
            pointer-events: none; user-select: none;
        }
        .sim-text.small {
            font-size:6px;
        }
        .sim-text.inverted {
            fill:#000;
        }

        .sim-text-pin {
            font-family:"Lucida Console", Monaco, monospace;
            font-size:5px;
            fill:#fff;
            pointer-events: none;
        }

        .sim-thermometer {
            stroke:#aaa;
            stroke-width: 1px;
        }

        #rgbledcircle:hover {
            r:8px;
        }

        #SLIDE_HOVER {
            cursor: pointer;
        }
        .sim-slide-switch:hover #SLIDE_HOVER {
            stroke:orange !important;
            stroke-width: 1px;
        }

        .sim-slide-switch-inner.on {
            fill:#ff0000 !important;
        }

        /* animations */
        .sim-theme-glow {
            animation-name: sim-theme-glow-animation;
            animation-timing-function: ease-in-out;
            animation-direction: alternate;
            animation-iteration-count: infinite;
            animation-duration: 1.25s;
        }
        @keyframes sim-theme-glow-animation {
            from { opacity: 1; }
            to   { opacity: 0.75; }
        }

        .sim-flash {
            animation-name: sim-flash-animation;
            animation-duration: 0.1s;
        }

        @keyframes sim-flash-animation {
            from { fill: yellow; }
            to   { fill: default; }
        }

        .sim-flash-stroke {
            animation-name: sim-flash-stroke-animation;
            animation-duration: 0.4s;
            animation-timing-function: ease-in;
        }

        @keyframes sim-flash-stroke-animation {
            from { stroke: yellow; }
            to   { stroke: default; }
        }


        .sim-sound-stroke {
            animation-name: sim-sound-stroke-animation;
            animation-duration: 0.4s;
        }

        @keyframes sim-sound-stroke-animation {
            from { stroke: yellow; }
            to   { stroke: default; }
        }

        /* wireframe */
        .sim-wireframe * {
            fill: none;
            stroke: black;
        }
        .sim-wireframe .sim-display,
        .sim-wireframe .sim-led,
        .sim-wireframe .sim-led-back,
        .sim-wireframe .sim-head,
        .sim-wireframe .sim-theme,
        .sim-wireframe .sim-button-group,
        .sim-wireframe .sim-button-label,
        .sim-wireframe .sim-button,
        .sim-wireframe .sim-text-pin
        {
            visibility: hidden;
        }
        .sim-wireframe .sim-label
        {
            stroke: none;
            fill: #777;
        }
        .sim-wireframe .sim-board {
            stroke-width: 2px;
        }
        *:focus {
            outline: none;
        }
        .sim-button-outer:focus,
        .sim-slide-switch:focus,
        .sim-pin:focus,
        .sim-thermometer:focus,
        .sim-button-group:focus .sim-button-outer,
        .sim-light-level-button:focus,
        .sim-sound-level-button:focus {
            stroke: #4D90FE;
            stroke-width: 2px !important;
         }
        .no-drag {
            user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-drag: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }
    `;

    const pinNames: {
        name: string;
        touch: number;
        text: any;
        id?: number;
        tooltip?: string;
    }[] = [
        // pinBlock up left
        { name: 'TP16', touch: 0, text: null, tooltip: 'A0 - Speaker' },
        { name: 'TP14', touch: 1, text: null, tooltip: '~A1' },
        { name: 'TP12', touch: 1, text: null, tooltip: '~A2' },
        { name: 'TP11', touch: 1, text: null, tooltip: '~A3' },
        // pinBlock up right
        { name: 'TP13', touch: 1, text: null, tooltip: 'A4 - SCL' },
        { name: 'TP10', touch: 1, text: null, tooltip: 'A5 - SDA' },
        { name: 'TP17', touch: 1, text: null, tooltip: 'A6 - RX' },
        { name: 'TP15', touch: 1, text: null, tooltip: 'A7 - TX' },
        //pinBlock bottom
        // big pins
        { name: 'pin2', touch: 0, text: null, tooltip: 'Ground' },
        { name: 'pin3V', touch: 0, text: null, tooltip: 'Ground' },
        { name: 'pinGND', touch: 0, text: null, tooltip: 'Ground' },
        { name: 'pin1', touch: 0, text: null, tooltip: 'Ground' },
        { name: 'pin0', touch: 0, text: null, tooltip: 'Battery power' },
        // small pins midle right
        { name: '3V3', touch: 0, text: null, tooltip: '+3.3V' },
        { name: 'SCL3', touch: 0, text: null, tooltip: '+3.3V' },
        { name: 'SDA3', touch: 0, text: null, tooltip: '+3.3V' },
        { name: 'GND', touch: 0, text: null, tooltip: '+3.3V' },
        // small pins midle left
        { name: 'SP1_CLK2', touch: 0, text: null, tooltip: '+3.3V' },
        { name: 'SP1_MISO', touch: 0, text: null, tooltip: '+3.3V' },
        { name: 'SP1_MOSI', touch: 0, text: null, tooltip: '+3.3V' },
        { name: 'P16', touch: 0, text: null, tooltip: '+3.3V' },
        { name: '3V3_1', touch: 0, text: null, tooltip: '+3.3V' },
        // small pins right
        { name: 'pin_small_1', touch: 0, text: null, tooltip: '+3.3V' },
        { name: 'pin_small_2', touch: 0, text: null, tooltip: '+3.3V' },
        { name: 'pin_small_3', touch: 0, text: null, tooltip: '+3.3V' },
        { name: 'pin_small_4', touch: 0, text: null, tooltip: '+3.3V' },
        { name: 'pin_small_5', touch: 0, text: null, tooltip: '+3.3V' },
        // small pins left
        { name: 'pin_small_6', touch: 0, text: null, tooltip: '+3.3V' },
        { name: 'pin_small_7', touch: 0, text: null, tooltip: '+3.3V' },
        { name: 'pin_small_8', touch: 0, text: null, tooltip: '+3.3V' },
        { name: 'pin_small_9', touch: 0, text: null, tooltip: '+3.3V' },
        // small pin far right and left
        { name: 'pin_farRight', touch: 0, text: null, tooltip: 'Ground' },
        { name: 'pin_farLeft', touch: 0, text: null, tooltip: 'Ground' },
        // pin block middle arm
        // Right
        { name: 'J6_1', touch: 0, text: null, tooltip: 'Ground' },
        { name: 'J6_2', touch: 0, text: null, tooltip: 'Ground' },
        { name: 'J6_3', touch: 0, text: null, tooltip: 'Ground' },
        // left
        { name: 'J5_1', touch: 0, text: null, tooltip: 'Ground' },
        { name: 'J5_2', touch: 0, text: null, tooltip: 'Ground' },
        { name: 'J5_3', touch: 0, text: null, tooltip: 'Ground' },
    ];

    const STEAMI_WIDTH = 220.06459;
    const STEAMI_HEIGHT = 316.30045;

    export interface IBoardTheme {
        accent?: string;
        display?: string;
        pin?: string;
        pinTouched?: string;
        pinActive?: string;
        ledOn?: string;
        ledOff?: string;
        buttonOuter?: string;
        buttonUps: string[];
        buttonDown?: string;
        virtualButtonOuter?: string;
        virtualButtonUp?: string;
        virtualButtonDown?: string;
        lightLevelOn?: string;
        lightLevelOff?: string;
        soundLevelOn?: string;
        soundLevelOff?: string;
        gestureButtonOn?: string;
        gestureButtonOff?: string;
    }

    export var themes: IBoardTheme[] = ['#3ADCFE'].map(accent => {
        return {
            accent: accent,
            pin: '#D4AF37',
            pinTouched: '#FFA500',
            pinActive: '#FF5500',
            ledOn: '#ff7777',
            ledOff: '#fff',
            buttonOuter: '#979797',
            buttonUps: ['#000', '#000', '#000'],
            buttonDown: '#FFA500',
            virtualButtonDown: '#FFA500',
            virtualButtonOuter: '#333',
            virtualButtonUp: '#FFF',
            lightLevelOn: 'yellow',
            lightLevelOff: '#555',
            soundLevelOn: '#7f8c8d',
            soundLevelOff: '#555',
            gestureButtonOn: '#FFA500',
            gestureButtonOff: '#B4009E',
        };
    });

    export function randomTheme(): IBoardTheme {
        return themes[Math.floor(Math.random() * themes.length)];
    }

    export interface IBoardProps {
        runtime?: pxsim.Runtime;
        theme?: IBoardTheme;
        disableTilt?: boolean;
        wireframe?: boolean;
    }

    export class SteamiBoardSvg implements BoardView {
        public element: SVGSVGElement;
        private style: SVGStyleElement;
        private defs: SVGDefsElement;
        private g: SVGGElement;

        private buttons: SVGElement[];
        private buttonsOuter: SVGElement[];
        private screen: SVGElement;
        private screen_showcase: SVGElement;
        private leds: SVGElement[];
        private buttonABText: SVGTextElement;
        private pins: SVGElement[];
        private pinControls: { [index: number]: AnalogPinControl };
        private systemLed: SVGCircleElement;
        private irReceiver: SVGElement;
        private irTransmitter: SVGElement;
        private redLED: SVGRectElement;
        private slideSwitch: SVGGElement;
        private lightLevelButton: SVGCircleElement;
        private lightLevelGradient: SVGLinearGradientElement;
        private lightLevelText: SVGTextElement;
        private soundLevelButton: SVGCircleElement;
        private soundLevelGradient: SVGLinearGradientElement;
        private soundLevelText: SVGTextElement;
        private thermometerGradient: SVGLinearGradientElement;
        private thermometer: SVGRectElement;
        private thermometerText: SVGTextElement;
        private antenna: SVGPolylineElement;
        private shakeButtonGroup: SVGElement;
        private shakeText: SVGTextElement;
        public board: pxsim.DalBoard;
        private pinNmToCoord: Map<Coord> = {};

        constructor(public props: IBoardProps) {
            this.fixPinIds();
            this.buildDom();
            if (props && props.wireframe)
                pxsim.U.addClass(this.element, 'sim-wireframe');

            if (props && props.theme) this.updateTheme();

            if (props && props.runtime) {
                this.board = this.props.runtime.board as pxsim.DalBoard;
                this.board.updateSubscribers.push(() => this.updateState());
                this.updateState();
                this.attachEvents();
            }
        }

        private fixPinIds() {
            for (let pn of pinNames) {
                let key = getConfigKey(pn.name);
                if (key != null) pn.id = getConfig(key);
            }
        }

        public getView(): SVGAndSize<SVGSVGElement> {
            return {
                el: this.element,
                y: 0,
                x: 0,
                w: STEAMI_WIDTH,
                h: STEAMI_HEIGHT,
            };
        }

        public getCoord(pinNm: string): Coord {
            return this.pinNmToCoord[pinNm];
        }

        public highlightPin(pinNm: string): void {
            //TODO: for instructions
        }

        public getPinDist(): number {
            return 10;
        }

        private recordPinCoords() {
            pinNames.forEach((pin, i) => {
                const nm = pin.name;
                const p = this.pins[i];
                const r = p.getBoundingClientRect();
                this.pinNmToCoord[nm] = [
                    r.left + r.width / 2,
                    r.top + r.height / 2,
                ];
            });
        }

        private updateTheme() {
            let theme = this.props.theme;

            svg.fills(this.buttonsOuter, theme.buttonOuter);
            svg.fill(this.buttons[0], theme.buttonUps[0]);
            svg.fill(this.buttons[1], theme.buttonUps[1]);
            svg.fill(this.buttons[2], theme.buttonUps[2]);

            if (this.shakeButtonGroup) {
                svg.fill(
                    this.shakeButtonGroup,
                    this.props.theme.gestureButtonOff,
                );
            }

            svg.setGradientColors(
                this.lightLevelGradient,
                theme.lightLevelOn,
                theme.lightLevelOff,
            );

            svg.setGradientColors(
                this.thermometerGradient,
                theme.ledOff,
                theme.ledOn,
            );
            svg.setGradientColors(
                this.soundLevelGradient,
                theme.soundLevelOn,
                theme.soundLevelOff,
            );

            for (const id in this.pinControls) {
                if (this.pinControls[id]) this.pinControls[id].updateTheme();
            }
        }

        public updateState() {
            let state = this.board;
            if (!state) return;

            if (!runtime || runtime.dead)
                pxsim.U.addClass(this.element, 'grayscale');
            else pxsim.U.removeClass(this.element, 'grayscale');
        }

        private lastFlashTime: number = 0;
        private flashSystemLed() {
            if (!this.systemLed) this.systemLed = <SVGCircleElement>svg.child(
                    this.g,
                    'circle',
                    {
                        class: 'sim-systemled',
                        cx: 75,
                        cy: STEAMI_HEIGHT - 171,
                        r: 2,
                    },
                );
            let now = Date.now();
            if (now - this.lastFlashTime > 150) {
                this.lastFlashTime = now;
                svg.animate(this.systemLed, 'sim-flash');
            }
        }

        private lastIrReceiverFlash: number = 0;
        public flashIrReceiver() {
            if (!this.irReceiver)
                this.irReceiver = this.element.getElementById(
                    'path2054',
                ) as SVGElement;
            let now = Date.now();
            if (now - this.lastIrReceiverFlash > 200) {
                this.lastIrReceiverFlash = now;
                svg.animate(this.irReceiver, 'sim-flash-stroke');
            }
        }

        private lastIrTransmitterFlash: number = 0;
        public flashIrTransmitter() {
            if (!this.irTransmitter)
                this.irTransmitter = this.element.getElementById(
                    'path2062',
                ) as SVGElement;
            let now = Date.now();
            if (now - this.lastIrTransmitterFlash > 200) {
                this.lastIrTransmitterFlash = now;
                svg.animate(this.irTransmitter, 'sim-flash-stroke');
            }
        }

        private buildDom() {
            this.element = new DOMParser()
                .parseFromString(BOARD_SVG, 'image/svg+xml')
                .querySelector('svg') as SVGSVGElement;
            svg.hydrate(this.element, {
                version: '1.0',
                viewBox: `0 0 ${STEAMI_WIDTH} ${STEAMI_HEIGHT}`,
                class: 'sim',
                x: '0px',
                y: '0px',
                width: STEAMI_WIDTH + 'px',
                height: STEAMI_HEIGHT + 'px',
            });
            this.style = <SVGStyleElement>svg.child(this.element, 'style', {});
            this.style.textContent = STEAMI_STYLE;

            this.defs = <SVGDefsElement>svg.child(this.element, 'defs', {});
            this.g = <SVGGElement>svg.elt('g');
            this.element.appendChild(this.g);

            this.pinControls = {};
            this.buildPins();
            this.buildBtn();
            this.buildJoystick();
            this.buildLcdScreen();
        }

        private buildBtn() {
            const btnids = ['BTN_a', 'BTN_b', 'BTN_menu'];
            this.buttonsOuter = btnids.map(n => {
                let btn = this.element.getElementById(
                    n + '_base',
                ) as SVGElement;
                let label = '';
                if (n === 'BTN_a') {
                    label = 'A';
                } else {
                    label = 'B';
                }
                accessibility.makeFocusable(btn);
                accessibility.setAria(btn, 'button', label);
                return btn;
            });
            this.buttonsOuter.forEach(b =>
                pxsim.U.addClass(b, 'sim-button-outer'),
            );

            this.buttons = btnids.map(
                n => this.element.getElementById(n + '_BTN') as SVGElement,
            );
            this.buttons.forEach(b => pxsim.U.addClass(b, 'sim-button'));
        }

        private buildPins() {
            this.pins = pinNames.map((pin, i) => {
                const n = pin.name;
                let p = this.element.getElementById(n) as SVGElement;
                if (p) {
                    pxsim.U.addClass(p, 'sim-pin');
                    if (pin.tooltip) svg.hydrate(p, { title: pin.tooltip });
                } else {
                    console.log(n);
                }
                return p;
            });
        }

        private buildJoystick() {
            const joystickBase = this.element.getElementById(
                'joystick_base',
            ) as SVGGElement;
            const joystickStick = this.element.getElementById(
                'joystick_stick',
            ) as SVGGElement;
            const joystickCircle = this.element.getElementById(
                'joystick_circle',
            ) as SVGGElement;

            joystickBase.style.cursor = 'pointer';
            joystickStick.style.cursor = 'pointer';

            let startX: number = 0;
            let startY: number = 0;
            let isDragging = false;

            const calculateDirection = (dx: number, dy: number): string => {
                if (Math.abs(dx) > Math.abs(dy)) {
                    return dx > 0 ? 'right' : 'left';
                } else {
                    return dy > 0 ? 'down' : 'up';
                }
            };

            joystickStick.addEventListener('mousedown', (e: MouseEvent) => {
                isDragging = true;
                startX = e.clientX;
                startY = e.clientY;
                joystickStick.style.fill = 'orange';
            });

            document.addEventListener('mousemove', (e: MouseEvent) => {
                if (!isDragging) return;

                const dx = e.clientX - startX;
                const dy = e.clientY - startY;
                const direction = calculateDirection(dx, dy);

                switch (direction) {
                    case 'up':
                        joystickStick.setAttribute(
                            'transform',
                            'translate(-10, 10)',
                        );
                        break;
                    case 'down':
                        joystickStick.setAttribute(
                            'transform',
                            'translate(10, -10)',
                        );
                        break;
                    case 'left':
                        joystickStick.setAttribute(
                            'transform',
                            'translate(10, 10)',
                        );
                        break;
                    case 'right':
                        joystickStick.setAttribute(
                            'transform',
                            'translate(-10, -10)',
                        );
                        break;
                }
            });

            document.addEventListener('mouseup', () => {
                if (!isDragging) return;
                isDragging = false;
                joystickStick.setAttribute('transform', 'translate(0, 0)');
                joystickStick.style.fill = 'black';
            });
        }

        private buildLcdScreen() {
            this.screen = this.element.getElementById('screen') as SVGGElement;
            const screen_showcase = this.element.getElementById(
                'screen_showcase',
            ) as SVGGElement;
            screen_showcase.style.display = 'none';

            const matrix = [];
            const rows = 25;
            const cols = 25;

            const leftEye = {
                rowStart: 5,
                rowEnd: 10,
                colStart: 3,
                colEnd: 8,
            };
            const rightEye = {
                rowStart: 5,
                rowEnd: 10,
                colStart: 15,
                colEnd: 20,
            };

            for (let i = 0; i < rows; i++) {
                const row = [];
                for (let j = 0; j < cols; j++) {
                    if (
                        (i >= leftEye.rowStart &&
                            i <= leftEye.rowEnd &&
                            j >= leftEye.colStart &&
                            j <= leftEye.colEnd) ||
                        (i >= rightEye.rowStart &&
                            i <= rightEye.rowEnd &&
                            j >= rightEye.colStart &&
                            j <= rightEye.colEnd)
                    ) {
                        row.push('yellow');
                    } else {
                        row.push('black');
                    }
                }
                matrix.push(row);
            }

            this.screenShow(matrix);
        }

        private screenShow(matScreen: string[][]) {
            const screenWidth = 105;
            const screenHeight = 105;

            const numRows = matScreen.length;
            const numCols = matScreen[0].length;

            const pixelWidth = screenWidth / numCols;
            const pixelHeight = screenHeight / numRows;

            const svgNS = 'http://www.w3.org/2000/svg';
            const pixelGroup = document.createElementNS(svgNS, 'g');

            pixelGroup.setAttribute('transform', 'translate(365,40)');

            for (let row = 0; row < numRows; row++) {
                for (let col = 0; col < numCols; col++) {
                    const color = matScreen[row][col];
                    const rect = document.createElementNS(svgNS, 'rect');

                    rect.setAttribute('x', (col * pixelWidth).toString());
                    rect.setAttribute('y', (row * pixelHeight).toString());
                    rect.setAttribute('width', pixelWidth.toString());
                    rect.setAttribute('height', pixelHeight.toString());
                    rect.setAttribute('fill', color);

                    pixelGroup.appendChild(rect);
                }
            }

            this.screen.appendChild(pixelGroup);
        }

        private attachEvents() {
            Runtime.messagePosted = msg => {
                switch (msg.type || '') {
                    case 'serial':
                        this.flashSystemLed();
                        break;
                    case 'irpacket':
                        this.flashIrTransmitter();
                        break;
                }
            };

            // let bpState = this.board.buttonState;
            // let stateButtons = bpState.buttons;
            this.buttonsOuter.forEach((btn, index) => {
                // let button = stateButtons[index];

                pointerEvents.down.forEach(evid =>
                    btn.addEventListener(evid, ev => {
                        // button.setPressed(true);
                        svg.fill(
                            this.buttons[index],
                            this.props.theme.buttonDown,
                        );
                    }),
                );
                btn.addEventListener(pointerEvents.leave, ev => {
                    // button.setPressed(false);
                    svg.fill(
                        this.buttons[index],
                        this.props.theme.buttonUps[index],
                    );
                });
                btn.addEventListener(pointerEvents.up, ev => {
                    // button.setPressed(false);
                    svg.fill(
                        this.buttons[index],
                        this.props.theme.buttonUps[index],
                    );
                });
                accessibility.enableKeyboardInteraction(
                    btn,
                    () => {
                        // keydown
                        // button.setPressed(true);
                        svg.fill(
                            this.buttons[index],
                            this.props.theme.buttonDown,
                        );
                    },
                    () => {
                        // keyup
                        // button.setPressed(false);
                        svg.fill(
                            this.buttons[index],
                            this.props.theme.buttonUps[index],
                        );
                    },
                );
            });
        }
    }
}
