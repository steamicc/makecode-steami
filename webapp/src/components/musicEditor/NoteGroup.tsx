import * as React from "react";
import { CursorState } from "./keyboardNavigation";
import { Note } from "./Note";
import { addPlaybackStateListener, addTickListener, removePlaybackStateListener, removeTickListener } from "./playback";
import { tickToX } from "./svgConstants";
import { isBassClefNote, noteToRow } from "./utils";

export interface NoteGroupProps {
    song: pxt.assets.music.Song;
    octave: number;
    noteEvent: pxt.assets.music.NoteEvent;
    iconURI: string;
    isDrumTrack: boolean;
    cursor?: CursorState;
}

export const NoteGroup = (props: NoteGroupProps) => {
    const { song, noteEvent, octave, iconURI, isDrumTrack, cursor } = props;

    let noteGroupRef: SVGGElement;

    const playingClass = "music-note-playing";

    React.useEffect(() => {
        let isPlaying = false;

        const onTick = (tick: number) => {
            if (tick >= noteEvent.startTick && tick < noteEvent.endTick) {
                if (!isPlaying) {
                    isPlaying = true;
                    noteGroupRef.classList.add(playingClass);
                    const anims = noteGroupRef.querySelectorAll("animate");
                    for (let i = 0; i < anims.length; i++) {
                        anims.item(i).beginElement();
                    }
                }
            }
            else if (isPlaying) {
                isPlaying = false;
                noteGroupRef.classList.remove(playingClass);
            }
        }

        const onStop = () => {
            if (isPlaying) {
                isPlaying = false;
                noteGroupRef.classList.remove(playingClass);
            }
        }


        addTickListener(onTick);
        addPlaybackStateListener(onStop);

        return () => {
            removeTickListener(onTick);
            removePlaybackStateListener(onStop);
            noteGroupRef.classList.remove(playingClass);
        }
    }, [noteEvent])


    const handleNoteGroupRef = (ref: SVGGElement) => {
        if (ref) noteGroupRef = ref;
    }

    const xOffset = tickToX(song.ticksPerBeat, noteEvent.startTick)
    const noteLength = isDrumTrack ? 0 : tickToX(song.ticksPerBeat, noteEvent.endTick) - xOffset;
    const isCursor = cursor?.tick === noteEvent.startTick;

    return <g className="music-staff-note-group" transform={`translate(${xOffset}, 0)`} ref={handleNoteGroupRef}>
        {noteEvent.notes.map((note, index) => {
            const isBassClef = isBassClefNote(octave, note, isDrumTrack);
            const row = noteToRow(octave, note, isDrumTrack);
            return <Note
                key={index}
                isBassClef={isBassClef}
                row={row}
                enharmonicSpelling={note.enharmonicSpelling}
                iconURI={iconURI}
                length={noteLength}
                selected={noteEvent.selected}
                cursorHighlighted={isCursor && cursor.noteGroupIndex === index} />
        }
        )}
    </g>
}