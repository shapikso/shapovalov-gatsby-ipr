import React from 'react';
import * as styles from "../ProductsDetailsData.module.scss";;

interface ProductTypeProps {
    data: string,
    children: React.ReactNode,
}

const ProductType = ({children,data}: ProductTypeProps) => {
    return (
        <div>
            <p>{children}</p> <p className={styles.grey}>{data}</p>
        </div>
    );
};

export default ProductType;