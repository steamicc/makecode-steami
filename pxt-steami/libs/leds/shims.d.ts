// Auto-generated. Do not edit.



    //% block="leds" weight=100 color=#4287f5 icon=""
declare namespace leds {

    /**
     * @brief Set LED on or off
     * @param led Led to set
     * @param on Turn on or off
     * @param color Turn on or off
     */
    //% block="set led %led|to %on" weight=100
    //% help=leds/leds_setLed
    //% blockId="leds_setLed" blockGap=8
    //% on.shadow="toggleOnOff" on.defl=1 shim=leds::setLed
    function setLed(led: MyEnum, on?: boolean): void;

    /**
     * @brief Set all LEDs on or off
     * @param on Turn on or off
     */
    //% block="set all leds to %on" weight=90
    //% help=leds/leds_setAllLeds
    //% blockId="leds_setAllLeds" blockGap=8
    //% on.shadow="toggleOnOff" on.defl=1 shim=leds::setAllLeds
    function setAllLeds(on?: boolean): void;

    /**
     * @brief Set LED RGB to color
     * @param color Color to set
     */
    //% block="set led RGB to %color" weight=80
    //% help=leds/leds_setLedRGB
    //% blockId="leds_setLedRGB" blockGap=8 shim=leds::setLedRGB
    function setLedRGB(color: string): void;
}

// Auto-generated. Do not edit. Really.
