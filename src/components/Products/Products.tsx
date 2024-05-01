import React, {useState, useEffect, useCallback, useContext} from 'react';
import Title from "../common/Title/Title";
import * as styles from './Products.module.scss';
import {ITEMS_PER_PAGE, MAX_PRICE, MIN_PRICE} from "../../constants/products";
import {getProducts} from "../../services/productsServices";
import {ROLE_PROVIDER} from "../../constants/userRoles";
import AddProductButton from "./AddProductButton/AddProductButton";
import ProductsList from "./ProductsList/ProductsList";
import Pagination from "../common/Pagination/Pagination";
import useDisable from "../../hooks/useDisable";
import Spinner from "../common/Spinner/Spinner";
import ModalDeleteProduct from "./ModalDeleteProduct/ModalDeleteProduct";
import ProductsFilters from "./ProductsFilters/ProductsFilters";
import Sort from "../SortDropDown/SortDropDown";
import {DEFAULT_SORT_OPTION, Options} from "../../constants/sort";
import NoData from "./NoData/NoData";
import {ProductsFiltersTypes} from "./ProductsFilters/ProductsFilters.types";
import {Context} from "../MainLayout/MainLayout";
import {ClickEvent, ProductData} from "../../types/product.types";

interface ProductsProps {
    role: number;
}

const Products = ({role}: ProductsProps) => {
    const [currentItems, setCurrentItems] = useState([] as ProductData[]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [resultAfterSearch, setResultAfterSearch] = useState(0);
    const [isFilterShow, setIsFilterShow] = useState(false);
    const [filters, setFilters] = useState<ProductsFiltersTypes>({
        brand: [],
        ram: [],
        screenSize: [],
        minPrice: MIN_PRICE,
        maxPrice: MAX_PRICE,
    });
    const {isDisable, disableWhileReq} = useDisable();
    const [modalData, setModalData] = useState({productId : undefined, isVisible: false});
    const [selectedOption, setSelectedOption] = useState<Options>(DEFAULT_SORT_OPTION);
    const [{searchText, offset}, setSearchText] = useContext(Context);
    const isProvider = role === ROLE_PROVIDER;

    const getProductsForRole = useCallback(async () => {
        const {data, count} = await disableWhileReq(getProducts({
            limit: ITEMS_PER_PAGE,
            offset: offset === 0 ? offset : itemOffset,
            searchText,
            ...filters,
            sortOrder: selectedOption.value,
        }));
        setCurrentItems(data);
        setResultAfterSearch(count);
        setPageCount(Math.ceil(count / ITEMS_PER_PAGE));
    }, [itemOffset,filters,selectedOption,searchText]);

    const {isVisible, productId} = modalData;
    const toggleFilters = () => setIsFilterShow(!isFilterShow);

    useEffect( () => {
        getProductsForRole();
    }, [getProductsForRole]);

    const handlePageClick = (event: ClickEvent) => {
        const newOffset = event.selected * ITEMS_PER_PAGE;
        setItemOffset(newOffset);
        setSearchText({searchText, offset: undefined});
        window.scrollTo(0, 0);
    };

    const toggleDeleteModal = (productId:number | undefined = undefined) => setModalData({productId, isVisible:!isVisible});
    const deleteItemFromList = (id: number) => setCurrentItems(currentItems.filter(item => item.id !== id ));
    return (
        <div className={styles.content}>
            <div className={styles.topPart}>
                <div className={styles.withSearch}>
                    <Title>
                        { searchText
                            ? `Search result “${searchText}”`
                            : 'Products'
                        }
                    </Title>
                    {
                        searchText && resultAfterSearch !== 0 &&  <p>Shown {resultAfterSearch} results</p>
                    }
                </div>
                { isProvider ? <AddProductButton/> : <Sort onFilterShow={toggleFilters} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>}
            </div>
            <div className={styles.itemList}>
                { isProvider
                    ? <div></div>
                    : <div><ProductsFilters
                        showFilter={isFilterShow}
                        filters={filters}
                        setFilters={setFilters}
                        onChangeOffset={setItemOffset}
                        onFilterShow={toggleFilters}
                    /></div>
                }
                { !isDisable
                    ? currentItems.length > 0
                        ? <ProductsList isProvider={isProvider} onDeleteClick={toggleDeleteModal} productList={currentItems} role={role}/>
                        : <NoData/>
                    : <Spinner/>
                }
            </div>
            <Pagination onClick={handlePageClick} pageCount={pageCount} forcePage={offset === 0 ? offset : itemOffset/ITEMS_PER_PAGE}/>
            {isVisible &&
                <ModalDeleteProduct deleteItemFromList={deleteItemFromList} productId={productId as number} closeModal={toggleDeleteModal}/>
            }
        </div>
    );
};

export default Products;