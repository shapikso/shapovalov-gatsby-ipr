import React from 'react';
import * as styles from "../Products.module.scss";
import SingleProduct from "../SingleProduct/SingleProduct";

interface ProductsListProps {
    productList: any[],
    onDeleteClick: (productId?: number) => void,
    isProvider: boolean,
    role: number
}

const ProductsList = ({productList, onDeleteClick, isProvider, role}: ProductsListProps) => {
    return (
        <div className={`${styles.productWrapper} ${isProvider ? styles.provider : ''}`}>
            {
                productList.map(({id,createdAt,title,description,price, productImage}) => (
                    <SingleProduct
                        key={id}
                        title={title}
                        description={description}
                        createdAt={createdAt}
                        price={price}
                        image={productImage}
                        productId={id}
                        onDeleteClick={onDeleteClick}
                        role={role}
                    />
                ))
            }
        </div>
    );
};

export default ProductsList;