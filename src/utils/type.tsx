// src/types.d.ts
interface Image {
    url: string;
    alt: string;
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

