#include "pxt.h"
#include "STeaMiIO.h"

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