namespace pxsim.leds {
    enum MyEnum {
        LED_CHG = 1,
        LED_STATUS = 2,
        LED_BLE = 3,
        LED_FLASH = 4,
        LED_DAPLINK = 5,
        LED_RGB = 6,
    }

    export function setLed(led: MyEnum, on: boolean): void {
        let ledState = pxsim.ledState();
        ledState.setState(led, on, '#d13321', 7);
        runtime.queueDisplayUpdate();
    }

    export function setAllLeds(on: boolean): void {
        let ledState = pxsim.ledState();
        ledState.getAllStates().forEach(led => {
            ledState.setState(led.pin, on, '#d13321', 7);
        });
        runtime.queueDisplayUpdate();
    }

    export function setLedRGB(color: string): void {
        let ledState = pxsim.ledState();
        ledState.setState(MyEnum.LED_RGB, true, color, 7);
        const state = ledState.getState(MyEnum.LED_RGB);
        console.log({
            pin: state.pin,
            on: state.on,
            color: state.color,
            intensity: state.intensity,
        });
        runtime.queueDisplayUpdate();
    }
}
