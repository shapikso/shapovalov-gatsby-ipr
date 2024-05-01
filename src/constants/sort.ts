const ASC_SOR = 'asc';
const DESC_SORT = 'desc';
export const DEFAULT_SORT_OPTION = { value: DESC_SORT, label: 'price from hight to low' };

export const OPTIONS = [
    DEFAULT_SORT_OPTION,
    { value: ASC_SOR, label: 'price from low to hight' },
];

export interface Options {
    value: string,
    label: string,
}