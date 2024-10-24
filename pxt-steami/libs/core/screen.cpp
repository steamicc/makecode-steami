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
//% weight=100
//% group="Draw"
void drawPixel(int x, int y) {}

/**
 * @brief Draw a line on the screen from the specified coordinates to the specified coordinates.
 * @param x0 the x-coordinate of the start of the line, eg: 0
 * @param y0 the y-coordinate of the start of the line, eg: 0
 * @param x1 the x-coordinate of the end of the line, eg: 128
 * @param y1 the y-coordinate of the end of the line, eg: 128
 */
//% block="draw line from (x0: $x0, y0: $y0) to (x1: $x1, y1: $y1)"
//% help=screen/drawLine
//% blockId="screen_drawLine" blockGap=8
//% x0.min=0 x0.max=128
//% y0.min=0 y0.max=128
//% x1.min=0 x1.max=128
//% y1.min=0 y1.max=128
//% inlineInputMode=inline
//% weight=90
//% group="Draw"
void drawLine(int x0, int y0, int x1, int y1) {}

/**
 * @brief Draw a rectangle on the screen at the specified coordinates with the specified width and
 * height.
 * @param x the x-coordinate of the top-left corner of the rectangle, eg: 0
 * @param y the y-coordinate of the top-left corner of the rectangle, eg: 0
 * @param width the width of the rectangle, eg: 128
 * @param height the height of the rectangle, eg: 128
 */
//% block="draw rectangle at (x $x, y $y) of width $width and height $height"
//% help=screen/drawRectangle
//% blockId="screen_drawRectangle" blockGap=8
//% x.min=0 x.max=128
//% y.min=0 y.max=128
//% width.min=0 width.max=128
//% height.min=0 height.max=128
//% inlineInputMode=inline
//% weight=80
//% group="Draw"
void drawRectangle(int x, int y, int width, int height) {}

/**
 * @brief Draw a circle on the screen at the specified coordinates with the specified radius.
 * @param x0 the x-coordinate of the center of the circle, eg: 64
 * @param y0 the y-coordinate of the center of the circle, eg: 64
 * @param r the radius of the circle, eg: 64
 */
//% block="draw circle at (x $x0 y $y0) of radius $r"
//% help=screen/drawCircle
//% blockId="screen_drawCircle" blockGap=8
//% x0.min=0 x0.max=128
//% y0.min=0 y0.max=128
//% r.min=0 r.max=128
//% inlineInputMode=inline
//% weight=70
//% group="Draw"
void drawCircle(int x0, int y0, int r) {}

/**
 * @brief Clear the screen
 */
//% block="Clear the screen" weight=80
//% help=screen/clearScreen
//% blockId="screen_clearScreen" blockGap=8
//% group="Basic"
void clearScreen() {}
} // namespace screen