import {Product} from "../../../../utils/type";

interface SubCategory {
    id: string;
    name: string;
}
export interface TypeOption {
    id: string;
    title: string;
    subcategories: SubCategory[];
}