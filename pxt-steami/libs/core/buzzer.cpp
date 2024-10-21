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

enum class AllSounds {
    //% block="beep"
    BEEP, // Simple beep
    //% block="boop"
    BOOP, // Simple boop
    //% block="bloop"
    BLOOP, // Descending bloop
    //% block="ding"
    DING, // Ding sound
    //% block="buzz"
    BUZZ, // Buzz sound
    //% block="zing"
    ZING, // Ascending zing
    //% block="click"
    CLICK, // Simple click
    //% block="whoop"
    WHOOP, // Oscillating whoop
    //% block="ta-da"
    TA_DA, // Celebration sound
    //% block="womp-womp"
    WOMP_WOMP // Descending failure sound
};

//% block="music" weight=100 color=#f200fa icon=""
namespace music {
void makeSoundFor(int freq, int duration) {
    STM32Pin *buzzer = getPin(BUZZER);
    buzzer->setAnalogPeriodUs(1'000'000 / freq);
    buzzer->setAnalogValue(255);
    fiber_sleep(duration);
    buzzer->setAnalogValue(0);
}

void playMelody(std::pair<int, int> melody[], int length) {
    for (int i = 0; i < length; ++i) {
        makeSoundFor(melody[i].first, melody[i].second);
    }
}
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
    int *freq = new int((int)tone);

    buzzer->setAnalogPeriodUs(1'000'000 / *freq);
    buzzer->setAnalogValue(255);
}

/**
 * Make the buzzer stop ringing.
 */
//% block="stop ring tone"
//% weight=80 group="Tones"
//% help=music/stop-ring-tone
//% blockId=music_stopRingTone
//% button.shadow="dropdown"
//% handler.shadow="basic"
void stopRingTone() {
    STM32Pin *buzzer = getPin(BUZZER);
    buzzer->setAnalogValue(0);
}

/**
 * Make the buzzer ring to a tone for a duration.
 * @param tone The tone the buzzer ring to.
 * @param duration The duration the buzzer ring for.
 */
//% block="ring tone at %tone for %duration ms"
//% weight=80 group="Tones"
//% help=music/ring-tone-for-duration
//% blockId=music_ringToneForDuration
//% button.shadow="dropdown"
//% handler.shadow="basic"
void ringToneForDuration(AllTones tone, int duration) {
    ringTone(tone);
    fiber_sleep(duration);
    stopRingTone();
}

/**
 * Make the buzzer ring to a sound.
 * @param sound The sound the buzzer ring to.
 */
//% block="ring sound %sound"
//% weight=80 group="Sounds"
//% help=music/ring-sound
//% blockId=music_ringSound
//% button.shadow="dropdown"
//% handler.shadow="basic"
void ringSound(AllSounds sound) {
    switch (sound) {
    case AllSounds::BEEP: // Simple beep
        playMelody(new std::pair<int, int>[1]{{1000, 100}}, 1);
        break;
    case AllSounds::BOOP: // Simple boop
        playMelody(new std::pair<int, int>[1]{{600, 150}}, 1);
        break;
    case AllSounds::BLOOP: // Descending bloop
        playMelody(new std::pair<int, int>[3]{{800, 100}, {600, 100}, {400, 100}}, 3);
        break;
    case AllSounds::DING: // Ding sound
        playMelody(new std::pair<int, int>[1]{{1200, 200}}, 1);
        break;
    case AllSounds::BUZZ: // Buzz sound
        playMelody(
            new std::pair<int, int>[5]{{400, 50}, {450, 50}, {500, 50}, {450, 50}, {400, 50}}, 5);
        break;
    case AllSounds::ZING: // Ascending zing
        playMelody(new std::pair<int, int>[3]{{500, 100}, {800, 100}, {1200, 100}}, 3);
        break;
    case AllSounds::CLICK: // Simple click
        playMelody(new std::pair<int, int>[1]{{2000, 50}}, 1);
        break;
    case AllSounds::WHOOP: // Oscillating whoop
        playMelody(
            new std::pair<int, int>[5]{
                {1000, 100}, {800, 100}, {600, 100}, {800, 100}, {1000, 100}},
            5);
        break;
    case AllSounds::TA_DA: // Celebration sound
        playMelody(new std::pair<int, int>[3]{{600, 200}, {800, 200}, {1000, 300}}, 3);
        break;
    case AllSounds::WOMP_WOMP: // Descending failure sound
        playMelody(new std::pair<int, int>[3]{{600, 200}, {400, 200}, {300, 300}}, 3);
        break;
    }
}

}; // namespace music