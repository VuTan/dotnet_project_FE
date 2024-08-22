import React from "react";

import './detailsPageStyle.scss';
import {useParams} from "react-router-dom";
import ProductsDetailsImgs from "../../Component/ProductsDetail/productDetailsImgs/ProductsDetailsImgs";
import ProductsDetailsInfo from "../../Component/ProductsDetail/ProductDetailInfo/ProductsDetailsInfo";
import SliderCards from "../../Component/ProductsDetail/SliderCards/SliderCards";
import ProductDiscription from "../../Component/ProductsDetail/ProductDetailsDescription/ProductDiscription";

// Define a type for URL parameters
interface RouteParams {
    [key: string]: string | undefined;
    productId?: string;
}

const DetailPage: React.FC = () => {
    const { productId } = useParams<RouteParams>();
    console.log("Tại trang product detail Product ID:" + productId);

    return (
        <div className="pdetails_main">
            <div className="pdetails_container">
                <div className="card1_container">
                    <div className="rows">
                        <div className="pdetails_imgs">
                            {productId && <ProductsDetailsImgs productId={productId} />}
                        </div>

                        <div className="pdetails_info">
                            {productId && <ProductsDetailsInfo productId={productId} />}
                        </div>
                    </div>
                </div>

                <div className="card3_container">
                    {productId && <ProductDiscription productId={productId} />}
                </div>

                <div className="card2_container">
                    <h2 className="Label_sameTypes">Có thể bạn sẽ thích</h2>
                    <SliderCards />
                </div>
            </div>
        </div>
    );
}

export default DetailPage;
