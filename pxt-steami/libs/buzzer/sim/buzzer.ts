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

    enum AllSounds {
        BEEP, // Simple beep
        BOOP, // Simple boop
        BLOOP, // Descending bloop
        DING, // Ding sound
        BUZZ, // Buzz sound
        ZING, // Ascending zing
        CLICK, // Simple click
        WHOOP, // Oscillating whoop
        TA_DA, // Celebration sound
        WOMP_WOMP, // Descending failure sound
    }

    enum AllSongs {
        HAPPY_TUNE, // Joyeux
        SAD_TUNE, // Triste
        FUNKY_BEAT, // Rythmé
        MYSTERY_TUNE, // Mystérieux
        ALERT_TUNE, // Alerte
    }

    export function makeSoundFor(freq: number, duration: number) {
        AudioContextManager.tone(freq, 1);
        runtime.queueDisplayUpdate();
        runtime.schedule(() => {
            AudioContextManager.stop();
            runtime.queueDisplayUpdate();
        }, duration);
    }

    export function playMelody(melody: { freq: number; duration: number }[]) {
        let totalDuration = 0;
        melody.forEach(note => {
            setTimeout(
                () => makeSoundFor(note.freq, note.duration),
                totalDuration,
            );
            totalDuration += note.duration + 10;
        });
    }

    export function ringTone(tones: AllTones) {
        AudioContextManager.tone(tones, 1);
        runtime.queueDisplayUpdate();
    }

    export function stopRingTone() {
        AudioContextManager.stop();
        runtime.queueDisplayUpdate();
    }

    export function ringToneForDuration(tones: AllTones, ms: number) {
        ringTone(tones);
        runtime.schedule(() => {
            stopRingTone();
        }, ms);
    }

    export function ringSound(sounds: AllSounds) {
        switch (sounds) {
            case AllSounds.BEEP: // Simple beep
                playMelody([{ freq: 1000, duration: 100 }]);
                break;
            case AllSounds.BOOP: // Simple boop
                playMelody([{ freq: 600, duration: 150 }]);
                break;
            case AllSounds.BLOOP: // Descending bloop
                playMelody([
                    { freq: 800, duration: 100 },
                    { freq: 600, duration: 100 },
                    { freq: 400, duration: 100 },
                ]);
                break;
            case AllSounds.DING: // Ding sound
                playMelody([{ freq: 1200, duration: 200 }]);
                break;
            case AllSounds.BUZZ: // Buzz sound
                playMelody([
                    { freq: 400, duration: 50 },
                    { freq: 450, duration: 50 },
                    { freq: 500, duration: 50 },
                    { freq: 450, duration: 50 },
                    { freq: 400, duration: 50 },
                ]);
                break;
            case AllSounds.ZING: // Ascending zing
                playMelody([
                    { freq: 500, duration: 100 },
                    { freq: 800, duration: 100 },
                    { freq: 1200, duration: 100 },
                ]);
                break;
            case AllSounds.CLICK: // Simple click
                playMelody([{ freq: 2000, duration: 50 }]);
                break;
            case AllSounds.WHOOP: // Oscillating whoop
                playMelody([
                    { freq: 1000, duration: 100 },
                    { freq: 800, duration: 100 },
                    { freq: 600, duration: 100 },
                    { freq: 800, duration: 100 },
                    { freq: 1000, duration: 100 },
                ]);
                break;
            case AllSounds.TA_DA: // Celebration sound
                playMelody([
                    { freq: 600, duration: 200 },
                    { freq: 800, duration: 200 },
                    { freq: 1000, duration: 300 },
                ]);
                break;
            case AllSounds.WOMP_WOMP: // Descending failure sound
                playMelody([
                    { freq: 600, duration: 200 },
                    { freq: 400, duration: 200 },
                    { freq: 300, duration: 300 },
                ]);
                break;
            default:
                console.error('Unknown sound type');
        }
    }

    export function playSong(song: AllSongs) {
        switch (song) {
            case AllSongs.HAPPY_TUNE: // Mélodie joyeuse allongée
                playMelody([
                    { freq: 660, duration: 200 }, // E
                    { freq: 880, duration: 200 }, // A
                    { freq: 990, duration: 300 }, // B
                    { freq: 880, duration: 200 }, // A
                    { freq: 660, duration: 300 }, // E
                    { freq: 990, duration: 200 }, // B
                    { freq: 880, duration: 200 }, // A
                    { freq: 1100, duration: 300 }, // C#
                    { freq: 990, duration: 300 }, // B
                ]);
                break;
            case AllSongs.SAD_TUNE: // Mélodie triste allongée
                playMelody([
                    { freq: 400, duration: 300 }, // G
                    { freq: 350, duration: 300 }, // F
                    { freq: 300, duration: 400 }, // D
                    { freq: 350, duration: 300 }, // F
                    { freq: 400, duration: 300 }, // G
                    { freq: 300, duration: 500 }, // D
                    { freq: 250, duration: 500 }, // C
                ]);
                break;
            case AllSongs.FUNKY_BEAT: // Beat rythmé allongé
                playMelody([
                    { freq: 600, duration: 150 }, // G#
                    { freq: 700, duration: 150 }, // A
                    { freq: 800, duration: 150 }, // B
                    { freq: 900, duration: 150 }, // C
                    { freq: 700, duration: 150 }, // A
                    { freq: 800, duration: 150 }, // B
                    { freq: 1000, duration: 150 }, // D
                    { freq: 900, duration: 150 }, // C
                    { freq: 700, duration: 150 }, // A
                ]);
                break;
            case AllSongs.MYSTERY_TUNE: // Mélodie mystérieuse allongée
                playMelody([
                    { freq: 500, duration: 250 }, // D
                    { freq: 600, duration: 200 }, // G
                    { freq: 550, duration: 200 }, // F
                    { freq: 400, duration: 300 }, // D
                    { freq: 500, duration: 250 }, // D
                    { freq: 450, duration: 250 }, // F
                    { freq: 300, duration: 400 }, // C
                    { freq: 400, duration: 300 }, // D
                ]);
                break;
            case AllSongs.ALERT_TUNE: // Alerte allongée
                playMelody([
                    { freq: 1200, duration: 100 }, // C#
                    { freq: 1000, duration: 100 }, // B
                    { freq: 800, duration: 100 }, // G
                    { freq: 1200, duration: 100 }, // C#
                    { freq: 1000, duration: 100 }, // B
                    { freq: 800, duration: 100 }, // G
                    { freq: 1000, duration: 150 }, // B
                    { freq: 1200, duration: 150 }, // C#
                ]);
                break;
            default:
                console.error('Unknown song type');
        }
    }
}
