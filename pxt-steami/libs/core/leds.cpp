#include "pxt.h"
#include "STeaMi.h"

enum class AllLeds {
    //% block="LED_CHG"
    LED_CHG = 1,
    //% block="LED_STATUS"
    LED_STATUS = 2,
    //% block="LED_BLE"
    LED_ble = 3,
    //% block="LED_FLASH"
    LED_FLASH = 4,
    //% block="LED_DAPLINK"
    LED_DAPLINK = 5,
    //% block="LED_RGB"
    LED_RGB = 6
};

enum class AllColors {
    //% block="Red" color=#ff0000
    Red,
    //% block="Green" color=#00ff00
    Green,
    //% block="Blue" color=#0000ff
    Blue,
    //% block="Yellow" color=#ffff00
    Yellow,
    //% block="Magenta" color=#ff00ff
    Magenta,
    //% block="Cyan" color=#00ffff
    Cyan,
    //% block="White" color=#ffffff
    White
};

//% block="leds" weight=100 color=#4287f5 icon=""
namespace leds {
/**
 * @brief Set LED RGB off
 */
//% block="set led RGB off" weight=80 group="LED RGB"
//% help=leds/leds_setLedRGBOff
//% blockId="leds_setLedRGBOff" blockGap=8
void setLedRGBOff() {
    STM32Pin *led_b = getPin(LED_RGB_Blue);  // BLUE
    STM32Pin *led_g = getPin(LED_RGB_Green); // GREEN
    STM32Pin *led_r = getPin(LED_RGB_Red);   // RED
    led_b->setDigitalValue(0);
    led_g->setDigitalValue(0);
    led_r->setDigitalValue(0);
}

/**
 * @brief Set LED RGB to color
 * @param color Color to set
 */
//% block="set led RGB to %color" weight=80 group="LED RGB"
//% help=leds/leds_setLedRGB
//% blockId="leds_setLedRGB" blockGap=8
void setLedRGB(AllColors color) {
    STM32Pin *led_b = getPin(LED_RGB_Blue);  // BLUE
    STM32Pin *led_g = getPin(LED_RGB_Green); // GREEN
    STM32Pin *led_r = getPin(LED_RGB_Red);   // RED

    switch (color) {
    case AllColors::Red:
        led_r->setDigitalValue(1);
        led_g->setDigitalValue(0);
        led_b->setDigitalValue(0);
        break;
    case AllColors::Green:
        led_r->setDigitalValue(0);
        led_g->setDigitalValue(1);
        led_b->setDigitalValue(0);
        break;
    case AllColors::Blue:
        led_r->setDigitalValue(0);
        led_g->setDigitalValue(0);
        led_b->setDigitalValue(1);
        break;
    case AllColors::Yellow:
        led_r->setDigitalValue(1);
        led_g->setDigitalValue(1);
        led_b->setDigitalValue(0);
        break;
    case AllColors::Magenta:
        led_r->setDigitalValue(1);
        led_g->setDigitalValue(0);
        led_b->setDigitalValue(1);
        break;
    case AllColors::Cyan:
        led_r->setDigitalValue(0);
        led_g->setDigitalValue(1);
        led_b->setDigitalValue(1);
        break;
    case AllColors::White:
        led_r->setDigitalValue(1);
        led_g->setDigitalValue(1);
        led_b->setDigitalValue(1);
        break;
    default:
        led_r->setDigitalValue(0);
        led_g->setDigitalValue(0);
        led_b->setDigitalValue(0);
        break;
    }
    target_wait_us(300);
};

}; // namespace leds