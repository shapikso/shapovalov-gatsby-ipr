import React from 'react';
import PropTypes from "prop-types";
import * as styles from "./InputForm.module.scss";
import {useField} from "formik";
import Input from "../Input/Input";

interface InputFormProps {
    size: string,
    label?: string,
    type?: string,
    placeholder: string,
    name: string,
    id: string,
    icon?: React.ReactNode,
    iconRight?: boolean,
    disabled?: boolean,
    maxLength?: number,
    value?: string,
    readOnly?: boolean,
}

const InputForm = ({
    size,
    label,
    type = 'text',
    placeholder,
    name,
    id,
    icon,
    iconRight,
    maxLength,
    readOnly = false,
    disabled = false
}: InputFormProps) => {
    const [field, meta] = useField({size: +size,label,type,placeholder,name,id,maxLength});

    return (
        <div className={styles.inputWrapper}>
            { label && (<label className={meta.touched && meta.error ? styles.error : '' } htmlFor={label}>{label}</label>) }
            <Input
                type={type}
                size={size}
                id={id}
                placeholder={placeholder}
                error={meta.touched && !!meta.error}
                iconRight = {iconRight}
                icon={icon}
                disabled={disabled}
                maxLength={maxLength}
                readOnly={readOnly}
                {...field}
            />
            <div className={`${styles.errorWrapper} ${styles.error}` }>
                {meta.touched && meta.error}
            </div>
        </div>
    );
};
export default InputForm;