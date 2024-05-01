import React from 'react';
import Dropdown, {Option} from 'react-dropdown';
import 'react-dropdown/style.css';
import * as styles from './SortDropDown.module.scss';
import './SortDropDown.scss';
import ArrowClose from "../icons/arrowClose.inline.svg";
import ArrowOpen from "../icons/arrowOpen.inline.svg";
import {OPTIONS} from "../../constants/sort";
import Filter from "../icons/filter.inline.svg";

interface SortDropDown {
    selectedOption: Option;
    setSelectedOption: (options: Option) => void;
    onFilterShow: () => void;
};

const SortDropDown = ({selectedOption,setSelectedOption, onFilterShow}: SortDropDown) => {
    return (
        <div className={styles.sortWrapper}>
            <p>Sort by:</p>
            <Dropdown
                className={styles.dropDown}
                controlClassName={styles.dropDown}
                menuClassName={styles.menu}
                options={OPTIONS}
                onChange={setSelectedOption}
                value={selectedOption}
                placeholder="Select an option"
                arrowClosed={<div className={styles.iconWrapper}><ArrowClose /></div>}
                arrowOpen={<div className={styles.iconWrapper}><ArrowOpen /></div>}
            />
            <div onClick={onFilterShow} className={styles.filterButton}><Filter/></div>
        </div>
    );
};

export default SortDropDown;