import React, {useState, useEffect} from 'react';
import Checkbox from "../../common/CheckBox/Checkbox";
import * as styles from "./ProductsFilters.module.scss";
import TooltipSlider from "../../common/TooltipSlider/TooltipSlider";
import Cross from "../../icons/bigCross.inline.svg";
import {getProductFilters} from "../../../services/productsServices";
import {FiltersList, ProductsFiltersTypes} from "./ProductsFilters.types";
import {FILTERS} from "../../../constants/products";

interface ProductsFiltersProps {
    setFilters: (filters: ProductsFiltersTypes) => void,
    onChangeOffset: (offset: number) => void,
    onFilterShow: () => void,
    filters: ProductsFiltersTypes,
    showFilter: boolean,
};

const ProductsFilters = ({showFilter,setFilters, filters, onChangeOffset,onFilterShow}: ProductsFiltersProps) => {

    const [filtersState, setFiltersState] = useState<FiltersList>({checkBoxes: {}, minPrice: Number.MAX_SAFE_INTEGER, maxPrice: 0,});
    const setPrice = (price: number[] | number) => {
        const [minPrice,maxPrice] = price as number[];
        setFilters({...filters, minPrice, maxPrice});
        onChangeOffset(0);
    };
    const onChangeFilters = (data: ProductsFiltersTypes) => {
        setFilters(data);
        onChangeOffset(0);
    };

    useEffect(() => {
        (async () => {
            const filters = await getProductFilters();
            setFiltersState(filters);
        })()

    },[])

    return (
        <div className={`${styles.filterWrapper} ${showFilter ? styles.showFilters : ''}`}>
            <div className={`${styles.titleWrapper} ${styles.noFlex}`}>
                <p>Filters</p>
                <Cross onClick={onFilterShow}/>
            </div>
            <div>
                Price
                <div className={styles.rangeWrapper}>
                    <TooltipSlider
                        range
                        min={filtersState.minPrice}
                        max={filtersState.maxPrice}
                        defaultValue={[filtersState.minPrice, filtersState.maxPrice]}
                        tipFormatter={(value: number) => `${value} $`}
                        onAfterChange={setPrice}
                    />
                </div>
            </div>
            {
                Object.keys(filtersState.checkBoxes).map((name) => (
                    <div key={name}>
                        {FILTERS[name]}
                        <div className={styles.categoryWrapper}>
                            {Object.keys(filtersState.checkBoxes[name]).map((item,index) => (
                                <Checkbox
                                    key={item}
                                    setFilters={onChangeFilters}
                                    filters={filters}
                                    typeId={item as never}
                                    type={name}>
                                    {item}
                                </Checkbox>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
export default ProductsFilters;