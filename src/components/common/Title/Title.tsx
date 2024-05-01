import React from 'react';
import * as styles from "./Title.module.scss";

export const tittleSize = {
    medium: styles.medium
};

interface TitleProps {
    size?: string;
    children: React.ReactNode
}

const Title = ({children, size}: TitleProps) => (<h1 className={`${styles.tittle} ${size}`}> {children}</h1>);

export default Title;