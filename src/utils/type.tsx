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
}

export interface Product {
    id: string;
    name: string;
    category: string;
    categogyID: number;
    descript: string;
    title: string;
    subcategories: string;
    price: number;
    images: Image[];
}

interface Image {
    url: string;
    alt: string;
}
