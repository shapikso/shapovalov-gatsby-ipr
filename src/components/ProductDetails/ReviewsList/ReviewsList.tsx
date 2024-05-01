import React from 'react';
import PropTypes from "prop-types";
import SingleReview from "./SingleReview";
import {Comments} from "../../../types/product.types";

interface ReviewsListProps {
    commentsData: Comments[]
}

const ReviewsList = ({commentsData}: ReviewsListProps) => {
    return (
        <div>
            {
                commentsData.map(({author, createdAt, commentText, id}) => (
                    <SingleReview key={id} customer={author} rate={5} createdAt={createdAt} description={commentText}/>))
            }
        </div>

    );
};

ReviewsList.propTypes = {
    commentsData: PropTypes.array
};
export default ReviewsList;