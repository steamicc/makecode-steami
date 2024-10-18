#include "pxt.h"
#include "STeaMiIO.h"

enum class AllTones {
    //% block="C"
    C = 261,
    //% block="C♯ or D♭"
    C_SHARP_D_FLAT = 277,
    //% block="D"
    D = 294,
    //% block="D♯ or E♭"
    D_SHARP_E_FLAT = 311,
    //% block="E"
    E = 330,
    //% block="F"
    F = 349,
    //% block="F♯ or G♭"
    F_SHARP_G_FLAT = 370,
    //% block="G"
    G = 392,
    //% block="G♯ or A♭"
    G_SHARP_A_FLAT = 415,
    //% block="A"
    A = 440,
    //% block="A♯ or B♭"
    A_SHARP_B_FLAT = 466,
    //% block="B"
    B = 494
};

//% block="music" weight=100 color=#f200fa icon=""
namespace music {
/**
 * Make the buzzer ring to a tone.
 * @param tone The tone the buzzer ring to.
 */
//% block="ring tone at %tone"
//% weight=80 group="Tones"
//% help=music/ring-tone
//% blockId=music_ringTone
//% button.shadow="dropdown"
//% handler.shadow="basic"
void ringTone(AllTones tone) {
    STM32Pin *buzzer = getPin(BUZZER);
    // int *frequence[] = {
    //     new int(0),   // Placeholder for index 0
    //     new int(261), // C - 261.63 Hz, arrondi à 261
    //     new int(277), // C♯/D♭ - 277.18 Hz, arrondi à 277
    //     new int(294), // D - 293.66 Hz, arrondi à 294
    //     new int(311), // D♯/E♭ - 311.13 Hz, arrondi à 311
    //     new int(330), // E - 329.63 Hz, arrondi à 330
    //     new int(349), // F - 349.23 Hz, arrondi à 349
    //     new int(370), // F♯/G♭ - 369.99 Hz, arrondi à 370
    //     new int(392), // G - 392.00 Hz
    //     new int(415), // G♯/A♭ - 415.30 Hz, arrondi à 415
    //     new int(440), // A - 440.00 Hz
    //     new int(466), // A♯/B♭ - 466.16 Hz, arrondi à 466
    //     new int(494)  // B - 493.88 Hz, arrondi à 494
    // };
    int *freq = new int((int)tone);

    buzzer->setAnalogPeriodUs(1'000'000 / *freq);
    buzzer->setAnalogValue(255);
}

}; // namespace music