export interface Product {
    id: number | string,
    name: string,
    price: number,
    original_price: number,
    description: string,
    imageURL: Array<object>
    brandID: string,
    specificationID: string,
}