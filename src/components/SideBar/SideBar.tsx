import React from 'react';
import * as styles from "./SideBar.module.scss";
import {PRODUCTS_LINK, DASHBOARD_LINK} from "../../constants/urls";
import {Link} from "gatsby";

interface SideBarProps {
    isSideBarShow: boolean,
    onSideBarShow: (flag: boolean) => void,
}

const SideBar = ({isSideBarShow, onSideBarShow}: SideBarProps) => {
    const onClickHandler = () => onSideBarShow(false);
    return (
        <div className={`${styles.sideBar} ${ isSideBarShow ? styles.showSideBar : ''}`}>
            <div className={styles.nav}>
                <Link onClick={onClickHandler} to={DASHBOARD_LINK}>Dashboard</Link>
                <Link onClick={onClickHandler} to={PRODUCTS_LINK}>Products</Link>
            </div>
        </div>

    );
};
export default SideBar;