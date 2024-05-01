import React from 'react';
import * as styles from "../Products.module.scss";
import Button, {buttonSize} from "../../common/Button/Button";
import Plus from '../../icons/plus.inline.svg';
import {ADD_LINK} from "../../../constants/urls";
import { navigate } from "gatsby"


const AddProductButton = () => {
    const onClickHandler = () => navigate(`${ADD_LINK}`);
    return (
        <div className={styles.buttonWrapper}>
            <Button onClick={onClickHandler} size={buttonSize.aboveMedium}>
                <Plus/>
                Add new
            </Button>
        </div>
    );
};

export default AddProductButton;