namespace pxsim.screen {
    enum AllButtons {
        BTN_A = 1,
        BTN_B = 2,
        BTN_MENU = 3,
    }

    export function drawPixel(x: number, y: number) {
        let screen = pxsim.screenSteamiState().getState();
        let pixel = screen.find(p => p.x === x && p.y === y);
        if (pixel) {
            pixel.on = true;
        }
        pxsim.screenSteamiState().setState(screen);
        runtime.queueDisplayUpdate();
    }

    export function drawLine(x1: number, y1: number, x2: number, y2: number) {
        let dx = Math.abs(x2 - x1);
        let dy = Math.abs(y2 - y1);
        let sx = x1 < x2 ? 1 : -1;
        let sy = y1 < y2 ? 1 : -1;
        let err = dx - dy;

        let screen = pxsim.screenSteamiState().getState();

        while (true) {
            let pixel = screen.find(p => p.x === x1 && p.y === y1);
            if (pixel) pixel.on = true;

            if (x1 === x2 && y1 === y2) break;

            let e2 = err * 2;
            if (e2 > -dy) {
                err -= dy;
                x1 += sx;
            }
            if (e2 < dx) {
                err += dx;
                y1 += sy;
            }
        }

        pxsim.screenSteamiState().setState(screen);
        runtime.queueDisplayUpdate();
    }

    export function drawRectangle(
        x: number,
        y: number,
        width: number,
        height: number,
    ) {
        let screen = pxsim.screenSteamiState().getState();
        for (let i = x; i < x + width; i++) {
            for (let j = y; j < y + height; j++) {
                let pixel = screen.find(p => p.x === i && p.y === j);
                if (pixel) pixel.on = true;
            }
        }
        pxsim.screenSteamiState().setState(screen);
        runtime.queueDisplayUpdate();
    }

    export function drawCircle(x: number, y: number, radius: number) {
        let screen = pxsim.screenSteamiState().getState();
        for (let i = -radius; i <= radius; i++) {
            for (let j = -radius; j <= radius; j++) {
                if (i * i + j * j <= radius * radius) {
                    let pixel = screen.find(
                        px => px.x === x + i && px.y === y + j,
                    );
                    if (pixel) pixel.on = true;
                }
            }
        }
        pxsim.screenSteamiState().setState(screen);
        pxsim.runtime.queueDisplayUpdate();
    }

    export function clearScreen() {
        let screen = pxsim.screenSteamiState().getState();
        screen.forEach(pixel => {
            pixel.on = false;
        });
        pxsim.screenSteamiState().setState(screen);
        runtime.queueDisplayUpdate();
    }
}
