import React from 'react';
import './ProductsList.scss'
import ProductItem from "../ProductItem/ProductItem";

function ProductsList({ productData }) {

       // Nhóm các sản phẩm theo subcategories
       const groupedProducts = productData.reduce((acc, product) => {
        const subType = product.subcategories;
        if (!acc[subType]) {
            acc[subType] = [];
        }
        acc[subType].push(product);
        return acc;
    }, {});

    return (
<div className="">
{Object.keys(groupedProducts).map((subType, index) => (
    <div key={index} className="product-group">

        {/* Hiển thị tên subcategories */}
        <h2 className="product-group-title">{subType}</h2>
        
        <div className="listItem_container">
        {/* Hiển thị danh sách sản phẩm cho từng typeInCate */}
        {groupedProducts[subType].map((product) => (
            <ProductItem
                key={product.id}
                productid={product.id}
            />
        ))}
        </div>
    </div>
))}
</div>

    );
}

export default ProductsList;