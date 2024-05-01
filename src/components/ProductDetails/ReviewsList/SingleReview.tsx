import React from 'react';
import * as styles from'./SingleReview.module.scss';
import Star from '../../icons/smallStar.inline.svg';
import {NormaliseDate} from "../../../helpers/date";
import {UserInterface} from "../../../types/user.types";

interface SingleReviewProps {
    customer: UserInterface,
    rate: number,
    createdAt: string,
    description: string
}

const SingleReview = ({customer, rate, createdAt, description}: SingleReviewProps) => {
    const date = new NormaliseDate(createdAt);
    return (
        <div className={styles.singleReviewWrapper}>
            <div className={styles.personalInfoWrapper}>
                <img src='https://1337bucket1337.s3.eu-north-1.amazonaws.com/images/day-2-grivni-2.jpg' alt="ups"/>
            </div>
            <div className={styles.mainInfo}>
                <div className={styles.topPart}>
                    <div className={styles.infoWrapper}>
                        { (customer.email) && <p>{customer.email}</p>}
                        <div className={styles.stars}>
                            {new Array(rate).fill(1).map((item,index) => (<Star key={index}/>))}
                        </div>
                    </div>
                    <div>
                        {date.monthDayYear()}
                    </div>
                </div>
                <div className={styles.descriptionWrapper}>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default SingleReview;