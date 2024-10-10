namespace pxsim.leds {
    enum AllColors {
        RED = 0,
        GREEN = 1,
        BLUE = 2,
        YELLOW = 3,
        MAGENTA = 4,
        CYAN = 5,
        WHITE = 6,
    }

    function getHexColor(color: AllColors): string {
        switch (color) {
            case AllColors.RED:
                return '#ff0000';
            case AllColors.GREEN:
                return '#00ff00';
            case AllColors.BLUE:
                return '#0000ff';
            case AllColors.YELLOW:
                return '#ffff00';
            case AllColors.MAGENTA:
                return '#ff00ff';
            case AllColors.CYAN:
                return '#00ffff';
            case AllColors.WHITE:
                return '#ffffff';
            default:
                return '#000000';
        }
    }

    export function setLedRGBOff(): void {
        let ledState = pxsim.ledState();
        ledState.setState(6, false, '#000000', 0);
        runtime.queueDisplayUpdate();
    }

    export function setLedRGB(color: AllColors): void {
        let ledState = pxsim.ledState();
        ledState.setState(6, true, getHexColor(color), 7);
        runtime.queueDisplayUpdate();
    }
}
