namespace pxsim {
    export class ScreenSteamiState {
        states: {
            x: number;
            y: number;
            on: boolean;
        }[] = [];

        constructor(
            states: {
                x: number;
                y: number;
                on: boolean;
            }[],
        ) {
            this.states = states;
            this.createDefaultState();
        }

        getState() {
            return this.states;
        }

        setState(states: { x: number; y: number; on: boolean }[]) {
            this.states = states;
        }

        createDefaultState(): void {
            const DIA_SCREEN = 128;
            const SCREEN_PADDING = 2;
            const SCREEN_SIZE = DIA_SCREEN + SCREEN_PADDING * 2;

            const states: { x: number; y: number; on: boolean }[] = [];

            // Paramètres des yeux
            const leftEyeCenterX = 36;
            const rightEyeCenterX = 96;
            const eyeCenterY = 70;
            const eyeRadius = 23;
            const eyeInsideRadius = 10;

            for (let y = 0; y < SCREEN_SIZE; y++) {
                for (let x = 0; x < SCREEN_SIZE; x++) {
                    let on = false;

                    const distToLeftEye = Math.sqrt(
                        Math.pow(x - leftEyeCenterX, 2) +
                            Math.pow(y - eyeCenterY, 2),
                    );
                    const distToRightEye = Math.sqrt(
                        Math.pow(x - rightEyeCenterX, 2) +
                            Math.pow(y - eyeCenterY, 2),
                    );

                    const distToInsideLeftEye = Math.sqrt(
                        Math.pow(x - leftEyeCenterX, 2) +
                            Math.pow(y - eyeCenterY, 2),
                    );
                    const distToInsideRightEye = Math.sqrt(
                        Math.pow(x - rightEyeCenterX, 2) +
                            Math.pow(y - eyeCenterY, 2),
                    );

                    if (
                        (distToLeftEye <= eyeRadius && y <= eyeCenterY) ||
                        (distToRightEye <= eyeRadius && y <= eyeCenterY)
                    ) {
                        on = true;
                    }

                    if (
                        (distToInsideLeftEye <= eyeInsideRadius &&
                            y <= eyeCenterY) ||
                        (distToInsideRightEye <= eyeInsideRadius &&
                            y <= eyeCenterY)
                    ) {
                        on = false;
                    }

                    states.push({ x, y, on });
                }
            }

            this.states = states;
        }
    }

    export interface ScreenSteamiBoard extends CommonBoard {
        screenSteamiState: ScreenSteamiState;
    }

    export function screenSteamiState(): ScreenSteamiState {
        return (board() as ScreenSteamiBoard).screenSteamiState;
    }
}
