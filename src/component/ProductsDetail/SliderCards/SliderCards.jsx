import React from 'react';
import './SliderCardsStyles.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productsData from "../../../data/productsData";
import ProductItem from "../../ProductList/ProductItem/ProductItem";

function getRandomProducts(num) {

    const productsCopy = productsData.slice();

    const shuffledProducts = productsCopy.sort(() => Math.random() - 0.5);

    const randomProducts = shuffledProducts.slice(0, num);

    return randomProducts;
}

const randomProducts = getRandomProducts(7);

function SliderCards() {
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
