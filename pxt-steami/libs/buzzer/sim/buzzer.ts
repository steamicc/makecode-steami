namespace pxsim.music {
    enum AllTones {
        C = 261,
        C_SHARP_D_FLAT = 277,
        D = 294,
        D_SHARP_E_FLAT = 311,
        E = 330,
        F = 349,
        F_SHARP_G_FLAT = 370,
        G = 392,
        G_SHARP_A_FLAT = 415,
        A = 440,
        A_SHARP_B_FLAT = 466,
        B = 494,
    }

    export function ringTone(tones: AllTones) {
        AudioContextManager.tone(tones, 1);
        runtime.queueDisplayUpdate();
    }
}
