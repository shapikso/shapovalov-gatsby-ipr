import React from 'react';
import * as styles from "./Button.module.scss";

export const buttonColor = {
    transparentPrimary: styles.transparentPrimary,
    primary: styles.primary,
    transparentError: styles.transparentError,
    transparentRole: styles.transparentRole,
    transparent: styles.transparent
};
export const buttonSize = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
    extraLarge: styles.extraLarge,
    header: styles.header,
    aboveMedium: styles.aboveMedium,
};

interface ButtonProps {
    children: React.ReactNode,
    color?: string,
    size?: string,
    onClick?: () => void,
    disabled?: boolean,
    type?: "button" | "reset" | "submit",
}

const Button = ({ color = buttonColor.primary, size = styles.large, children, onClick, disabled = false, type="button"}: ButtonProps) => {
    return (
        <button type={type} disabled={disabled} onClick={onClick} className={`${styles.defaultButton} ${color} ${size}`}>
            {children}
        </button>
    );
};
export default Button;
