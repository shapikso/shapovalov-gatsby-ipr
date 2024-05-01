import React, { useState,useEffect } from 'react';
import MainLayout from "../../../components/MainLayout/MainLayout";
import AddProduct from '../../../components/Products/AddNewProduct/AddNewProduct';
import {getSingleProduct} from '../../../services/productsServices'
import {ProductData} from "../../../types/product.types";
import Spinner from "../../../components/common/Spinner/Spinner";

interface EditProductPageProps {
    params: {
        pageId: string;
    };
}

const EditProductPage = ({ params }: EditProductPageProps) => {
    const param = params.pageId;
    const [productData, setProductData] = useState<ProductData>({} as ProductData);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        (async () => {
            const data = await getSingleProduct(param);
            if (!data) return;
            setProductData(data);
        })().finally(() => setIsLoading(false));
    }, [param]);

    return (
        <MainLayout>
            {isLoading
                ? <Spinner/>
                : <AddProduct productData={productData} id={param}/>
            }
        </MainLayout>
    );
};

export default EditProductPage;