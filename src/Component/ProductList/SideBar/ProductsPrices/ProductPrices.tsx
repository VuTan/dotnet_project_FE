import React, {useState} from "react";
import './ProductPrices.scss';
import Input from "../../../../Component/ProductList/SideBar/input/input";

interface PriceOption {
    classnames: string;
    id: string;
    title: string;
}

interface ProductPricesProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductPrices: React.FC<ProductPricesProps> = ({handleChange}) => {
    const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

    const pricesOptions: PriceOption[] = [
        {classnames: "under_30k", id: "under_30k", title: "Giá dưới 30.000đ"},
        {classnames: "30k_50k", id: "30k_50k", title: "30.000đ - 50.000đ"},
        {classnames: "50k_80k", id: "50k_80k", title: "50.000đ - 80.000đ"},
        {classnames: "over_80k", id: "over_80k", title: "Giá trên 80.000đ"},
    ];

    const handleAllTypeClick = () => {
        console.log("Clicked All Types");
        setSelectedPrice('all');
    };

    const handleToggle = (value: string) => {
        setSelectedPrice(value);
    };

    return (
        <div className="productsPrices_container">
            <h2> MỨC GIÁ</h2>

            <label className={`label_sidebar ${selectedPrice === 'all' ? 'selected' : ''}`}
                   onClick={handleAllTypeClick}>
                <input type="radio" className="allPrices" name="pricesType" value="all" onChange={handleChange}/>
                <span className="choose"> </span> Tất cả
            </label>

            {pricesOptions.map((prices) => (
                <label
                    key={prices.id}
                    className={`label_sidebar ${selectedPrice === prices.id ? 'selected' : ''}`}
                    onClick={() => handleToggle(prices.id)}>
                <Input
                    key={prices.id}
                    classnames={prices.classnames}
                    name="pricesType"
                    id={prices.id}
                    title={prices.title}
                    handleChange={handleChange}
                />
                </label>
            ))}

        </div>
    );
}

export default ProductPrices;

