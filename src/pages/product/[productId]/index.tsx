import React, { useState,useEffect } from 'react';
import MainLayout from "../../../components/MainLayout/MainLayout";
import {getSingleProduct} from '../../../services/productsServices'
import {ProductData, SingleProductData} from "../../../types/product.types";
import Spinner from "../../../components/common/Spinner/Spinner";
import ProductsDetailsData from '../../../components/ProductDetails/ProductsDetailsData';

interface AboutProductPageProps {
    params: {
        productId: string;
    };
}

const AboutProductPage = ({ params }: AboutProductPageProps) => {
    const param = params.productId;
    const [productData, setProductData] = useState<ProductData>({} as SingleProductData);
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
                : <ProductsDetailsData {...productData} productId={param}/>
            }
        </MainLayout>
    );
};

export default AboutProductPage;