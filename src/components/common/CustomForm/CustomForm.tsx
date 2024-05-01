import React from 'react';
import PropTypes from "prop-types";
import {Form, Formik} from "formik";
import {ProductFormData} from "../../../types/product.types";

interface CustomFormProps {
    children: React.ReactNode,
    validationSchema: object,
    initialValues: ProductFormData,
    onSubmit: (result: ProductFormData) => void,
    style: string,
}

const CustomForm = ({children, validationSchema, initialValues, onSubmit, style}: CustomFormProps) => {
    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            {() => (
                <Form className={style}>
                    {children}
                </Form>
            )}
        </Formik>
    );
};

export default CustomForm;
