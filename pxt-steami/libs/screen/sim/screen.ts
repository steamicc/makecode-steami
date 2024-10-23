namespace pxsim.screen {
    enum AllButtons {
        BTN_A = 1,
        BTN_B = 2,
        BTN_MENU = 3,
    }

    export function drawPixel(x: number, y: number) {
        let screenState = pxsim.screenSteamiState();
        let screen = screenState.getState();
        let pixel = screen.find(p => p.x === x && p.y === y);
        if (pixel) {
            pixel.on = true;
        }
        screenState.setState(screen);
        runtime.queueDisplayUpdate();
    }

    export function drawLine(x1: number, y1: number, x2: number, y2: number) {
        let screenState = pxsim.screenSteamiState();
        let screen = screenState.getState();
        let dx = Math.abs(x2 - x1);
        let dy = Math.abs(y2 - y1);
        let sx = x1 < x2 ? 1 : -1;
        let sy = y1 < y2 ? 1 : -1;
        let err = dx - dy;
    }

    export function clearScreen() {
        let screenState = pxsim.screenSteamiState();
        let screen = screenState.getState();
        screen.forEach(pixel => {
            pixel.on = false;
        });
        screenState.setState(screen);
        runtime.queueDisplayUpdate();
    }
}
