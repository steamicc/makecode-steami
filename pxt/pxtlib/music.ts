/// <reference path="../localtypings/pxtmusic.d.ts" />
namespace pxt.assets.music {
    function set16BitNumber(buf: Uint8Array, offset: number, value: number) {
        const temp = new Uint8Array(2);
        new Uint16Array(temp.buffer)[0] = value | 0;
        buf[offset] = temp[0];
        buf[offset + 1] = temp[1];
    }

    function get16BitNumber(buf: Uint8Array, offset: number) {
        const temp = new Uint8Array(2);
        temp[0] = buf[offset];
        temp[1] = buf[offset + 1];

        return new Uint16Array(temp.buffer)[0];
    }

    export function encodeSongToHex(song: Song) {
        const encoded = encodeSong(song);
        return U.toHex(encoded);
    }

    /**
     * Byte encoding format for songs
     * FIXME: should this all be word aligned?
     *
     * song(7 + length of all tracks bytes)
     *     0 version
     *     1 beats per minute
     *     3 beats per measure
     *     4 ticks per beat
     *     5 measures
     *     6 number of tracks
     *     ...tracks
     *
     * track(6 + instrument length + note length bytes)
     *     0 id
     *     1 flags
     *     2 instruments byte length
     *     4...instrument
     *     notes byte length
     *     ...note events
     *
     * instrument(28 bytes)
     *     0 waveform
     *     1 amp attack
     *     3 amp decay
     *     5 amp sustain
     *     7 amp release
     *     9 amp amp
     *     11 pitch attack
     *     13 pitch decay
     *     15 pitch sustain
     *     17 pitch release
     *     19 pitch amp
     *     21 amp lfo freq
     *     22 amp lfo amp
     *     24 pitch lfo freq
     *     25 pitch lfo amp
     *     27 octave
     *
     * drum(5 + 7 * steps bytes)
     *     0 steps
     *     1 start freq
     *     3 start amp
     *     5...steps
     *
     * drum step(7 bytes)
     *     0 waveform
     *     1 freq
     *     3 volume
     *     5 duration
     *
     * note event(5 + 1 * polyphony bytes)
     *     0 start tick
     *     2 end tick
     *     4 polyphony
     *     5...notes(1 byte each)
     *
     * note (1 byte)
     *     lower six bits = note - (instrumentOctave - 2) * 12
     *     upper two bits are the enharmonic spelling:
     *          0 = normal
     *          1 = flat
     *          2 = sharp
     */

    function encodeSong(song: Song) {
        const encodedTracks = song.tracks
            .filter((track) => track.notes.length > 0)
            .map(encodeTrack);
        const trackLength = encodedTracks.reduce((d, c) => c.length + d, 0);

        const out = new Uint8Array(7 + trackLength);
        out[0] = 0; // encoding version
        set16BitNumber(out, 1, song.beatsPerMinute);
        out[3] = song.beatsPerMeasure;
        out[4] = song.ticksPerBeat;
        out[5] = song.measures;
        out[6] = encodedTracks.length;

        let current = 7;
        for (const track of encodedTracks) {
            out.set(track, current);
            current += track.length;
        }

        return out;
    }

    function encodeInstrument(instrument: Instrument) {
        const out = new Uint8Array(28);
        out[0] = instrument.waveform;
        set16BitNumber(out, 1, instrument.ampEnvelope.attack)
        set16BitNumber(out, 3, instrument.ampEnvelope.decay)
        set16BitNumber(out, 5, instrument.ampEnvelope.sustain)
        set16BitNumber(out, 7, instrument.ampEnvelope.release)
        set16BitNumber(out, 9, instrument.ampEnvelope.amplitude)
        set16BitNumber(out, 11, instrument.pitchEnvelope?.attack || 0)
        set16BitNumber(out, 13, instrument.pitchEnvelope?.decay || 0)
        set16BitNumber(out, 15, instrument.pitchEnvelope?.sustain || 0)
        set16BitNumber(out, 17, instrument.pitchEnvelope?.release || 0)
        set16BitNumber(out, 19, instrument.pitchEnvelope?.amplitude || 0)
        out[21] = instrument.ampLFO?.frequency || 0
        set16BitNumber(out, 22, instrument.ampLFO?.amplitude || 0)
        out[24] = instrument.pitchLFO?.frequency || 0
        set16BitNumber(out, 25, instrument.pitchLFO?.amplitude || 0);
        out[27] = instrument.octave;

        return out;
    }

    function encodeDrumInstrument(drum: DrumInstrument) {
        const out = new Uint8Array(5 + 7 * drum.steps.length);
        out[0] = drum.steps.length;
        set16BitNumber(out, 1, drum.startFrequency);
        set16BitNumber(out, 3, drum.startVolume);

        for (let i = 0; i < drum.steps.length; i++) {
            const start = 5 + i * 7;
            out[start] = drum.steps[i].waveform;
            set16BitNumber(out, start + 1, drum.steps[i].frequency);
            set16BitNumber(out, start + 3, drum.steps[i].volume);
            set16BitNumber(out, start + 5, drum.steps[i].duration);
        }

        return out;
    }

    function encodeNoteEvent(event: NoteEvent, instrumentOctave: number, isDrumTrack: boolean) {
        const out = new Uint8Array(5 + event.notes.length);
        set16BitNumber(out, 0, event.startTick);
        set16BitNumber(out, 2, event.endTick);
        out[4] = event.notes.length;

        for (let i = 0; i < event.notes.length; i++) {
            out[5 + i] = encodeNote(event.notes[i], instrumentOctave, isDrumTrack);
        }

        return out;
    }

    function encodeNote(note: Note, instrumentOctave: number, isDrumTrack: boolean) {
        if (isDrumTrack) {
            return note.note;
        }

        let flags = 0;
        if (note.enharmonicSpelling === "flat") {
            flags = 1;
        }
        else if (note.enharmonicSpelling === "sharp") {
            flags = 2;
        }

        return (note.note - (instrumentOctave - 2) * 12) | (flags << 6)
    }

    function encodeTrack(track: Track) {
        if (track.drums) return encodeDrumTrack(track);
        return encodeMelodicTrack(track);
    }

    function encodeMelodicTrack(track: Track) {
        const encodedInstrument = encodeInstrument(track.instrument);
        const encodedNotes = track.notes.map(note => encodeNoteEvent(note, track.instrument.octave, false));
        const noteLength = encodedNotes.reduce((d, c) => c.length + d, 0);

        const out = new Uint8Array(6 + encodedInstrument.length + noteLength);
        out[0] = track.id;
        out[1] = 0;

        set16BitNumber(out, 2, encodedInstrument.length);
        let current = 4;
        out.set(encodedInstrument, current);
        current += encodedInstrument.length;

        set16BitNumber(out, current, noteLength);
        current += 2;
        for (const note of encodedNotes) {
            out.set(note, current);
            current += note.length
        }

        return out;
    }

    function encodeDrumTrack(track: Track) {
        const encodedDrums = track.drums.map(encodeDrumInstrument);
        const drumLength = encodedDrums.reduce((d, c) => c.length + d, 0);

        const encodedNotes = track.notes.map(note => encodeNoteEvent(note, 0, true));
        const noteLength = encodedNotes.reduce((d, c) => c.length + d, 0);

        const out = new Uint8Array(6 + drumLength + noteLength);
        out[0] = track.id;
        out[1] = 1;
        set16BitNumber(out, 2, drumLength);
        let current = 4;

        for (const drum of encodedDrums) {
            out.set(drum, current);
            current += drum.length
        }

        set16BitNumber(out, current, noteLength);
        current += 2;
        for (const note of encodedNotes) {
            out.set(note, current);
            current += note.length
        }

        return out;
    }

    export function decodeSongFromHex(hex: string) {
        const bytes = pxt.U.fromHex(hex);

        return decodeSong(bytes);
    }

    function decodeSong(buf: Uint8Array) {
        const res: Song = {
            beatsPerMinute: get16BitNumber(buf, 1),
            beatsPerMeasure: buf[3],
            ticksPerBeat: buf[4],
            measures: buf[5],
            tracks: []
        };

        let current = 7;

        while (current < buf.length) {
            const [track, pointer] = decodeTrack(buf, current);
            current = pointer;
            res.tracks.push(track);
        }

        return res;
    }

    function decodeInstrument(buf: Uint8Array, offset: number): Instrument {
        return {
            waveform: buf[offset],
            ampEnvelope: {
                attack: get16BitNumber(buf, offset + 1),
                decay: get16BitNumber(buf, offset + 3),
                sustain: get16BitNumber(buf, offset + 5),
                release: get16BitNumber(buf, offset + 7),
                amplitude: get16BitNumber(buf, offset + 9),
            },
            pitchEnvelope: {
                attack: get16BitNumber(buf, offset + 11),
                decay: get16BitNumber(buf, offset + 13),
                sustain: get16BitNumber(buf, offset + 15),
                release: get16BitNumber(buf, offset + 17),
                amplitude: get16BitNumber(buf, offset + 19),
            },
            ampLFO: {
                frequency: buf[offset + 21],
                amplitude: get16BitNumber(buf, 22)
            },
            pitchLFO: {
                frequency: buf[offset + 24],
                amplitude: get16BitNumber(buf, 25)
            },
            octave: buf[offset + 27]
        }
    }

    function decodeTrack(buf: Uint8Array, offset: number): [Track, number] {
        if (buf[offset + 1]) {
            return decodeDrumTrack(buf, offset);
        }

        return decodeMelodicTrack(buf, offset);
    }

    function decodeDrumInstrument(buf: Uint8Array, offset: number): DrumInstrument {
        const res: DrumInstrument = {
            startFrequency: get16BitNumber(buf, offset + 1),
            startVolume: get16BitNumber(buf, offset + 3),
            steps: []
        };

        for (let i = 0; i < buf[offset]; i++) {
            const start = offset + 5 + i * 7;
            res.steps.push({
                waveform: buf[start],
                frequency: get16BitNumber(buf, start + 1),
                volume: get16BitNumber(buf, start + 3),
                duration: get16BitNumber(buf, start + 5)
            })
        }

        return res;
    }

    function decodeNoteEvent(buf: Uint8Array, offset: number, instrumentOctave: number, isDrumTrack: boolean): NoteEvent {
        const res: NoteEvent = {
            startTick: get16BitNumber(buf, offset),
            endTick: get16BitNumber(buf, offset + 2),
            notes: []
        };

        for (let i = 0; i < buf[offset + 4]; i++) {
            res.notes.push(decodeNote(buf[offset + 5 + i], instrumentOctave, isDrumTrack));
        }
        return res;
    }

    function decodeNote(note: number, instrumentOctave: number, isDrumTrack: boolean) {
        const flags = note >> 6;

        const result: Note = {
            note: isDrumTrack ? note : ((note & 0x3f) + (instrumentOctave - 2) * 12),
            enharmonicSpelling: "normal"
        }

        if (flags === 1) {
            result.enharmonicSpelling = "flat";
        }
        else if (flags === 2) {
            result.enharmonicSpelling = "sharp";
        }

        return result;
    }

    function decodeMelodicTrack(buf: Uint8Array, offset: number): [Track, number] {
        const res: Track = {
            id: buf[offset],
            instrument: decodeInstrument(buf, offset + 4),
            notes: []
        };

        const noteStart = offset + 4 + get16BitNumber(buf, offset + 2);
        const noteLength = get16BitNumber(buf, noteStart);

        let currentOffset = noteStart + 2;

        while (currentOffset < noteStart + 2 + noteLength) {
            res.notes.push(decodeNoteEvent(buf, currentOffset, res.instrument.octave, false));
            currentOffset += 5 + res.notes[res.notes.length - 1].notes.length
        }

        return [res, currentOffset];
    }

    function decodeDrumTrack(buf: Uint8Array, offset: number): [Track, number] {
        const res: Track = {
            id: buf[offset],
            instrument: { ampEnvelope: { attack: 0, decay: 0, sustain: 0, release: 0, amplitude: 0 }, waveform: 0 },
            notes: [],
            drums: []
        };

        const drumByteLength = get16BitNumber(buf, offset + 2);
        let currentOffset = offset + 4;

        while (currentOffset < offset + 4 + drumByteLength) {
            res.drums.push(decodeDrumInstrument(buf, currentOffset));
            currentOffset += 5 + 7 * res.drums[res.drums.length - 1].steps.length;
        }

        const noteLength = get16BitNumber(buf, currentOffset);
        currentOffset += 2;

        while (currentOffset < offset + 4 + drumByteLength + noteLength) {
            res.notes.push(decodeNoteEvent(buf, currentOffset, 0, true));
            currentOffset += 5 + res.notes[res.notes.length - 1].notes.length
        }

        return [res, currentOffset];
    }

    export function cloneSong(song: Song): Song {
        return {
            ...song,
            tracks: song.tracks.map(track => ({
                ...track,
                instrument: track.instrument && {
                    ...track.instrument,
                    ampEnvelope: {
                        ...track.instrument.ampEnvelope
                    },
                    pitchEnvelope: track.instrument.pitchEnvelope && {
                        ...track.instrument.pitchEnvelope
                    },
                    ampLFO: track.instrument.ampLFO && {
                        ...track.instrument.ampLFO
                    },
                    pitchLFO: track.instrument.pitchLFO && {
                        ...track.instrument.pitchLFO
                    },
                },
                drums: track.drums && track.drums.map(drum => ({
                    ...drum,
                    steps: drum.steps.map(step => ({ ...step }))
                })),
                notes: track.notes.map(noteEvent => ({
                    ...noteEvent,
                    notes: noteEvent.notes.slice()
                }))
            }))
        }
    }

    export function songEquals(a: Song, b: Song) {
        return naiveEqualCheck(a, b);
    }

    function naiveEqualCheck(a: any, b: any) {
        if (typeof a !== typeof b) return false;
        else if (typeof a !== "object") return a === b;
        else if (Array.isArray(a)) {
            if (a.length !== b.length) return false;
            for (let i = 0; i < a.length; i++) {
                if (!naiveEqualCheck(a[i], b[i])) return false;
            }
            return true;
        }

        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);

        if (aKeys.length !== bKeys.length) return false;

        for (const key of aKeys) {
            if (bKeys.indexOf(key) === -1) return false;

            if (!naiveEqualCheck(a[key], b[key])) return false;
        }

        return true;
    }

    export function inflateSong(song: pxt.assets.music.Song) {
        const base = getEmptySong(1);

        song.tracks = base.tracks.map((track, index) => {
            const existing = song.tracks.find(t => t.id === index);
            if (existing) track.notes = existing.notes;
            return track;
        })
    }

    export function getSongInfo(song: pxt.assets.music.Song): SongInfo {
        return {
            ticksPerBeat: song.ticksPerBeat,
            beatsPerMeasure: song.beatsPerMeasure,
            beatsPerMinute: song.beatsPerMinute,
            measures: song.measures
        }
    }

    export function getEmptySong(measures: number): pxt.assets.music.Song {
        return {
            ticksPerBeat: 8,
            beatsPerMeasure: 4,
            beatsPerMinute: 120,
            measures,
            tracks: [
                {
                    id: 0,
                    name: lf("Dog"),
                    notes: [],
                    iconURI: "music-editor/dog.png",
                    instrument: {
                        waveform: 1,
                        octave: 4,
                        ampEnvelope: {
                            attack: 10,
                            decay: 100,
                            sustain: 500,
                            release: 100,
                            amplitude: 1024
                        },
                        pitchLFO: {
                            frequency: 5,
                            amplitude: 0
                        }
                    }
                },
                {
                    id: 1,
                    name: lf("Duck"),
                    notes: [],
                    iconURI: "music-editor/duck.png",
                    instrument: {
                        waveform: 15,
                        octave: 4,
                        ampEnvelope: {
                            attack: 5,
                            decay: 530,
                            sustain: 705,
                            release: 450,
                            amplitude: 1024
                        },
                        pitchEnvelope: {
                            attack: 5,
                            decay: 40,
                            sustain: 0,
                            release: 100,
                            amplitude: 40
                        },
                        ampLFO: {
                            frequency: 3,
                            amplitude: 20
                        },
                        pitchLFO: {
                            frequency: 6,
                            amplitude: 2
                        }
                    }
                },
                {
                    id: 2,
                    name: lf("Cat"),
                    notes: [],
                    iconURI: "music-editor/cat.png",
                    instrument: {
                        waveform: 12,
                        octave: 5,
                        ampEnvelope: {
                            attack: 150,
                            decay: 100,
                            sustain: 365,
                            release: 400,
                            amplitude: 1024
                        },
                        pitchEnvelope: {
                            attack: 120,
                            decay: 300,
                            sustain: 0,
                            release: 100,
                            amplitude: 50
                        },
                        pitchLFO: {
                            frequency: 10,
                            amplitude: 6
                        }
                    }
                },
                {
                    id: 3,
                    name: lf("Fish"),
                    notes: [],
                    iconURI: "music-editor/fish.png",
                    instrument: {
                        waveform: 1,
                        octave: 3,
                        ampEnvelope: {
                            attack: 220,
                            decay: 105,
                            sustain: 1024,
                            release: 350,
                            amplitude: 1024
                        },
                        ampLFO: {
                            frequency: 5,
                            amplitude: 100
                        },
                        pitchLFO: {
                            frequency: 1,
                            amplitude: 4
                        }
                    }
                },
                {
                    id: 4,
                    name: lf("Car"),
                    notes: [],
                    iconURI: "music-editor/car.png",
                    instrument: {
                        waveform: 16,
                        octave: 4,
                        ampEnvelope: {
                            attack: 5,
                            decay: 100,
                            sustain: 1024,
                            release: 30,
                            amplitude: 1024
                        },
                        pitchLFO: {
                            frequency: 10,
                            amplitude: 4
                        }
                    }
                },
                {
                    id: 5,
                    name: lf("Computer"),
                    notes: [],
                    iconURI: "music-editor/computer.png",
                    instrument: {
                        waveform: 15,
                        octave: 2,
                        ampEnvelope: {
                            attack: 10,
                            decay: 100,
                            sustain: 500,
                            release: 10,
                            amplitude: 1024
                        }
                    }
                },
                {
                    id: 6,
                    name: lf("Burger"),
                    notes: [],
                    iconURI: "music-editor/burger.png",
                    instrument: {
                        waveform: 1,
                        octave: 2,
                        ampEnvelope: {
                            attack: 10,
                            decay: 100,
                            sustain: 500,
                            release: 100,
                            amplitude: 1024
                        }
                    }
                },
                {
                    id: 7,
                    name: lf("Cherry"),
                    notes: [],
                    iconURI: "music-editor/cherry.png",
                    instrument: {
                        waveform: 2,
                        octave: 3,
                        ampEnvelope: {
                            attack: 10,
                            decay: 100,
                            sustain: 500,
                            release: 100,
                            amplitude: 1024
                        }
                    }
                },
                {
                    id: 8,
                    name: lf("Lemon"),
                    notes: [],
                    iconURI: "music-editor/lemon.png",
                    instrument: {
                        waveform: 14,
                        octave: 2,
                        ampEnvelope: {
                            attack: 5,
                            decay: 70,
                            sustain: 870,
                            release: 50,
                            amplitude: 1024
                        },
                        pitchEnvelope: {
                            attack: 10,
                            decay: 45,
                            sustain: 0,
                            release: 100,
                            amplitude: 20
                        },
                        ampLFO: {
                            frequency: 1,
                            amplitude: 50
                        },
                        pitchLFO: {
                            frequency: 2,
                            amplitude: 1
                        }
                    }
                },
                {
                    id: 9,
                    name: lf("Drums"),
                    notes: [],
                    iconURI: "music-editor/explosion.png",
                    instrument: {
                        waveform: 11,
                        octave: 4,
                        ampEnvelope: {
                            attack: 10,
                            decay: 100,
                            sustain: 500,
                            release: 100,
                            amplitude: 1024
                        }
                    },
                    drums: [
                        {
                            /* neutral kick */
                            startFrequency: 100,
                            startVolume: 1024,
                            steps: [
                                {
                                    waveform: 3,
                                    frequency: 120,
                                    duration: 10,
                                    volume: 1024
                                },
                                {
                                    waveform: 3,
                                    frequency: 1,
                                    duration: 100,
                                    volume: 0
                                }
                            ]
                        },
                        {
                            /* punchy kick */
                            startFrequency: 200,
                            startVolume: 1024,
                            steps: [{
                                frequency: 0,
                                volume: 0,
                                duration: 100,
                                waveform: 1
                            }]
                        },

                        {
                            /* booming kick */
                            startFrequency: 100,
                            startVolume: 1024,
                            steps: [{
                                frequency: 0,
                                volume: 0,
                                duration: 250,
                                waveform: 1
                            }]
                        },


                        {
                            /* snare 1 */
                            startFrequency: 175,
                            startVolume: 1024,
                            steps: [
                                {
                                    waveform: 1,
                                    frequency: 200,
                                    duration: 10,
                                    volume: 1024
                                },
                                {
                                    waveform: 1,
                                    frequency: 150,
                                    duration: 20,
                                    volume: 1024
                                },
                                {
                                    waveform: 5,
                                    frequency: 1,
                                    duration: 20,
                                    volume: 100
                                },
                                {
                                    waveform: 5,
                                    frequency: 1,
                                    duration: 300,
                                    volume: 0
                                },
                            ]
                        },

                        {
                            /* snare 2 */
                            startFrequency: 220,
                            startVolume: 1024,
                            steps: [
                                {
                                    waveform: 1,
                                    frequency: 250,
                                    duration: 10,
                                    volume: 1024
                                },
                                {
                                    waveform: 1,
                                    frequency: 200,
                                    duration: 20,
                                    volume: 1024
                                },
                                {
                                    waveform: 5,
                                    frequency: 2000,
                                    duration: 20,
                                    volume: 100
                                },
                                {
                                    waveform: 5,
                                    frequency: 2000,
                                    duration: 200,
                                    volume: 0
                                },
                            ]
                        },


                        {
                            /* hat 1 */
                            startFrequency: 400,
                            startVolume: 500,
                            steps: [
                                {
                                    frequency: 450,
                                    volume: 500,
                                    duration: 10,
                                    waveform: 5
                                },
                                {
                                    frequency: 400,
                                    volume: 20,
                                    duration: 20,
                                    waveform: 5
                                },
                            ]
                        },

                        {
                            /* hat 2 */
                            startFrequency: 400,
                            startVolume: 0,
                            steps: [
                                {
                                    frequency: 450,
                                    volume: 500,
                                    duration: 5,
                                    waveform: 5
                                },
                                {
                                    frequency: 900,
                                    volume: 5,
                                    duration: 50,
                                    waveform: 5
                                },
                                {
                                    frequency: 900,
                                    volume: 0,
                                    duration: 250,
                                    waveform: 5
                                }
                            ]
                        },


                        {
                            /* hat 3 */
                            startFrequency: 400,
                            startVolume: 0,
                            steps: [
                                {
                                    frequency: 450,
                                    volume: 500,
                                    duration: 5,
                                    waveform: 5
                                },
                                {
                                    frequency: 900,
                                    volume: 200,
                                    duration: 50,
                                    waveform: 5
                                },
                                {
                                    frequency: 900,
                                    volume: 5,
                                    duration: 100,
                                    waveform: 5
                                },
                                {
                                    frequency: 900,
                                    volume: 0,
                                    duration: 400,
                                    waveform: 5
                                }
                            ]
                        },

                        {
                            /* hat 4 */
                            startFrequency: 400,
                            startVolume: 0,
                            steps: [
                                {
                                    frequency: 450,
                                    volume: 500,
                                    duration: 5,
                                    waveform: 5
                                },
                                {
                                    frequency: 900,
                                    volume: 200,
                                    duration: 100,
                                    waveform: 5
                                },
                                {
                                    frequency: 900,
                                    volume: 5,
                                    duration: 200,
                                    waveform: 5
                                },
                                {
                                    frequency: 900,
                                    volume: 0,
                                    duration: 500,
                                    waveform: 5
                                }
                            ]
                        },

                        {
                            /* double hat */
                            startFrequency: 3500,
                            startVolume: 1024,
                            steps: [
                                {
                                    frequency: 4000,
                                    volume: 0,
                                    duration: 10,
                                    waveform: 4
                                },
                                {
                                    frequency: 3500,
                                    volume: 800,
                                    duration: 1,
                                    waveform: 4
                                },
                                {
                                    frequency: 4000,
                                    volume: 0,
                                    duration: 40,
                                    waveform: 4
                                },
                                {
                                    frequency: 3500,
                                    volume: 400,
                                    duration: 1,
                                    waveform: 4
                                },
                                {
                                    frequency: 4000,
                                    volume: 0,
                                    duration: 40,
                                    waveform: 4
                                },
                            ]
                        },

                        {
                            /* metallic */
                            startFrequency: 2000,
                            startVolume: 1024,
                            steps: [
                                {
                                    frequency: 1800,
                                    volume: 15,
                                    duration: 100,
                                    waveform: 4
                                },
                                {
                                    frequency: 1800,
                                    volume: 0,
                                    duration: 200,
                                    waveform: 4
                                }
                            ]
                        },

                        {
                            /* low tom */
                            startFrequency: 200,
                            startVolume: 200,
                            steps: [
                                {
                                    frequency: 125,
                                    volume: 200,
                                    duration: 25,
                                    waveform: 14
                                },
                                {
                                    frequency: 100,
                                    volume: 15,
                                    duration: 50,
                                    waveform: 14
                                },
                                {
                                    frequency: 120,
                                    volume: 0,
                                    duration: 250,
                                    waveform: 14
                                }
                            ]
                        },

                        {
                            /* mid tom */
                            startFrequency: 300,
                            startVolume: 200,
                            steps: [
                                {
                                    frequency: 225,
                                    volume: 200,
                                    duration: 25,
                                    waveform: 14
                                },
                                {
                                    frequency: 200,
                                    volume: 15,
                                    duration: 50,
                                    waveform: 14
                                },
                                {
                                    frequency: 220,
                                    volume: 0,
                                    duration: 250,
                                    waveform: 14
                                }
                            ]
                        },

                        {
                            /* hi tom */
                            startFrequency: 500,
                            startVolume: 200,
                            steps: [
                                {
                                    frequency: 425,
                                    volume: 200,
                                    duration: 25,
                                    waveform: 14
                                },
                                {
                                    frequency: 400,
                                    volume: 15,
                                    duration: 50,
                                    waveform: 14
                                },
                                {
                                    frequency: 420,
                                    volume: 0,
                                    duration: 250,
                                    waveform: 14
                                }
                            ]
                        },
                        {
                            /* lo tom 2 */
                            startFrequency: 200,
                            startVolume: 1024,
                            steps: [
                                {
                                    frequency: 75,
                                    volume: 0,
                                    duration: 200,
                                    waveform: 1
                                }
                            ]
                        },
                        {
                            /* mid tom 2 */
                            startFrequency: 300,
                            startVolume: 1024,
                            steps: [
                                {
                                    frequency: 200,
                                    volume: 0,
                                    duration: 200,
                                    waveform: 1
                                }
                            ]
                        },


                        {
                            /* hi tom 2 */
                            startFrequency: 400,
                            startVolume: 1024,
                            steps: [
                                {
                                    frequency: 300,
                                    volume: 0,
                                    duration: 200,
                                    waveform: 1
                                }
                            ]
                        },


                        {
                            /* thump 1 */
                            startFrequency: 200,
                            startVolume: 1024,
                            steps: [
                                {
                                    frequency: 200,
                                    volume: 15,
                                    duration: 100,
                                    waveform: 4
                                },
                                {
                                    frequency: 150,
                                    volume: 0,
                                    duration: 200,
                                    waveform: 4
                                }
                            ]
                        },

                        {
                            /* thump 2 */
                            startFrequency: 450,
                            startVolume: 1024,
                            steps: [
                                {
                                    frequency: 350,
                                    volume: 15,
                                    duration: 100,
                                    waveform: 4
                                },
                                {
                                    frequency: 300,
                                    volume: 0,
                                    duration: 100,
                                    waveform: 4
                                }
                            ]
                        },

                        {
                            /* cymbal */
                            startFrequency: 2500,
                            startVolume: 1024,
                            steps: [
                                {
                                    frequency: 2500,
                                    volume: 100,
                                    duration: 150,
                                    waveform: 4
                                },
                                {
                                    frequency: 2550,
                                    volume: 0,
                                    duration: 500,
                                    waveform: 4
                                }
                            ]
                        },

                        {
                            /* crash 1 */
                            startFrequency: 3000,
                            startVolume: 1024,
                            steps: [
                                {
                                    frequency: 3000,
                                    volume: 100,
                                    duration: 300,
                                    waveform: 4
                                },
                                {
                                    frequency: 3060,
                                    volume: 0,
                                    duration: 500,
                                    waveform: 4
                                }
                            ]
                        },

                        {
                            /* crash 2 */
                            startFrequency: 800,
                            startVolume: 0,
                            steps: [
                                {
                                    frequency: 800,
                                    volume: 1024,
                                    duration: 10,
                                    waveform: 4
                                },
                                {
                                    frequency: 800,
                                    volume: 0,
                                    duration: 490,
                                    waveform: 4
                                }
                            ]
                        },

                        {
                            /* crash 3 */
                            startFrequency: 400,
                            startVolume: 0,
                            steps: [
                                {
                                    frequency: 400,
                                    volume: 1024,
                                    duration: 10,
                                    waveform: 4
                                },
                                {
                                    frequency: 400,
                                    volume: 0,
                                    duration: 400,
                                    waveform: 4
                                }
                            ]
                        },

                        {
                            /* buzzer */
                            startFrequency: 2000,
                            startVolume: 1024,
                            steps: [
                                {
                                    frequency: 2000,
                                    volume: 100,
                                    duration: 150,
                                    waveform: 16
                                },
                                {
                                    frequency: 2000,
                                    volume: 0,
                                    duration: 200,
                                    waveform: 16
                                }
                            ]
                        },]
                }
            ]
        }
    }
}