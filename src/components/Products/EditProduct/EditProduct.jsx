import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import useDisable from "../../../hooks/useDisable";
import {getProduct} from "../../../services/productsServices";
import Title from "../../common/Title/Title";
import EditProductForm from "./EditProductForm";
import {INITIAL_VALUES} from "../../../constants/products";
import Spinner from "../../common/Spinner/Spinner";

const EditProduct = () => {
    const {isDisable, disableWhileReq} = useDisable();
    const { productId } = useParams();
    const [productData, setProductData] = useState(INITIAL_VALUES);
    const getProductData = useCallback( async () => {
        const { data:{ title, description, price, image }} = await disableWhileReq(getProduct(productId));
        setProductData({title, description, price, image: image?.original});
    }, [productId]);

    useEffect(() => {
        getProductData();
    },[getProductData]);

    return (
        <>
            <Title>Edit product</Title>
            {!isDisable ? <EditProductForm {...productData} productId={productId}/> : <Spinner/>}
        </>
    );
};

export default EditProduct;