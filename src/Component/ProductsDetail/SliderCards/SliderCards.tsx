import React from 'react';
import './SliderCardsStyles.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductItem from "../../ProductList/ProductItem/ProductItem";
import dataListP from '../../../data/dataListP.json';
import { Product } from "../../../utils/type";
// interface Image {
//     url: string;
//     alt: string;
// }
// interface Product {
//     id: string;
//     name: string;
//     category: string;
//     categogyID: number;
//     descript: string;
//     title: string;
//     subcategories: string;
//     price: number;
//     images: Image[];
// }

const sliderProducts: Product[] = dataListP.flatMap((subCategory) =>
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

function getRandomProducts(num: number): Product[] {
    const productsCopy = sliderProducts.slice();
    const shuffledProducts = productsCopy.sort(() => Math.random() - 0.5);
    const randomProducts = shuffledProducts.slice(0, num);
    return randomProducts;
}

// Fetch 7 random products
const randomProducts: Product[] = getRandomProducts(7);

const SliderCards: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {randomProducts.map((product) => (
                    <ProductItem
                        key={product.id}
                        productid={product.id}
                    />
                ))}
            </Slider>
        </div>
    );
}

export default SliderCards;
