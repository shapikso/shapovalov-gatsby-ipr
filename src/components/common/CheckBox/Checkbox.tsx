import React from 'react';
import * as styles from "./Checkbox.module.scss";
import Check from '../../icons/check.inline.svg';
import {CheckBoxesTypes, ProductsFiltersTypes} from "../../Products/ProductsFilters/ProductsFilters.types";

interface CheckboxProps {
    children: React.ReactNode,
    setFilters: (filters: ProductsFiltersTypes) => void,
    filters: ProductsFiltersTypes,
    typeId: never,
    type: string
}

const Checkbox = ({ children, filters,typeId,type, setFilters }: CheckboxProps) => {
    const isChecked = filters[type as CheckBoxesTypes].includes(typeId);
    const onClickHandler = () => {
        setFilters({...filters, [type]: isChecked ? filters[type as CheckBoxesTypes].filter(item => item !== typeId) : [...filters[type as CheckBoxesTypes],typeId]});
    };
    return (
        <div className={styles.checkboxWrapper}>
            <div onClick={onClickHandler} className={`${styles.customCheck} ${ isChecked ? styles.checked : ''}`}>
                <Check/>
            </div>
            {children}
        </div>
    );
};

export default Checkbox;