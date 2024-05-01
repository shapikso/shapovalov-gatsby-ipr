import React from 'react';
import {useField} from "formik";
import Button from "../common/Button/Button";
import {isObjectEmpty} from "../../helpers/helpers";
import PropTypes from "prop-types";

interface FormSubmitterProps {
    size: string,
    disabled?: boolean,
    children: React.ReactNode
}

const FormSubmitter = ({size, disabled = false, children}: FormSubmitterProps) => {
    const [, {error}] = useField('');
    return (
        <Button type='submit' disabled={!(isObjectEmpty(error as object)) || disabled} size={size}>{children}</Button>
    );
};

FormSubmitter.propTypes = {
    size: PropTypes.string,
    children: PropTypes.string,
    disabled: PropTypes.bool
};
export default FormSubmitter;