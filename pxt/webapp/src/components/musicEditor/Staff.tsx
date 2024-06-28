import * as React from "react";
import { classList } from "../../../../react-common/components/util";
import { addPlaybackStateListener, addTickListener, removePlaybackStateListener, removeTickListener } from "./playback";
import { BASS_CLEF_HEIGHT, BASS_CLEF_TOP, beatToX, CLEF_HEIGHT, CLEF_WIDTH, rowY, STAFF_END_WIDTH, STAFF_GRID_TICK_HEIGHT, STAFF_HEADER_FONT_SIZE, STAFF_HEADER_HEIGHT, STAFF_HEADER_OFFSET, tickToX, workspaceWidth, WORKSPACE_HEIGHT } from "./svgConstants";
import { resolveImageURL } from "./utils";

export interface StaffProps extends pxt.assets.music.SongInfo {
    top: number;
    gridTicks: number;
    isBassClef?: boolean;
}

export const Staff = (props: StaffProps) => {
    const { top, isBassClef, gridTicks, ticksPerBeat, beatsPerMeasure, beatsPerMinute, measures } = props;

    let playbackHead: SVGGElement;

    React.useEffect(() => {
        const tickTime = pxsim.music.tickToMs(beatsPerMinute, ticksPerBeat, 1);
        const tickDistance = tickToX(ticksPerBeat, 2) - tickToX(ticksPerBeat, 1);
        let playbackHeadPosition = 0;
        let isPlaying = false;
        let animationFrameRef: number;
        let lastTime: number;

        const onTick = (tick: number) => {
            playbackHeadPosition = tickToX(ticksPerBeat, tick)
            lastTime = Date.now();
            if (!isPlaying) {
                isPlaying = true;
                playbackHead.style.display = "unset";
                animationFrameRef = requestAnimationFrame(onAnimationFrame);
            }
        }

        const onStop = () => {
            isPlaying = false;
            playbackHead.style.display = "none";
            if (animationFrameRef) cancelAnimationFrame(animationFrameRef);
        }

        const onAnimationFrame = () => {
            const position = playbackHeadPosition + tickDistance * (Date.now() - lastTime) / tickTime;
            playbackHead.setAttribute("transform", `translate(${position}, ${0})`);

            if (isPlaying) animationFrameRef = requestAnimationFrame(onAnimationFrame);
        }

        addTickListener(onTick);
        addPlaybackStateListener(onStop);

        return () => {
            removeTickListener(onTick);
            removePlaybackStateListener(onStop);
            if (animationFrameRef) cancelAnimationFrame(animationFrameRef);
        }
    }, [ticksPerBeat, beatsPerMinute])

    const handlePlaybackHeadRef = (ref: SVGGElement) => {
        if (ref) playbackHead = ref;
    }

    const totalWidth = workspaceWidth(measures, beatsPerMeasure)

    const rows: JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
        rows.push(
            <line
                key={i}
                className="music-staff-row"
                x1={0}
                y1={rowY(i * 2 + 2, false)}
                x2={totalWidth}
                y2={rowY(i * 2 + 2, false)} />
        )
    }

    const beats: JSX.Element[] = [];
    const step = gridTicks;
    for (let i = 0; i < measures * beatsPerMeasure * ticksPerBeat; i += step) {
        const isBeatStart = i % ticksPerBeat === 0;
        const isMeasureStart = i % (beatsPerMeasure * ticksPerBeat) === 0;
        const isTick = !isBeatStart && !isMeasureStart;
        beats.push(
            <g key={i}>
                {isMeasureStart && !isBassClef &&
                    <text
                        x={tickToX(ticksPerBeat, i)}
                        y={STAFF_HEADER_HEIGHT - STAFF_HEADER_OFFSET}
                        textAnchor="middle"
                        fontSize={STAFF_HEADER_FONT_SIZE}>
                        {Math.floor(i / (beatsPerMeasure * ticksPerBeat)) + 1}
                    </text>
                }
                <line
                    className="music-staff-column"
                    x1={tickToX(ticksPerBeat, i)}
                    y1={STAFF_HEADER_HEIGHT - STAFF_GRID_TICK_HEIGHT}
                    x2={tickToX(ticksPerBeat, i)}
                    y2={STAFF_HEADER_HEIGHT} />
                {!isTick &&
                    <line
                        className={classList("music-staff-column", isBeatStart && "beat-start", isMeasureStart && "measure-start")}
                        x1={tickToX(ticksPerBeat, i)}
                        y1={isBassClef && isMeasureStart ? 0 : STAFF_HEADER_HEIGHT}
                        x2={tickToX(ticksPerBeat, i)}
                        y2={WORKSPACE_HEIGHT} />
                }
            </g>
        )
    }

    return <g className="music-staff" transform={`translate(0 ${top})`}>
        <rect
            className="music-staff-background"
            x={0}
            y={STAFF_HEADER_HEIGHT}
            width={totalWidth}
            height={WORKSPACE_HEIGHT - STAFF_HEADER_HEIGHT}
            />
        <image
            className="music-staff-clef"
            href={resolveImageURL(isBassClef ? "music-editor/bass-clef.svg" : "music-editor/treble-clef.svg")}
            height={isBassClef ? BASS_CLEF_HEIGHT : CLEF_HEIGHT}
            x={0}
            y={isBassClef ? BASS_CLEF_TOP : STAFF_HEADER_HEIGHT}  />
        <rect
            fill="#000"
            x={0}
            y={STAFF_HEADER_HEIGHT- STAFF_GRID_TICK_HEIGHT}
            width={totalWidth}
            height={STAFF_GRID_TICK_HEIGHT} />
        <rect
            fill="#dedede"
            x={CLEF_WIDTH}
            y={STAFF_HEADER_HEIGHT- STAFF_GRID_TICK_HEIGHT}
            width={totalWidth - CLEF_WIDTH - STAFF_END_WIDTH}
            height={STAFF_GRID_TICK_HEIGHT} />
        <g className="music-staff-rows">
            { rows }
        </g>
        <g className="music-staff-beats">
             { beats }
        </g>
        <g className="music-staff-end">
            <rect
                x={totalWidth - STAFF_END_WIDTH}
                y={STAFF_HEADER_HEIGHT}
                width={3}
                height={WORKSPACE_HEIGHT - STAFF_HEADER_HEIGHT}
            />
            <rect
                x={totalWidth - 12}
                y={STAFF_HEADER_HEIGHT}
                width={12}
                height={WORKSPACE_HEIGHT - STAFF_HEADER_HEIGHT}
            />
        </g>
        <g className="music-playback-head" ref={handlePlaybackHeadRef}>
            <line
                className="music-playback-line"
                x1={0}
                y1={STAFF_HEADER_HEIGHT}
                x2={0}
                y2={WORKSPACE_HEIGHT} />
        </g>
    </g>
}