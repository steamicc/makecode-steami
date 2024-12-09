namespace pxsim.buttons {
    enum AllButtons {
        BTN_A = 1,
        BTN_B = 2,
        BTN_MENU = 3,
    }

    export function onButtonPressed(button: AllButtons, body: pxsim.RefAction) {
        const buttonsState = pxsim.buttonState();
        const btnIds = ['BTN_a_base', 'BTN_b_base', 'BTN_menu_base'];
        const buttonPin = btnIds[button.valueOf() - 1];

        if (typeof body !== 'function') {
            console.error("Callback n'est pas une fonction valide !");
            return;
        }

        function checkButtonState() {
            const buttonState = buttonsState.getState(buttonPin);
            if (buttonState?.on) {
                runtime.runFiberAsync(body);
            }
            setTimeout(checkButtonState, 100);
        }

        checkButtonState();
    }

    export function isButtonPressed(button: AllButtons) {
        const buttonsState = pxsim.buttonState();
        const btnIds = ['BTN_a_base', 'BTN_b_base', 'BTN_menu_base'];
        const buttonState = buttonsState.getState(btnIds[button.valueOf() - 1]);
        return buttonState.on;
    }
}
