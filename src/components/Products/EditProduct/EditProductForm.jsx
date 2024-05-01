import React, {useState} from 'react';
import * as styles from "../Products.module.scss";
import InputForm from "../../common/InputForm/InputForm";
import {inputSize} from "../../common/Input/Input";
import FormSubmitter from "../../FormSubmitter/FormSubmiter";
import {buttonSize} from "../../common/Button/Button";
import CustomForm from "../../common/CustomForm/CustomForm";
import {updateProduct} from "../../../services/productsServices";
import {PRODUCTS_LINK} from "../../../constants/urls";
import {useNavigate} from "react-router-dom";
import useDisable from "../../../hooks/useDisable";
import {object} from "yup";
import product from "../../../validation/product";
import PropTypes from "prop-types";
import {SYMBOLS_IN_FIELDS} from "../../../constants/errorMessages";
import InputUpload from "../../InputUload/InputUpload";

const validationSchema = object({
    title: product.name,
    description: product.description,
    price: product.price,
});
const EditProductForm = ({title, description, price, image, productId}) => {
    const navigate = useNavigate();
    const {isDisable, disableWhileReq} = useDisable();
    const [iconId, setIconId] = useState(undefined);
    const initialValues = {title, description, price, image};

    const onSubmit = ({title,description,price}) => {
        disableWhileReq(updateProduct({title,description,price: +price}, +productId, iconId))
            .then(() => navigate(PRODUCTS_LINK, {replace: true}));
    };
    return (
        <CustomForm style={styles.form} validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
            <div className={styles.inputWrapper}>
                <InputForm
                    id="title"
                    name="title"
                    label="Product Name"
                    placeholder="Enter product name"
                    size={inputSize.medium}
                />
                <InputForm
                    id="description"
                    name="description"
                    label="Product Description"
                    placeholder="Enter product description"
                    maxLength = {SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_DESCRIPTION}
                    size={inputSize.medium}
                />
                <InputForm
                    id="price"
                    name="price"
                    label="Price,$"
                    placeholder="Enter price (in $)"
                    maxLength = {SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_PRICE}
                    size={inputSize.medium}
                />
                <InputForm
                    id="productImage"
                    name="productImage"
                    label="Product Image"
                    placeholder="Add product image"
                    size={inputSize.medium}
                    icon={<InputUpload onDisableWhileReq={disableWhileReq} onLoadFile={setIconId}/>}
                    readOnly
                    iconRight
                />
            </div>
            <FormSubmitter size={buttonSize.large} disabled={isDisable}>Update product</FormSubmitter>
        </CustomForm>
    );
};

EditProductForm.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
    productId: PropTypes.string,
};
export default EditProductForm;