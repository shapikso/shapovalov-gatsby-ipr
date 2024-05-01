import React from 'react';
import * as styles from './SingleProducts.module.scss';
import Button, {buttonSize, buttonColor} from "../../common/Button/Button";
import {navigate} from "gatsby";
import {DETAILS_LINK, EDIT_LINK, PRODUCT_PAGE, PRODUCTS_LINK, PRODUCTS_LINK_REQUEST} from "../../../constants/urls";
import {NormaliseDate} from "../../../helpers/date";
import {ROLE_PROVIDER} from "../../../constants/userRoles";

interface SingleProductProps {
    title: string,
    description: string,
    createdAt: string,
    price: number,
    image: string,
    productId: number,
    onDeleteClick: (productId?: number) => void,
    role: number
}

const SingleProduct = ({
    title,
    description,
    createdAt,
    price,
    image,
    productId,
    onDeleteClick,
    role
}: SingleProductProps) => {
    const date = new NormaliseDate(createdAt);
    const isProvider = role === ROLE_PROVIDER;
    const detailsOnProduct = () => navigate(`${PRODUCT_PAGE}/${productId}`);
    const editOnProduct = () => navigate(`${EDIT_LINK}/${productId}`);
    const handleDeleteClick = () => onDeleteClick(productId);
    return (
        <div className={`${styles.product} ${!isProvider ? styles.customer : '' }`}>
            <div className={styles.imgWrapper}>
                <img alt='ups' src={image}/>
            </div>
            <div>
                { isProvider && <p className={styles.date}>Created {date.monthDayYear()}</p>}
                <p className={styles.title}>{title}</p>
                { isProvider && <p className={styles.description}>{description}</p>}
                <p className={`${styles.price} ${!isProvider ? styles.customerPrice : '' }`}>${price}</p>
            </div>
            <div className={styles.buttonWrapper}>
                { isProvider
                    ? <>
                        <Button
                            onClick={handleDeleteClick}
                            size={buttonSize.medium}
                            color={buttonColor.transparentError}>
                            Delete
                        </Button>
                        <Button onClick={editOnProduct} size={buttonSize.medium}>Edit</Button>
                    </>
                    : <Button onClick={detailsOnProduct} size={buttonSize.large}>See detail</Button>
                }
            </div>
        </div>
    );
};
export default SingleProduct;