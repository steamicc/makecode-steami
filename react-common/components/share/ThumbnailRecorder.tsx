import * as React from "react";
import { Button } from "../controls/Button";
import { classList } from "../util";

export interface ThumbnailRecorderProps {
    initialUri?: string;

    onApply: (uri: string) => void;
    onCancel: () => void;

    simRecorder: SimRecorder;
}

export interface SimRecorderProps {
    onSimRecorderInit: (ref: SimRecorderRef) => void;
}
export type SimRecorder = (props: SimRecorderProps) => JSX.Element
export type SimRecorderState = "default" | "recording" | "rendering"
export interface SimRecorderRef {
    state: SimRecorderState;
    startRecordingAsync: () => Promise<void>;
    stopRecordingAsync: () => Promise<string>;
    screenshotAsync: () => Promise<string>;
    addStateChangeListener: (handler: (newState: SimRecorderState) => void) => void;
    addThumbnailListener: (handler: (uri: string, type: "gif" | "png") => void) => void;
    addErrorListener: (handler: (message: string) => void) => void;
    removeStateChangeListener: (handler: (newState: SimRecorderState) => void) => void;
    removeThumbnailListener: (handler: (uri: string, type: "gif" | "png") => void) => void;
    removeErrorListener: (handler: (message: string) => void) => void;
}


export const ThumbnailRecorder = (props: ThumbnailRecorderProps) => {
    const { initialUri, onApply, onCancel, simRecorder } = props;
    const [ uri, setUri ] =  React.useState(undefined);
    const [ error, setError] = React.useState<string>(undefined)
    const [ recorderRef, setRecorderRef ] = React.useState<SimRecorderRef>(undefined);
    const [ recorderState, setRecorderState ] = React.useState<SimRecorderState>("default");

    let simContainer: HTMLDivElement;

    React.useEffect(() => {
        if (!recorderRef) return undefined;
        recorderRef.addStateChangeListener(setRecorderState);
        recorderRef.addThumbnailListener(setUri);
        recorderRef.addErrorListener(setError);

        return () => {
            recorderRef.removeStateChangeListener(setRecorderState);
            recorderRef.removeThumbnailListener(setUri);
            recorderRef.removeErrorListener(setError);
        }
    }, [recorderRef])

    const handleApplyClick = (evt?: any) => {
        onApply(uri);
    }

    const handleScreenshotClick = async () => {
        setError(undefined);
        if (recorderRef) recorderRef.screenshotAsync();
    }

    const handleRecordClick = async () => {
        setError(undefined);
        if (!recorderRef) return;

        if (recorderRef.state === "recording") {
            recorderRef.stopRecordingAsync();
        }
        else if (recorderRef.state === "default") {
            recorderRef.startRecordingAsync();
            if (simContainer) {
                const iframe = simContainer.querySelector("iframe");
                if (iframe) iframe.focus();
            }
        }
    }

    const handleSimRecorderRef = (ref: SimRecorderRef) => {
        setRecorderRef(ref);
    }

    const handleSimRecorderContainerRef = (ref: HTMLDivElement) => {
        if (ref) simContainer = ref;
    }

    const targetTheme = pxt.appTarget.appTheme;
    const screenshotLabel = targetTheme.simScreenshotKey ? lf("Screenshot ({0})", targetTheme.simScreenshotKey) : lf("Screenshot");
    const startRecordingLabel = targetTheme.simGifKey ? lf("Record ({0})", targetTheme.simGifKey) : lf("Record");
    const stopRecordingLabel = targetTheme.simGifKey ? lf("Stop recording ({0})", targetTheme.simGifKey): lf("Stop recording");
    const renderingLabel = lf("Rendering...");

    let recordLabel: string;

    switch (recorderState) {
        case "default": recordLabel = startRecordingLabel; break;
        case "recording": recordLabel = stopRecordingLabel; break;
        case "rendering": recordLabel = renderingLabel; break;
    }

    const thumbnailLabel = uri ? lf("New Thumbnail") : lf("Current Thumbnail");
    const classes = classList(
        "gif-recorder-content",
        uri && "has-uri"
    )

    return <>
        <div className={classes}>
            <div className="gif-recorder-sim">
                <div className="gif-recorder-sim-embed" ref={handleSimRecorderContainerRef}>
                    {React.createElement(simRecorder, { onSimRecorderInit: handleSimRecorderRef })}
                </div>
                <div className="gif-recorder">
                    <div className="gif-recorder-actions">
                        {recorderState === "default" &&
                            <Button className="teal inverted"
                                title={screenshotLabel}
                                label={screenshotLabel}
                                leftIcon="fas fa-camera"
                                onClick={handleScreenshotClick} />
                        }
                        <Button className="teal inverted"
                            disabled={recorderState === "rendering"}
                            title={recordLabel}
                            label={recordLabel}
                            leftIcon={`fas fa-${recorderState === "recording" ? "square" : "circle"}`}
                            onClick={handleRecordClick} />
                        <div className="spacer mobile-only" />
                        <Button className="mobile-only"
                            title={lf("Cancel")}
                            label={lf("Cancel")}
                            onClick={onCancel} />
                    </div>
                </div>
            </div>
            <div className="thumbnail-controls">
                <div className="thumbnail-preview">
                    <div>
                        <div className="thumbnail-header">
                            <span className="project-share-label">{thumbnailLabel}</span>
                            <Button
                                className="link-button mobile-only"
                                title={lf("Try again?")}
                                label={lf("Try again?")}
                                onClick={() => setUri(undefined)} />
                        </div>
                        <div className="project-share-thumbnail">
                            {recorderState !== "default" &&
                                <div className="project-thumbnail-placeholder">
                                    <div className="common-spinner" />
                                    <div className="project-thumbnail-label">
                                        {recorderState === "recording" ? lf("Recording...") : lf("Rendering GIF...")}
                                    </div>
                                </div>
                            }
                            { recorderState === "default" &&
                                ((uri || initialUri)
                                ? <img src={uri || initialUri} />
                                : <div className="thumbnail-placeholder" />)
                            }
                        </div>
                    </div>
                </div>
                <div className="thumbnail-actions">
                    <Button title={lf("Cancel")}
                        label={lf("Cancel")}
                        onClick={onCancel} />
                    {uri && recorderState === "default" &&
                        <Button className="primary"
                            title={lf("Apply")}
                            label={lf("Apply")}
                            onClick={handleApplyClick} />
                    }
                </div>
            </div>
        </div>
    </>
}