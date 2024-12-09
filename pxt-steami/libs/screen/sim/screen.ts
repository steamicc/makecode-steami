namespace pxsim.screen {
    enum Smiley {
        Zero = 0,
        One = 1,
        Two = 2,
        Three = 3,
        Four = 4,
        Five = 5,
        Six = 6,
        Seven = 7,
        Eight = 8,
        Nine = 9,
        Ten = 10,
        Eleven = 11,
        Twelve = 12,
        Thirteen = 13,
        Fourteen = 14,
        Fifteen = 15,
        Sixteen = 16,
        Seventeen = 17,
        Eighteen = 18,
        Nineteen = 19,
        Twenty = 20,
        TwentyOne = 21,
        TwentyTwo = 22,
        TwentyThree = 23,
        TwentyFour = 24,
        TwentyFive = 25,
        TwentySix = 26,
        TwentySeven = 27,
        TwentyEight = 28,
        TwentyNine = 29,
        Thirty = 30,
        ThirtyOne = 31,
        ThirtyTwo = 32,
        ThirtyThree = 33,
        ThirtyFour = 34,
        ThirtyFive = 35,
        ThirtySix = 36,
        ThirtySeven = 37,
        ThirtyEight = 38,
        ThirtyNine = 39,
        Forty = 40,
        FortyOne = 41,
        FortyTwo = 42,
        FortyThree = 43,
        FortyFour = 44,
        FortyFive = 45,
        FortySix = 46,
        FortySeven = 47,
        FortyEight = 48,
        FortyNine = 49,
        Fifty = 50,
        FiftyOne = 51,
        FiftyTwo = 52,
        FiftyThree = 53,
        FiftyFour = 54,
        FiftyFive = 55,
        FiftySix = 56,
        FiftySeven = 57,
        FiftyEight = 58,
        FiftyNine = 59,
        Sixty = 60,
        SixtyOne = 61,
        SixtyTwo = 62,
        SixtyThree = 63,
        SixtyFour = 64,
        SixtyFive = 65,
        SixtySix = 66,
        SixtySeven = 67,
        SixtyEight = 68,
        SixtyNine = 69,
        Seventy = 70,
        SeventyOne = 71,
        SeventyTwo = 72,
        SeventyThree = 73,
        SeventyFour = 74,
        SeventyFive = 75,
        SeventySix = 76,
        SeventySeven = 77,
        SeventyEight = 78,
        SeventyNine = 79,
        Eighty = 80,
        EightyOne = 81,
        EightyTwo = 82,
        EightyThree = 83,
        EightyFour = 84,
        EightyFive = 85,
        EightySix = 86,
        EightySeven = 87,
        EightyEight = 88,
        EightyNine = 89,
        Ninety = 90,
    }

    export function drawPixel(x: number, y: number, on: boolean) {
        let screen = pxsim.screenSteamiState().getState();
        let pixel = screen.find(p => p.x === x && p.y === y);
        if (pixel) {
            pixel.on = on;
        }
        pxsim.screenSteamiState().setState(screen);
        runtime.queueDisplayUpdate();
    }

    export function drawLine(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        on: boolean,
    ) {
        let dx = Math.abs(x2 - x1);
        let dy = Math.abs(y2 - y1);
        let sx = x1 < x2 ? 1 : -1;
        let sy = y1 < y2 ? 1 : -1;
        let err = dx - dy;

        let screen = pxsim.screenSteamiState().getState();

        while (true) {
            let pixel = screen.find(p => p.x === x1 && p.y === y1);
            if (pixel) pixel.on = on;

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
        on: boolean,
    ) {
        let screen = pxsim.screenSteamiState().getState();
        for (let i = x; i < x + width; i++) {
            for (let j = y; j < y + height; j++) {
                let pixel = screen.find(p => p.x === i && p.y === j);
                if (pixel) pixel.on = on;
            }
        }
        pxsim.screenSteamiState().setState(screen);
        runtime.queueDisplayUpdate();
    }

    export function drawCircle(
        x: number,
        y: number,
        radius: number,
        on: boolean,
    ) {
        let screen = pxsim.screenSteamiState().getState();
        for (let i = -radius; i <= radius; i++) {
            for (let j = -radius; j <= radius; j++) {
                if (i * i + j * j <= radius * radius) {
                    let pixel = screen.find(
                        px => px.x === x + i && px.y === y + j,
                    );
                    if (pixel) pixel.on = on;
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

    export function drawSmiley(smiley: Smiley) {
        const emoji = emojis[smiley];

        let screen = pxsim.screenSteamiState().getState();
        screen.forEach(pixel => (pixel.on = false)); // Désactiver tous les pixels d'abord

        for (let y = 0; y < emoji.length; y++) {
            for (let x = 0; x < emoji[y].length; x++) {
                if (emoji[y][x] === 1) {
                    // Activer une zone 8x8 pour chaque pixel "1"
                    for (let dy = 1; dy <= 8; dy++) {
                        for (let dx = 1; dx <= 8; dx++) {
                            const screenX = x * 8 + dx;
                            const screenY = y * 8 + dy;
                            const pixelIndex = screenY * 132 + screenX; // Calculer l'index dans l'array `screen`

                            if (pixelIndex < screen.length) {
                                screen[pixelIndex].on = true; // Activer le pixel
                            }
                        }
                    }
                }
            }
        }

        pxsim.screenSteamiState().setState(screen);
        runtime.queueDisplayUpdate();
    }
}
