import React from "react";
import './ProductItemStyles.scss';
import { formatPercentage, formatPrices } from "../../../utils";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import productsData from "../../../data/productsData";
import { Link } from 'react-router-dom';
import { PATH } from "../../../utils/path";
import { useNavigate } from "react-router-dom";

interface Product {
    id: string;
    title: string;
    price: number;
    images: { url: string; alt: string }[];
}

interface ProductItemProps {
    productid: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ productid }) => {
    const product: Product | undefined = productsData.find(item => item.id === productid);
    const navigate = useNavigate();

    const handleProductClick = () => {
        if (product) {
            navigate(`/products/${product.id}`);
        }
    };

    if (!product) {
        return null; // or some fallback UI
    }

    return (
        <div className="card" key={product.id} onClick={handleProductClick}>
    <Link to={`/products/${product.id}`} className="link">
    <div className="card_top">
    <div className="wrapImgs">
    <img className="img_other" src={product.images[0].url} alt={product.images[0].alt} />
    </div>
    </div>
    <div className="card_bottom">
    <h3 className="titleProduct">
        <span>{product.title}</span>
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

