import React from 'react';
import * as styles from "./Input.module.scss";
import {SYMBOLS_IN_FIELDS} from "../../../constants/errorMessages";

export const inputSize = {
    medium: styles.medium,
    large: styles.large,
};

interface InputProps {
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    size?: string,
    type?: string,
    placeholder: string,
    name?: string,
    id?: string,
    onBlur?: (e:React.FocusEvent<HTMLInputElement, Element>) => void,
    value: string,
    error?: boolean,
    iconRight?: boolean,
    iconLeft?: boolean,
    icon?: React.ReactNode,
    disabled?: boolean,
    readOnly?: boolean,
    maxLength?: number,
}

const Input = ({
    size,
    type = 'text',
    placeholder,
    name,
    id,
    onChange,
    onBlur,
    value,
    error,
    iconRight = false,
    iconLeft = false,
    icon,
    maxLength = SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_TITLE,
    disabled,
    readOnly,
}: InputProps) => {
    return (
        <>
            <input
                type={type}
                className={`
                    ${styles.defaultInput} 
                    ${size} ${error ? styles.error : ''} 
                    ${iconRight ? styles.iconRight : ''} 
                    ${iconLeft ? styles.iconLeft : ''}
                `}
                name={name}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                readOnly={readOnly}
                maxLength={maxLength}
            />
            {icon}
        </>
    );
};
export default Input;