import React, { useState } from 'react';
import './ProductsTypes.scss';
import Input from "../input/input";

interface TypeOption {
    classnames: string;
    categogyID: string;
    value: string;
    title: string;
    subcategories: string[];
}

interface ProductsTypesProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductsTypes: React.FC<ProductsTypesProps> = ({ handleChange }) => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

    const typesOptions: TypeOption[] = [
        {
            classnames: "coffee", categogyID: "2", value: "coffee", title: "Cà Phê",
            subcategories: ["Cà Phê Highlight", "Cà Phê Việt Nam", "Cà Phê Máy", "Cold Brew"]
        },
        {
            classnames: "fruitsBlend", categogyID: "5", value: "fruitsBlend", title: "Trái Cây Xay 0°C",
            subcategories: ["Trái Cây Xay 0°C"]
        },
        {
            classnames: "teaFruits", categogyID: "4", value: "teaFruits", title: "Trà Trái Cây - HiTea",
            subcategories: ["Trà Trái Cây", "Hi-Tea"]
        },
        {
            classnames: "milkTea", categogyID: "1", value: "milkTea", title: "Trà Sữa",
            subcategories: ["Trà Sữa"]
        },
        {
            classnames: "greenTea", categogyID: "3", value: "greenTea", title: "Trà Xanh - Chocolate",
            subcategories: ["Trà Xanh Tây Bắc", "Chocolate"]
        },
        {
            classnames: "blendIceDrink", categogyID: "3", value: "blendIceDrink", title: "Thức uống đá xay",
            subcategories: ["Đá xay Frosty"]
        },
        {
            classnames: "snackCake", categogyID: "3", value: "snackCake", title: "Bánh & Snack",
            subcategories: ["Bánh mặn", "Bánh ngọt", "Bánh Pastry"]
        },
        {
            classnames: "atHome", categogyID: "3", value: "atHome", title: "Thưởng Thức Tại Nhà",
            subcategories: ["Cà phê tại nhà"]
        },
    ];

    const handleAllTypeClick = () => {
        console.log("Clicked All Types");
        setSelectedCategory('all');
        setExpandedCategory(null);
        setSelectedSubcategory(null);
    };

    const handleToggle = (value: string) => {
        console.log(`Toggling category: ${value}, Current expanded: ${expandedCategory}`);

        // Avoid unnecessary updates
        if (expandedCategory === value) {
            console.log(`Category ${value} is already expanded, no update needed`);
            return;
        }

        setExpandedCategory(value);
        setSelectedCategory(value);
        setSelectedSubcategory(null);
    };

    const handleSubcategoryClick = (subcategory: string) => {
        console.log(`Selected subcategory: ${subcategory}`);
        setSelectedSubcategory(subcategory);
    };

    return (
        <div className="productsType_container">
            <h2>Danh mục</h2>
            <div className="checkbox_wrap">
                <label
                    className={`label_sidebar ${selectedCategory === 'all' ? 'selected' : ''}`}
                    onClick={handleAllTypeClick}
                >
                    <input type="radio" className="allTypes" name="types" value="all" />
                    <span className="choose"></span> Tất cả
                </label>

                {typesOptions.map((type) => (
                    <div key={type.value}>
                        <label
                            className={`label_sidebar ${selectedCategory === type.value ? 'selected' : ''}`}
                            onClick={() => handleToggle(type.value)}
                        >
                            <Input
                                classnames={`${type.classnames} ${selectedCategory === type.value ? 'selected' : ''}`}
                                name="types"
                                value={type.value}
                                title={type.title}
                                handleChange={handleChange}
                            />
                        </label>

                        <ul className={`subcategory_list ${expandedCategory === type.value ? 'show' : ''}`}>
                            {type.subcategories.map((subcategory, index) => (
                                <li
                                    key={index}
                                    className={`subcategory_item ${selectedSubcategory === subcategory ? 'selected' : ''}`}
                                    onClick={() => handleSubcategoryClick(subcategory)}
                                >
                                    {subcategory}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsTypes;
