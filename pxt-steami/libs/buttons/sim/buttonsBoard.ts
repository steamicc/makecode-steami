namespace pxsim {
    export class ButtonsState {
        states: {
            pin: string;
            on: boolean;
        }[] = [];

        constructor(states: { pin: string; on: boolean }[]) {
            this.states = states;
        }

        setState(pin: string, on: boolean): void {
            const state = this.states.find(s => s.pin === pin);
            if (state) {
                state.on = on;
            } else {
                this.states.push({ pin, on });
            }
        }

        getState(pin: string): {
            pin: string;
            on: boolean;
        } {
            const state = this.states.find(s => s.pin === pin);
            return state;
        }

        getAllStates(): {
            pin: string;
            on: boolean;
        }[] {
            return this.states;
        }
    }

    export interface ButtonsBoard extends CommonBoard {
        buttonsState: ButtonsState;
    }

    export function buttonState(): ButtonsState {
        return (board() as ButtonsBoard).buttonsState;
    }
}
