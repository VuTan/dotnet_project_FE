import './ProductDiscriptionStyles.scss';
import { Product } from "../../../utils/type";
import dataPDetails from '../../../data/dataPDetails.json';
import React from "react";

interface ProductDiscriptionProps {
    productId: string;
}

const dataPDetailsTyped: Product = dataPDetails as Product;

const ProductDiscription: React.FC<ProductDiscriptionProps> = ({ productId }) => {
    const product: Product = dataPDetailsTyped;

    if (productId.toString() != dataPDetailsTyped.id) {
        return <div>Product not found</div>;
    }

    const { description } = product;

    return (
        <div className="description_container">
            <h2>Mô tả sản phẩm</h2>
            <div className="warp_descript">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProductDiscription;

