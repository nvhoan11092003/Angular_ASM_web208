export interface IProduct {
    id?: number | string,
    name: string,
    price: number,
    original_price: number,
    description: string,
    categoryId: string
    salient_features?: string,
    comments: string,
    image?: string,
}