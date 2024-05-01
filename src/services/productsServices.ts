import marketplace from "./httpServices";
import {
    COMMENTS_LINK,
    PRODUCTS_FILTERS_REQUEST,
    PRODUCTS_LINK_REQUEST,
    SINGLE_PRODUCT_LINK_REQUEST
} from "../constants/urls";
import {getUser} from "./localStorageServices";
import {ProductsFiltersTypes} from "../components/Products/ProductsFilters/ProductsFilters.types";
import {Options} from "../constants/sort";
import {UserInterface} from "../types/user.types";
import {Comments, ProductDataRes, ProductFormData} from "../types/product.types";

interface ProductFilters extends ProductsFiltersTypes {
    limit:number,
    offset: number,
    searchText: string,
    sortOrder: Options,
}
interface SendProductCommentsInterface {
    commentText: string,
    productId: number,
}

export const getProducts = async (params: ProductFilters): Promise<ProductDataRes> => {
    return await marketplace.get(PRODUCTS_LINK_REQUEST, {params});
};
export const createProduct = async (product: ProductFormData) => {
    const { email } = getUser() as UserInterface;
    await marketplace.post(PRODUCTS_LINK_REQUEST, {
        ...product,
        userEmail: email,
    });
};

export const updateProduct = async (product: ProductFormData, id: number) => {
    const {email} = getUser() as UserInterface;
    await marketplace.put(`${PRODUCTS_LINK_REQUEST}/${id}`, {
        ...product,
        userEmail: email,
    });
}

export const getSingleProduct = (productId: number) => {
    return marketplace.get(`${PRODUCTS_LINK_REQUEST}${SINGLE_PRODUCT_LINK_REQUEST}/${productId}`);
};
export const deleteProduct = (productId: number) => {
    return marketplace.delete(`${PRODUCTS_LINK_REQUEST}/${productId}`);
};

export const getProductFilters = () => {
    return marketplace.get(`${PRODUCTS_LINK_REQUEST}${PRODUCTS_FILTERS_REQUEST}`);
};

export const sendProductComments = (data: SendProductCommentsInterface): Promise<Comments> => {
    const {email} = getUser() as UserInterface;
    return marketplace.post(`${COMMENTS_LINK}`, {...data, userEmail: email})
};