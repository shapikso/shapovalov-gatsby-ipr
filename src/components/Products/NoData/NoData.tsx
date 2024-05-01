import React from 'react';
import * as styles from './NoData.module.scss';
import Title from "../../common/Title/Title";

const NoData = () => {
    return (
        <div className={styles.noDataWrapper}>
            <Title>No Data</Title>
        </div>
    );
};

export default NoData;