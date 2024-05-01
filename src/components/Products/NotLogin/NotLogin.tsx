import React from 'react';
import * as styles from './NotLogin.module.scss';
import Title from "../../common/Title/Title";

const NotLogin = () => {
    return (
        <div className={styles.noDataWrapper}>
            <Title>User Not Login</Title>
        </div>
    );
};

export default NotLogin;