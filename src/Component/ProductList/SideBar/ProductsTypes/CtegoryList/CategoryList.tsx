import React from 'react';
import Input from '../../input/input';

interface TypeOption {
    classnames: string;
    categogyID: string;
    value: string;
    title: string;
    subcategories: string[];
}

interface CategoryListProps {
    typesOptions: TypeOption[];
    expandedCategory: string | null;
    selectedCategory: string | null;
    selectedSubcategory: string | null;
    onToggle: (value: string) => void;
    onSubcategoryClick: (subcategory: string) => void;
    onSelectAll: () => void;
    className?: string; // New prop to control the wrapper class name
}

const CategoryList: React.FC<CategoryListProps> = ({
                                                       typesOptions,
                                                       expandedCategory,
                                                       selectedCategory,
                                                       selectedSubcategory,
                                                       onToggle,
                                                       onSubcategoryClick,
                                                       onSelectAll,
                                                       className = 'checkbox_wrap' // Default class name
                                                   }) => {
    return (
        <div className={className}>
            <label
                className={`label_sidebar ${selectedCategory === 'all' ? 'selected' : ''}`}
                onClick={onSelectAll}
            >
                <input type="radio" className="allTypes" name="types" value="all"/>
                <span className="choose"></span>
                <div className={"title-menu"}>Tất cả</div>
            </label>
            {typesOptions.map((type) => (
                <div key={type.value} className={"card-menu"}>
                    <label
                        className={`label_sidebar ${selectedCategory === type.value ? 'selected' : ''}`}
                        onClick={() => onToggle(type.value)}
                    >
                        <Input
                            classnames={`${type.classnames} ${selectedCategory === type.value ? 'selected' : ''}`}
                            name="types"
                            value={type.value}
                            title={type.title}
                            handleChange={() => {
                            }}
                        />
                    </label>

                    <ul className={`subcategory_list ${expandedCategory === type.value ? 'show' : ''}`}>
                        {type.subcategories.map((subcategory, index) => (
                            <li
                                key={index}
                                className={`subcategory_item ${selectedSubcategory === subcategory ? 'selected' : ''}`}
                                onClick={() => onSubcategoryClick(subcategory)}
                            >
                                {subcategory}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default CategoryList;
