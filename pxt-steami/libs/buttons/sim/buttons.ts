namespace pxsim.buttons {
    enum AllButtons {
        BTN_A = 1,
        BTN_B = 2,
        BTN_MENU = 3,
    }

    export function isButtonPressed(button: AllButtons) {
        const buttonsState = pxsim.buttonState();
        const btnIds = ['BTN_a_base', 'BTN_b_base', 'BTN_menu_base'];
        const buttonState = buttonsState.getState(btnIds[button.valueOf() - 1]);
        return buttonState.on;
    }
}
