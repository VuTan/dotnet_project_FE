// src/types.d.ts

export interface ListCategory{
    categories: Category[];
}
export interface Category {
    name: string;
    subCategory?: SubCategory[];
}

export interface SubCategory {
    name: string;
    products?: Product[];

interface Image {
    source: string;
}
interface SizeOption {
    value: string;
    name: string;
    price: number;

}

interface ToppingOption {
    value: string;
    name: string;
    price: number;
}
export interface Product {
    id: string;
    name: string;
    category: string;
    categogyID: number;
    description: string;
    subcategories: string;
    price: number;
    imgs: Image[];
    sizes: SizeOption[];
    toppings: ToppingOption[];
    imgMain: string;
}

interface Image {
    url: string;
    alt: string;
}
