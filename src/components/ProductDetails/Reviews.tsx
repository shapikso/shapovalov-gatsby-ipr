import React, {useCallback, useEffect, useState} from 'react';
import Title, {tittleSize} from "../common/Title/Title";
import {SYMBOLS_IN_FIELDS} from "../../constants/errorMessages";
import * as styles from "./ProductsDetailsData.module.scss";
import Button from "../common/Button/Button";
import useDisable from "../../hooks/useDisable";
import {sendProductComments} from "../../services/productsServices";
import Spinner from "../common/Spinner/Spinner";
import ReviewsList from "./ReviewsList/ReviewsList";;
import {Comments} from "../../types/product.types";

interface ReviewsProps {
    onSendReview: (review: string) => void,
    reviewData: string,
    commentsData: Comments[],
    productId: number,
}

const Reviews = ({onSendReview, reviewData, commentsData, productId}: ReviewsProps) => {
    const [comments, setComments] = useState(commentsData)
    const {isDisable, disableWhileReq} = useDisable();

    const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => onSendReview(e.target.value);
    const onClickHandler = async () => {
        const commentData: Comments = await disableWhileReq(sendProductComments({productId, commentText: reviewData}));
        setComments([...comments, commentData]);
    };
    return (
        <div >
            <Title size={tittleSize.medium}>Reviews</Title>
            <textarea onChange={handleChangeInput}
                className={styles.commentArea}
                maxLength={SYMBOLS_IN_FIELDS.MAX_SYMBOLS_IN_DESCRIPTION}
                placeholder="Leave comment..."
                rows={2}
            />
            <div className={styles.reviewButtonWrapper}>
                <Button disabled={isDisable} onClick={onClickHandler}>Send</Button>
            </div>
            <div className={styles.reviewsBlock}>
                {!isDisable ? <ReviewsList commentsData={comments} productId={productId}/> : <Spinner/>}
            </div>
        </div>
    );
};

export default Reviews;