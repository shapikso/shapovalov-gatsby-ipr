import React, {useState} from 'react';
import * as styles from'./ProductsDetailsData.module.scss';
import Title from "../common/Title/Title";
import Reviews from "./Reviews";
import ProductType from "./ProductType/ProductType";
import Gallery from "./Gallery/Gallery";
import {SingleProductData} from "../../types/product.types";
import {getUser} from "../../services/localStorageServices";

interface ProductsDetailsDataProps extends SingleProductData {
    productId: string;
}

const ProductsDetailsData = ({ title, description, productImage, screenSize, ram, brand, price, comments, productId }:ProductsDetailsDataProps) => {
    const [reviewState, setReviewState] = useState('');
    const user = getUser();
    return (
        <div className={styles.detailsPageWrapper}>
            <div className={styles.mainBlock}>
                <Gallery image={productImage}/>
                <div className={styles.singlePhoto}>
                    <img alt='ups' src={productImage}/>
                </div>
                <div className={styles.informationBlock}>
                    <div className={styles.categoryWrapper}>
                        <ProductType data={brand}>Brand</ProductType>
                        <ProductType data={`${price}$`}>Price</ProductType>
                        <ProductType data={`${screenSize}"`}>Screen Size</ProductType>
                        <ProductType data={`${ram} Gb`}>Ram</ProductType>
                    </div>
                    <div>
                        <Title>{title}</Title>
                        <div className={styles.descriptionWrapper}>{description}</div>
                    </div>
                </div>
            </div>
            {
                user && <Reviews
                    reviewData={reviewState}
                    onSendReview={setReviewState}
                    commentsData={comments}
                    productId={+productId}
                />
            }
        </div>
    );
};

export default ProductsDetailsData;