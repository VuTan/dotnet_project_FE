import React from "react";
import './ProductPrices.scss';
import Input from "../input/Input";

function ProductPrices({handleChange}) {

    const pricesOptions = [
        {classnames: "under_30k", value: "under_30k", title: "Giá dưới 30.000đ"},
        {classnames: "30k_50k", value: "30k_50k", title: "30.000đ - 50.000đ"},
        {classnames: "50k_80k", value: "50k_80k", title: "50.000đ - 80.000đ"},
        {classnames: "over_80k", value: "over_80k", title: "Giá trên 80.000đ"},
    ];

    return (

        <div className="productsPrices_container">
            <h2> MỨC GIÁ</h2>

            <label className="label_sidebar">
                <input type="radio" className="allPrices" name="pricesType" value="all" onChange={handleChange}/>
                <span className="choose"> </span> Tất cả
            </label>

            {pricesOptions.map((prices) => (
                <Input
                    key={prices.value}
                    classnames={prices.classnames}
                    name="pricesType"
                    value={prices.value}
                    title={prices.title}
                    handleChange={handleChange}
                />
            ))}

        </div>
    );
}

export default ProductPrices;