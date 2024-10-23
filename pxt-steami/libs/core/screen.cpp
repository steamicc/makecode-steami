//% block="Screen" weight=100 color=#f57e00 icon=""
namespace screen {
/**
 * @brief a pixel on the screen at the specified coordinates with the given color.
 * @param x the x-coordinate of the pixel, eg: 0
 * @param y the y-coordinate of the pixel, eg: 0
 */
//% block="draw pixel at x $x y $y"
//% help=screen/drawPixel
//% blockId="screen_drawPixel" blockGap=8
//% x.min=0 x.max=130
//% y.min=0 y.max=130
void drawPixel(int x, int y) {}

/**
 * @brief Draw a line on the screen from the specified coordinates to the specified coordinates with
 * the given color.
 * @param x0 the x-coordinate of the start of the line, eg: 0
 * @param y0 the y-coordinate of the start of the line, eg: 0
 * @param x1 the x-coordinate of the end of the line, eg: 0
 * @param y1 the y-coordinate of the end of the line, eg: 0
 */
//% block="draw line from x $x0 y $y0 to x $x1 y $y1"
//% help=screen/drawLine
//% blockId="screen_drawLine" blockGap=8
//% x0.min=0 x0.max=130
//% y0.min=0 y0.max=130
//% x1.min=0 x1.max=130
//% y1.min=0 y1.max=130
void drawLine(int x0, int y0, int x1, int y1) {}

/**
 * @brief Clear the screen
 */
//% block="Clear the screen" weight=80
//% help=screen/clearScreen
//% blockId="screen_clearScreen" blockGap=8
void clearScreen() {}
} // namespace screen