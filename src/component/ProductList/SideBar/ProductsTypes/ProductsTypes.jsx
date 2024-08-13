import React, { useState } from 'react';
import './ProductsTypes.scss';
import Input from "../input/Input";

function ProductsTypes() {
    const [expandedCategory, setExpandedCategory] = useState(null); // Quản lý trạng thái mở rộng
    const [selectedCategory, setSelectedCategory] = useState(null); // Quản lý danh mục cha đã chọn
    const [selectedSubcategory, setSelectedSubcategory] = useState(null); // Quản lý danh mục con đã chọn

    const typesOptions = [
        {
            classnames: "coffee", categogyID: "2", value: "coffee", title: "Cà Phê",
            subcategories: ["Cà Phê Highlight", "Cà Phê Việt Nam", "Cà Phê Máy", "Cold Brew"]
        },
        {
            classnames: "fruitsBlend", categogyId: "5", value: "fruitsBlend", title: "Trái Cây Xay 0°C",
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

       // Hàm xử lý khi chọn "Tất cả"
       const handleAllTypeClick = () => {
        setSelectedCategory('all');
        setExpandedCategory(null);
        setSelectedSubcategory(null);
    };

    // Hàm xử lý sự kiện khi nhấn vào danh mục cha
    const handleToggle = (value) => {
        console.log(`Toggling category: ${value}`); // Log khi nhấn vào danh mục cha
        console.log('Previous Expanded Category:', expandedCategory); // Log trạng thái trước
        const newExpandedCategory = expandedCategory === value ? null : value;
        console.log('New Expanded Category:', newExpandedCategory); // Log trạng thái mới
        setExpandedCategory(newExpandedCategory);
        setSelectedCategory(value);
        setSelectedSubcategory(null);
    };

    // Hàm xử lý sự kiện khi nhấn vào danh mục con
    const handleSubcategoryClick = (subcategory) => {
        console.log(`Clicked subcategory: ${subcategory}`); // Log khi nhấn vào danh mục con
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
                                categogyID={type.categogyID}
                                name="types"
                                value={type.value}
                                title={type.title}
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
}

export default ProductsTypes;
