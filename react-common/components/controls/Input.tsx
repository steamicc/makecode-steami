import * as React from "react";
import { classList, ControlProps } from "../util";

import { Button } from "./Button";
import { FocusList } from "./FocusList";

export interface InputProps extends ControlProps {
    inputClassName?: string;
    groupClassName?: string;
    initialValue?: string;
    label?: string;
    title?: string;
    placeholder?: string;
    icon?: string;
    iconTitle?: string;
    disabled?: boolean;
    type?: string;
    readOnly?: boolean;
    autoComplete?: boolean;
    selectOnClick?: boolean;
    treatSpaceAsEnter?: boolean;
    handleInputRef?: React.RefObject<HTMLInputElement> | ((ref: HTMLInputElement) => void);
    preserveValueOnBlur?: boolean;
    options?: pxt.Map<string>;

    onChange?: (newValue: string) => void;
    onEnterKey?: (value: string) => void;
    onIconClick?: (value: string) => void;
    onBlur?: (value: string) => void;
    onOptionSelected?: (value: string) => void;
}

export const Input = (props: InputProps) => {
    const {
        id,
        className,
        inputClassName,
        groupClassName,
        role,
        ariaHidden,
        ariaLabel,
        initialValue,
        label,
        title,
        placeholder,
        icon,
        iconTitle,
        disabled,
        type,
        readOnly,
        autoComplete,
        selectOnClick,
        onChange,
        onEnterKey,
        onIconClick,
        onBlur,
        onOptionSelected,
        handleInputRef,
        preserveValueOnBlur,
        options
    } = props;

    const [value, setValue] = React.useState(undefined);
    const [expanded, setExpanded] = React.useState(false);

    let container: HTMLDivElement;

    const handleContainerRef = (ref: HTMLDivElement) => {
        if (!ref) return;
        container = ref;
    }

    const clickHandler = (evt: React.MouseEvent<any>) => {
        if (selectOnClick) {
            (evt.target as any).select()
        }

        if (options && !expanded) {
            setExpanded(true);
        }
    }

    const changeHandler = (e: React.ChangeEvent<any>) => {
        const newValue = (e.target as any).value;
        if (!readOnly && (value !== newValue)) {
            setValue(newValue);
        }
        if (onChange) {
            onChange(newValue);
        }
    }

    const keyDownHandler = (e: React.KeyboardEvent) => {
        const charCode = (typeof e.which == "number") ? e.which : e.keyCode;
        if (charCode === /*enter*/13 || props.treatSpaceAsEnter && charCode === /*space*/32) {
            if (onEnterKey) {
                e.preventDefault();
                onEnterKey(value);
            }
        } else if (options && expanded && e.key === "ArrowDown") {
            document.getElementById(getDropdownOptionId(Object.values(options)[0]))?.focus();
            e.preventDefault();
            e.stopPropagation();
        } else if (options && expanded && e.key === "ArrowUp") {
            const optionVals = Object.values(options);
            document.getElementById(getDropdownOptionId(optionVals[optionVals.length - 1]))?.focus();
            e.preventDefault();
            e.stopPropagation();
        }
    }

    const iconClickHandler = () => {
        if (onIconClick) onIconClick(value);
    }

    const expandButtonClickHandler = () => {
        if (options) {
            setExpanded(!expanded);
        }
    }

    const blurHandler = () => {
        if (onBlur) {
            onBlur(value);
        }
        if (!preserveValueOnBlur) {
            setValue(undefined);
        }
    }

    const containerBlurHandler = (e: React.FocusEvent) => {
        if (expanded && !container.contains(e.relatedTarget as HTMLElement)) {
            setExpanded(false);
        }
    }

    const optionClickHandler = (option: string) => {
        setExpanded(false);

        const value = options[option];
        setValue(value);
        if (onOptionSelected) { 
            onOptionSelected(value);
        }

        document.getElementById(id)?.focus();
    }

    const getDropdownOptionId = (option: string) => {
        return option && Object.values(options).indexOf(option) != -1 ? `dropdown-item-${option}` : undefined;
    }

    return (
        <div className={classList("common-input-wrapper", disabled && "disabled", className)} onBlur={containerBlurHandler} ref={handleContainerRef}>
            {label && <label className="common-input-label" htmlFor={id}>
                {label}
            </label>}
            <div className={classList("common-input-group", groupClassName)}>
                <input
                    id={id}
                    className={classList("common-input", icon && "has-icon", inputClassName)}
                    title={title}
                    role={role || "textbox"}
                    tabIndex={disabled ? -1 : 0}
                    aria-label={ariaLabel}
                    aria-hidden={ariaHidden}
                    type={type || "text"}
                    placeholder={placeholder}
                    value={value !== undefined ? value : (initialValue || "")}
                    readOnly={!!readOnly}
                    onClick={clickHandler}
                    onChange={changeHandler}
                    onKeyDown={keyDownHandler}
                    onBlur={blurHandler}
                    autoComplete={autoComplete ? "" : "off"}
                    autoCorrect={autoComplete ? "" : "off"}
                    autoCapitalize={autoComplete ? "" : "off"}
                    spellCheck={autoComplete}
                    disabled={disabled}
                    ref={handleInputRef} />
                {icon && (onIconClick
                    ? <Button
                        leftIcon={icon}
                        title={iconTitle}
                        disabled={disabled}
                        onClick={iconClickHandler} />
                    : <i
                        className={icon}
                        aria-hidden={true} />)}
                {options && <Button
                        leftIcon={expanded ? "fas fa-chevron-up" : "fas fa-chevron-down"}
                        title={iconTitle}
                        disabled={disabled}
                        ariaHasPopup="listbox"
                        ariaExpanded={expanded}
                        ariaLabel={ariaLabel}
                        onClick={expandButtonClickHandler} />}
            </div>
            {expanded &&
                <FocusList role="listbox"
                    className="common-menu-dropdown-pane common-dropdown-shadow"
                    childTabStopId={getDropdownOptionId(value) ?? getDropdownOptionId(Object.values(options)[0])}
                    aria-labelledby={id}
                    useUpAndDownArrowKeys={true}>
                        <ul role="presentation">
                            { Object.keys(options).map(option =>
                                <li key={option} role="presentation">
                                    <Button
                                        title={option}
                                        label={option}
                                        id={getDropdownOptionId(options[option])}
                                        className={classList("common-dropdown-item")}
                                        onClick={() => optionClickHandler(option)}
                                        ariaSelected={getDropdownOptionId(options[option]) === getDropdownOptionId(value ?? initialValue)}
                                        role="option" />
                                </li>
                            )}
                        </ul>
                </FocusList>
            }
        </div>
    );
}
