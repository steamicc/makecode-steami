enum class AllLeds {
    //% block="LED_CHG"
    LED_CHG = 1,
    //% block="LED_STATUS"
    LED_STATUS = 2,
    //% block="LED_BLE"
    LED_BLE = 3,
    //% block="LED_FLASH"
    LED_FLASH = 4,
    //% block="LED_DAPLINK"
    LED_DAPLINK = 5,
    //% block="LED_RGB"
    LED_RGB = 6,
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
    White,
};

//% block="leds" weight=100 color=#4287f5 icon=""
namespace leds {
/**
 * @brief Set LED on or off
 * @param led Led to set
 * @param on Turn on or off
 * @param color Turn on or off
 */
//% block="set led %led|to %on" weight=100
//% help=leds/leds_setLed
//% blockId="leds_setLed" blockGap=8
//% on.shadow="toggleOnOff" on.defl=true
void setLed(AllLeds led, bool on) {
    // to do
}

/**
 * @brief Set all LEDs on or off
 * @param on Turn on or off
 */
//% block="set all leds to %on" weight=90
//% help=leds/leds_setAllLeds
//% blockId="leds_setAllLeds" blockGap=8
//% on.shadow="toggleOnOff" on.defl=true
void setAllLeds(bool on) {
    // to do
}

/**
 * @brief Set LED RGB to color
 * @param color Color to set
 */
//% block="set led RGB to %color" weight=80
//% help=leds/leds_setLedRGB
//% blockId="leds_setLedRGB" blockGap=8
void setLedRGB(AllColors color) {
    // to do
}
} // namespace leds
