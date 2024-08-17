import React from 'react';
import './SliderCardsStyles.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productsData from "../../../data/productsData";
import ProductItem from "../../ProductList/ProductItem/ProductItem";
import {Product} from "../../../utils/type";
// Define the structure of a product

// Type the getRandomProducts function
function getRandomProducts(num: number): Product[] {
    const productsCopy = productsData.slice();
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
