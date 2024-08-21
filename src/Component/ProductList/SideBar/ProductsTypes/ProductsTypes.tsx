import React, {useState} from 'react';
import './ProductsTypes.scss';
import CategoryList from './CtegoryList/CategoryList';
import {TypeOption} from '../ProductsTypes/InterfacePTypes';
import dataCategoryListP from '../../../../data/dataCategoryListP.json';
interface ProductsTypesProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const dataCategoryList: TypeOption[] = dataCategoryListP as TypeOption[];

const ProductsTypes: React.FC<ProductsTypesProps> = ({handleChange}) => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

    const handleAllTypeClick = () => {
        console.log("Clicked All Types");
        setSelectedCategory('all');
        setExpandedCategory(null);
        setSelectedSubcategory(null);
    };

    const handleToggle = (id: string) => {
        console.log(`Toggling category: ${id}, Current expanded: ${expandedCategory}`);

        if (expandedCategory === id) {
            console.log(`Category ${id} is already expanded, no update needed`);
            return;
        }

        setExpandedCategory(id);
        setSelectedCategory(id);
        setSelectedSubcategory(null);
    };

    const handleSubcategoryClick = (subcategory: string) => {
        console.log(`Selected subcategory: ${subcategory}`);
        setSelectedSubcategory(subcategory);
    }

    return (
        <div className="productsType_container">
            <h2>Danh mục</h2>
            <CategoryList
                typesOptions={dataCategoryList}
                expandedCategory={expandedCategory}
                selectedCategory={selectedCategory}
                selectedSubcategory={selectedSubcategory}
                onToggle={handleToggle}
                onSubcategoryClick={handleSubcategoryClick}
                onSelectAll={handleAllTypeClick}
            />
        </div>
    );
};

export default ProductsTypes;
