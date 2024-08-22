import React, {useState} from "react";
import './ListPageStyles.scss';
import {Pagination} from "@mui/material";
import ProductsList from "../../Component/ProductList/ProductsList/ProductsList";
import ProductPrices from "../../Component/ProductList/SideBar/ProductsPrices/ProductPrices";
import ProductsTypes from "../../Component/ProductList/SideBar/ProductsTypes/ProductsTypes";
import {useLocation} from "react-router-dom";
import dataListP from '../../data/dataListP.json';
import { Product } from "../../utils/type";

const ListPage: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);


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


    const [currentPage, setCurrentPage] = useState<number>(1);
    const showItems = 12;
    const lastIndex = currentPage * showItems;
    const firstIndex = lastIndex - showItems;
    const npages = Math.ceil(allProducts.length / showItems);

    // Update handleChange to match the expected type
    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const [itemsList, setItemsList] = useState(allProducts);
    const currentPosts = itemsList.slice(firstIndex, lastIndex);

    return (
        <div>
            <div className="listP_container">
                <div className="listP_left">
                    <ProductsTypes
                        handleChange={(event) => handleChange(event as React.ChangeEvent<unknown>, currentPage)}/>
                    <ProductPrices
                        handleChange={(event) => handleChange(event as React.ChangeEvent<unknown>, currentPage)}/>
                </div>

                <div className="listP_right">
                    <div className="listProductsItem">
                        <ProductsList productData={currentPosts}/>
                    </div>

                    <div className="pagination_pages">
                        <Pagination
                            count={npages}
                            variant="outlined"
                            color="primary"
                            page={currentPage}
                            onChange={(event, page) => handleChange(event, page)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListPage;
