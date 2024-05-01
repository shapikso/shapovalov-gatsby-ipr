import React from 'react';
import * as styles from './Pagination.module.scss';
import {PAGE_RANGE_DISPLAYED} from "../../../constants/products";
import ReactPaginate from "react-paginate";
import {ClickEvent} from "../../../types/product.types";

interface PaginationProps {
    onClick: (event: ClickEvent) => void,
    pageCount: number,
    forcePage: number,
}

const Pagination = ({onClick, pageCount, forcePage}: PaginationProps) => {
    return (
        <ReactPaginate
            nextLabel=">"
            onPageChange={onClick}
            pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            pageClassName={styles.pageItem}
            previousClassName={styles.pageItem}
            nextClassName={styles.pageItem}
            breakLabel="..."
            breakClassName={styles.pageItem}
            containerClassName={styles.pagination}
            activeClassName={styles.active}
            renderOnZeroPageCount={null}
            forcePage={forcePage}
        />
    );
};
export default Pagination;