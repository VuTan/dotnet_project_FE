import React from 'react';
import Input from '../../input/input';
import {TypeOption} from '../InterfacePTypes';

interface CategoryListProps {
    typesOptions: TypeOption[];
    expandedCategory: string | null;
    selectedCategory: string | null;
    selectedSubcategory: string | null;
    onToggle: (id: string) => void;
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
                <input type="radio" className="allTypes" name="types" id="all"/>
                <span className="choose"></span>
                <div className={"title-menu"}>Tất cả</div>
            </label>
            {typesOptions.map((type) => (
                <div key={type.id} className={"card-menu"}>
                    <label
                        className={`label_sidebar ${selectedCategory === type.id ? 'selected' : ''}`}
                        onClick={() => onToggle(type.id)}
                    >
                        <Input
                            classnames={`${type.id} ${selectedCategory === type.id ? 'selected' : ''}`}
                            name="types"
                            id = {type.id}
                            title={type.title}
                            handleChange={() => {
                            }}
                        />
                    </label>

                    <ul className={`subcategory_list ${expandedCategory === type.id ? 'show' : ''}`}>
                        {type.subcategories.map((subcategory, index) => (
                            <li
                                key={index}
                                className={`subcategory_item ${selectedSubcategory === subcategory.id ? 'selected' : ''}`}
                                onClick={() => onSubcategoryClick(subcategory.id)}
                            >
                                {subcategory.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default CategoryList;
