namespace pxsim {
    export class LedState {
        states: {
            pin: number;
            on: boolean;
            color: string;
            intensity: number;
        }[] = [];

        constructor(
            states: {
                pin: number;
                on: boolean;
                color: string;
                intensity: number;
            }[],
        ) {
            this.states = states;
        }

        setState(
            pin: number,
            on: boolean,
            color: string,
            intensity: number,
        ): void {
            const state = this.states.find(s => s.pin === pin);
            if (state) {
                state.on = on;
                state.color = color;
                state.intensity = intensity;
            } else {
                this.states.push({ pin, on, color, intensity });
            }
        }

        getState(pin: number): {
            pin: number;
            on: boolean;
            color: string;
            intensity: number;
        } {
            const state = this.states.find(s => s.pin === pin);
            return state;
        }

        getAllStates(): {
            pin: number;
            on: boolean;
            color: string;
            intensity: number;
        }[] {
            return this.states;
        }
    }

    export interface LedBoard extends CommonBoard {
        ledState: LedState;
    }

    export function ledState(): LedState {
        return (board() as LedBoard).ledState;
    }
}
