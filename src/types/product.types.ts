interface DefaultDataInterface {
    id: number,
    createdAt: string,
    updatedAt: string,
}

export interface Author extends DefaultDataInterface {
    email: string,
    role: string,
}

export interface Comments extends DefaultDataInterface{
    commentText: string,
    userCommentId: number,
    productId: number,
    author: Author,
}

export interface ProductFormData extends DefaultDataInterface {
    title: string,
    brand: string,
    description: string,
    price: number,
    ram: number,
    screenSize: string,
}

export interface ProductDto extends ProductFormData{
    productImage: string,
}

export interface ProductData extends ProductDto{
    userId: number,
}

export interface SingleProductData extends ProductData {
    comments: Comments[],
}

export interface ProductDataRes {
    data: ProductData[],
    count: number
}

export interface ClickEvent  {
    index: number | null;
    selected: number;
    nextSelectedPage: number | undefined;
    event: object;
    isPrevious: boolean;
    isNext: boolean;
    isBreak: boolean;
    isActive: boolean;
}