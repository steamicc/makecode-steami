#include "pxt.h"
#include "STeaMiIO.h"
#include <thread>

enum class AllButtons {
    //% block="Button A"
    BTN_A = 1,
    //% block="Button B"
    BTN_B = 2,
    //% block="Button Menu"
    BTN_MENU = 3,
};

//% block="buttons" weight=100 color=#fc030b icon=""
namespace buttons {
Action checkButtonState(STM32Pin *btn, Action body) {
    if (!btn->getDigitalValue()) {
        runAction0(body); // Exécuter l'action si le bouton est pressé
    }
    release_fiber();
    checkButtonState(btn, body);
}
/**
 * Registers an event for when a button is pressed.
 * @param button The button to monitor.
 * @param handler The function to execute when the button is pressed.
 */
//% block="on button %button pressed"
//% weight=80 group="Buttons"
//% help=buttons/on-button-pressed
//% blockId=buttons_on_button_pressed
//% button.shadow="dropdown"
//% handler.shadow="basic"
void onButtonPressed(AllButtons button, Action body) {
    STM32Pin *btn = nullptr;

    switch (button) {
    case AllButtons::BTN_A:
        btn = getPin(BUTTON_A);
        break;
    case AllButtons::BTN_MENU:
        btn = getPin(BUTTON_MENU);
        break;
    case AllButtons::BTN_B:
        btn = getPin(BUTTON_B);
        break;
    default:
        btn = nullptr;
    };

    if (btn == nullptr) {
        return;
    };
    btn->eventOn(DEVICE_PIN_EVENT_ON_EDGE);
    registerWithDal(btn->id, DEVICE_PIN_EVT_FALL, body);
}

/**
 * @brief Is button selected pressed
 * @param buttons button to check
 */
//% block="is %buttons pressed" weight=80 group="Buttons"
//% help=buttons/buttons_isButtonPressed
//% blockId="buttons_isButtonPressed" blockGap=8
bool isButtonPressed(AllButtons button) {
    STM32Pin *btn = nullptr;

    switch (button) {
    case AllButtons::BTN_A:
        btn = getPin(BUTTON_A);
        break;
    case AllButtons::BTN_MENU:
        btn = getPin(BUTTON_MENU);
        break;
    case AllButtons::BTN_B:
        btn = getPin(BUTTON_B);
        break;
    default:
        return false;
    }

    bool isPressed = btn->getDigitalValue() == 0;
    return isPressed;
}
}; // namespace buttons