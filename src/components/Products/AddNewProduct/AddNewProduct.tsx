import React, {useState, useMemo} from 'react';
import {object} from "yup";
import product from "../../../validation/product";
import useDisable from "../../../hooks/useDisable";
import {DASHBOARD_LINK} from "../../../constants/urls";
import Title from "../../common/Title/Title";
import CustomForm from "../../common/CustomForm/CustomForm";
import * as styles from "../Products.module.scss";
import InputForm from "../../common/InputForm/InputForm";
import {inputSize} from "../../common/Input/Input";
import FormSubmitter from "../../FormSubmitter/FormSubmiter";
import {buttonSize} from "../../common/Button/Button";
import {createProduct, updateProduct} from "../../../services/productsServices";
import {INITIAL_VALUES} from "../../../constants/products";
import {SYMBOLS_IN_FIELDS} from "../../../constants/errorMessages";
import InputUpload from "../../InputUload/InputUpload";
import {navigate} from "gatsby";
import {ProductData, ProductFormData} from "../../../types/product.types";

const validationSchema = object({
    title: product.title,
    description: product.description,
    brand: product.brand,
    price: product.price,
    screenSize: product.screenSize,
    ram: product.ram,
    productImage: product.productImage,
});

interface AddNewProductProps {
    productData?: ProductData
    id?: string
}

const AddNewProduct = ({productData, id}:AddNewProductProps) => {
    const [iconId, setIconId] = useState(undefined);
    const {isDisable, disableWhileReq} = useDisable();
    const createUpdateProduct = useMemo(() => productData ? updateProduct : createProduct,[productData])
    const onSubmit = ({title,description,brand,price,ram,screenSize}: ProductFormData) => {
        disableWhileReq(createUpdateProduct({title,description,brand,price: +price, ram: +ram, screenSize, productImage: iconId as string}, id))
            .then(() => navigate(DASHBOARD_LINK, {replace: true}));
    };
    return (
        <>
            <Title>{productData ? 'Update Product' : 'New Product'}</Title>
            <CustomForm style={styles.form} validationSchema={validationSchema} initialValues={productData || INITIAL_VALUES} onSubmit={onSubmit}>
                <div className={styles.inputWrapper}>
                    <InputForm
                        id="title"
                        name="title"
                        label="Product Title"
                        placeholder="Enter product title"
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
                        id="brand"
                        name="brand"
                        label="Product Brand"
                        placeholder="Enter product brand"
                        size={inputSize.medium}
                    />
                    <InputForm
                        id="screenSize"
                        name="screenSize"
                        label="Screen Size, inches"
                        placeholder="Enter Screen Size (in inches)"
                        maxLength = {SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_PRICE}
                        size={inputSize.medium}
                    />
                    <InputForm
                        id="ram"
                        name="ram"
                        label="Amount of RAM,GB"
                        placeholder="Enter RAM (in GB)"
                        maxLength = {SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_PRICE}
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
                        type="text"
                        size={inputSize.medium}
                        icon={<InputUpload onDisableWhileReq={disableWhileReq} onLoadFile={setIconId}/>}
                        readOnly
                        iconRight
                    />
                </div>
                <FormSubmitter size={buttonSize.large} disabled={isDisable}>{productData ? 'Update product' : 'Add product'}</FormSubmitter>
            </CustomForm>
        </>
    );
};

export default AddNewProduct;