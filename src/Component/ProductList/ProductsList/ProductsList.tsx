import React from 'react';
import './ProductsList.scss';
import ProductItem from "../../../Component/ProductList/ProductItem/ProductItem";

interface Product {
    id: string;
    subcategories: string;
}

interface ProductsListProps {
    productData: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({productData}) => {

    // Group products by subcategories
    const groupedProducts: Record<string, Product[]> = productData.reduce((acc: Record<string, Product[]>, product: Product) => {
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

                    {/* Display subcategory name */}
                    <h2 className="product-group-title">{subType}</h2>

                    <div className="listItem_container">
                        {/* Display product list for each subcategory */}
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

