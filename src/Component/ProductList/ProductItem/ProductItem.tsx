import React from "react";
import './ProductItemStyles.scss';
import { formatPercentage, formatPrices } from "../../../utils";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import productsData from "../../../data/productsData";
import { Link } from 'react-router-dom';
import { PATH } from "../../../utils/path";
import { useNavigate } from "react-router-dom";
import dataListP from '../../../data/dataListP.json';
import { Product } from "../../../utils/type";

interface ProductItemProps {
    productid: string;
}

// Chuyển đổi dataListP thành Product[]
const allProducts: Product[] = dataListP.flatMap((subCategory) =>
    subCategory.products.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        imgMain: product.imgMain,
        subcategories: subCategory.nameSubCate,
        category: "",
        description: "",
        imgs: [],
        sizes: [],
        toppings: [],
    }))
);

// Tìm sản phẩm dựa trên productid
const getProductById = (id: string): Product | undefined => {
    return allProducts.find(product => product.id === id);
};

const ProductItem: React.FC<ProductItemProps> = ({ productid }) => {
    const product = getProductById(productid);
    const navigate = useNavigate();

    const handleProductClick = () => {
        if (product) {
            navigate(`/products/${product.id}`);
        }
    };

    if (!product) {
        return <div></div>;
    }

    return (
        <div className="card" key={product.id} onClick={handleProductClick}>
    <Link to={`/products/${product.id}`} className="link">
    <div className="card_top">
    <div className="wrapImgs">
    <img className="img_other" src={product.imgMain} />
    </div>
    </div>
    <div className="card_bottom">
    <h3 className="titleProduct">
        <span>{product.name}</span>
        </h3>
        <div className="bottom_wrap">
    <div className="price_container">
    <span className="prices">
        {formatPrices(product.price)}
    </span>
    </div>
    <div className="others">
    <div className="others_btns">
    <Button className="iaddCart"><AddShoppingCartIcon /></Button>
        </div>
        </div>
        </div>
        </div>
        </Link>
        </div>
);
}

export default ProductItem;

