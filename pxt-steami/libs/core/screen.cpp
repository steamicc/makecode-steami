enum class Smiley {
    //% block="🙂"
    Zero = 0,
    //% block="😐"
    One = 1,
    //% block="🙁"
    Two = 2,
    //% block="😊"
    Three = 3,
    //% block="😀"
    Four = 4,
    //% block="😉"
    Five = 5,
    //% block="🤤"
    Six = 6,
    //% block="🥲"
    Seven = 7,
    //% block="🙁"
    Eight = 8,
    //% block="😂"
    Nine = 9,
    //% block="🤨"
    Ten = 10,
    //% block="💀"
    Eleven = 11,
    //% block="🙃"
    Twelve = 12,
    //% block="😔"
    Thirteen = 13,
    //% block="🤗"
    Fourteen = 14,
    //% block="😓"
    Fifteen = 15,
    //% block="💩"
    Sixteen = 16,
    //% block="♡"
    Seventeen = 17,
    //% block="❤️"
    Eighteen = 18,
    //% block="💔"
    Nineteen = 19,
    //% block="🔥"
    Twenty = 20,
    //% block="❄️"
    TwentyOne = 21,
    //% block="🥺"
    TwentyTwo = 22,
    //% block="😝"
    TwentyThree = 23,
    //% block="😍"
    TwentyFour = 24,
    //% block="💲"
    TwentyFive = 25,
    //% block="⏳"
    TwentySix = 26,
    //% block="⌛️"
    TwentySeven = 27,
    //% block="ᛒ"
    TwentyEight = 28,
    //% block="❓"
    TwentyNine = 29,
    //% block="❗️"
    Thirty = 30,
    //% block="😘"
    ThirtyOne = 31,
    //% block="😮"
    ThirtyTwo = 32,
    //% block="✖️"
    ThirtyThree = 33,
    //% block="😭"
    ThirtyFour = 34,
    //% block="✔️"
    ThirtyFive = 35,
    //% block="😳"
    ThirtySix = 36,
    //% block="🎵"
    ThirtySeven = 37,
    //% block="👀"
    ThirtyEight = 38,
    //% block="💬"
    ThirtyNine = 39,
    //% block="😎"
    Forty = 40,
    //% block="🥷"
    FortyOne = 41,
    //% block="⚠️"
    FortyTwo = 42,
    //% block="😷"
    FortyThree = 43,
    //% block="👑"
    FortyFour = 44,
    //% block="🤡"
    FortyFive = 45,
    //% block="🤐"
    FortySix = 46,
    //% block="😝"
    FortySeven = 47,
    //% block="😛"
    FortyEight = 48,
    //% block="😵"
    FortyNine = 49,
    //% block="😠"
    Fifty = 50,
    //% block="😆"
    FiftyOne = 51,
    //% block="😂"
    FiftyTwo = 52,
    //% block="😒"
    FiftyThree = 53,
    //% block="😃"
    FiftyFour = 54,
    //% block="😖"
    FiftyFive = 55,
    //% block="😰"
    FiftySix = 56,
    //% block="🤓"
    FiftySeven = 57,
    //% block="😫"
    FiftyEight = 58,
    //% block="🙄"
    FiftyNine = 59,
    //% block="🤑"
    Sixty = 60,
    //% block="😆"
    SixtyOne = 61,
    //% block="😴"
    SixtyTwo = 62,
    //% block="⚡️"
    SixtyThree = 63,
    //% block="🌞"
    SixtyFour = 64,
    //% block="😐"
    SixtyFive = 65,
    //% block="🙂"
    SixtySix = 66,
    //% block="😱"
    SixtySeven = 67,
    //% block="☂️"
    SixtyEight = 68,
    //% block="👁"
    SixtyNine = 69,
    //% block="🔒"
    Seventy = 70,
    //% block="🤩"
    SeventyOne = 71,
    //% block="🔓"
    SeventyTwo = 72,
    //% block="😡"
    SeventyThree = 73,
    //% block="➡️"
    SeventyFour = 74,
    //% block="⬅️"
    SeventyFive = 75,
    //% block="🤨"
    SeventySix = 76,
    //% block="⬆️"
    SeventySeven = 77,
    //% block="😶"
    SeventyEight = 78,
    //% block="🤬"
    SeventyNine = 79,
    //% block="😣"
    Eighty = 80,
    //% block="⬇️"
    EightyOne = 81,
    //% block="➕"
    EightyTwo = 82,
    //% block="🤕"
    EightyThree = 83,
    //% block="🧐"
    EightyFour = 84,
    //% block="➖"
    EightyFive = 85,
    //% block="🫧",
    EightySix = 86,
    //% block="😖"
    EightySeven = 87,
    //% block="🤥"
    EightyEight = 88,
    //% block="🫤"
    EightyNine = 89,
    //% block="🛜"
    Ninety = 90
};

//% block="Screen" weight=100 color=#f57e00 icon=""
namespace screen {
/**
 * @brief a pixel on the screen at the specified coordinates with the given color.
 * @param x the x-coordinate of the pixel, eg: 0
 * @param y the y-coordinate of the pixel, eg: 0
 * @param on the state of the pixel
 */
//% block="Set pixel at x $x y $y $on"
//% help=screen/drawPixel
//% blockId="screen_drawPixel" blockGap=8
//% x.min=0 x.max=130
//% y.min=0 y.max=130
//% weight=100
//% group="Draw"
void drawPixel(int x, int y, bool on) {}

/**
 * @brief Draw a line on the screen from the specified coordinates to the specified coordinates.
 * @param x0 the x-coordinate of the start of the line, eg: 0
 * @param y0 the y-coordinate of the start of the line, eg: 0
 * @param x1 the x-coordinate of the end of the line, eg: 128
 * @param y1 the y-coordinate of the end of the line, eg: 128
 * @param on the state of the pixel
 */
//% block="Set line from (x0: $x0, y0: $y0) to (x1: $x1, y1: $y1) $on"
//% help=screen/drawLine
//% blockId="screen_drawLine" blockGap=8
//% x0.min=0 x0.max=128
//% y0.min=0 y0.max=128
//% x1.min=0 x1.max=128
//% y1.min=0 y1.max=128
//% inlineInputMode=inline
//% weight=90
//% group="Draw"
void drawLine(int x0, int y0, int x1, int y1, bool on) {}

/**
 * @brief Draw a rectangle on the screen at the specified coordinates with the specified width and
 * height.
 * @param x the x-coordinate of the top-left corner of the rectangle, eg: 0
 * @param y the y-coordinate of the top-left corner of the rectangle, eg: 0
 * @param width the width of the rectangle, eg: 128
 * @param height the height of the rectangle, eg: 128
 * @param on the state of the pixel
 */
//% block="Set rectangle at (x $x, y $y) of width $width and height $height $on"
//% help=screen/drawRectangle
//% blockId="screen_drawRectangle" blockGap=8
//% x.min=0 x.max=128
//% y.min=0 y.max=128
//% width.min=0 width.max=128
//% height.min=0 height.max=128
//% inlineInputMode=inline
//% weight=80
//% group="Draw"
void drawRectangle(int x, int y, int width, int height, bool on) {}

/**
 * @brief Draw a circle on the screen at the specified coordinates with the specified radius.
 * @param x0 the x-coordinate of the center of the circle, eg: 64
 * @param y0 the y-coordinate of the center of the circle, eg: 64
 * @param r the radius of the circle, eg: 64
 * @param on the state of the pixel
 */
//% block="Set circle at (x $x0 y $y0) of radius $r $on"
//% help=screen/drawCircle
//% blockId="screen_drawCircle" blockGap=8
//% x0.min=0 x0.max=128
//% y0.min=0 y0.max=128
//% r.min=0 r.max=128
//% inlineInputMode=inline
//% weight=70
//% group="Draw"
void drawCircle(int x0, int y0, int r, bool on) {}

/**
 * @brief Clear the screen
 */
//% block="Clear the screen" weight=80
//% help=screen/clearScreen
//% blockId="screen_clearScreen" blockGap=8
//% group="Basic"
void clearScreen() {}

/**
 * @brief draw a smiley face on the screen.
 * @param smiley the smiley face to draw
 */
//% block="draw smiley %smiley"
//% help=screen/drawSmiley
//% blockId="screen_drawSmiley" blockGap=8
//% weight=90
//% group="Preset"
//% smiley.fieldEditor="gridpicker"
//% smiley.fieldOptions.columns=5
//% smiley.fieldOptions.maxRows=5
//% smiley.fieldOptions.itemSize=40
void drawSmiley(Smiley smiley) {}
} // namespace screen