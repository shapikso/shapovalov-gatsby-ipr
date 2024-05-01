
export interface ProductsFiltersTypes {
    brand: string[],
    ram: number[],
    screenSize: string[],
    minPrice: number,
    maxPrice: number,
}

export type CheckBoxesTypes = 'brand' | 'ram' | 'screenSize'

export interface FiltersList {
    checkBoxes: {
        [key: string]: string,
    }
    minPrice: number,
    maxPrice: number,
}