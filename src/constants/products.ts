import {ProductFormData} from "../types/product.types";

export const ITEMS_PER_PAGE = 20;
export const BREAKFAST_CATEGORY = 1;
export const LUNCH_CATEGORY = 2;
export const DINNER_CATEGORY = 3;
export const MALE_GENDER = 1;
export const FEMALE_GENDER = 2;
export const ITALIAN_KITCHEN = 1;
export const UKRAINIAN_KITCHEN = 2;
export const INTERNATIONAL_KITCHEN = 3;
export const CHINESE_KITCHEN = 4;

export const PAGE_RANGE_DISPLAYED = 3;
export const MIN_PRICE = 1;
export const MAX_PRICE = 99999999.99;
export const INITIAL_VALUES: ProductFormData = {title: '', description: '', price: 0, brand: '', ram: 0, screenSize: ''};

export const CATEGORIES = {
    [BREAKFAST_CATEGORY]: 'Breakfast',
    [LUNCH_CATEGORY]: 'Lunch',
    [DINNER_CATEGORY]: 'Dinner',
};

export const GENDER = {
    [MALE_GENDER]: 'Man',
    [FEMALE_GENDER]: 'Woman',
};

export const KITCHEN = {
    [MALE_GENDER]: 'Man',
    [FEMALE_GENDER]: 'Woman',
};

export const IMAGES_IN_GALLERY = 3;

export const BRAND_CATEGORY = 'Brands'
export const RAM_CATEGORY = 'Ram'
export const SCREEN_SIZE_CATEGORY = 'Screen Size'

interface FiltersType {
    [key: string]: string;
}

export const FILTERS: FiltersType = {
    brand: BRAND_CATEGORY,
    ram: RAM_CATEGORY,
    screenSize: SCREEN_SIZE_CATEGORY,
};
