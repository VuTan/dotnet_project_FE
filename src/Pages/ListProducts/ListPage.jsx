import React, {useEffect, useState} from "react";
import './ListPageStyles.scss'
import {Button, Pagination} from "@mui/material";
import ProductsList from "../../component/ProductList/ProductsList/ProductsList";
import productsData from "../../data/productsData";
import ProductPrices from "../../component/ProductList/SideBar/ProductsPrices/ProductPrices";
import ProductsTypes from "../../component/ProductList/SideBar/ProductsTypes/ProductsTypes";
import { useLocation } from "react-router-dom";

function ListPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const [currentPage, setCurrentPage] = useState(1);
    const showItems = 12;
    const lastIndex = currentPage * showItems;
    const firstIndex = lastIndex - showItems;
    // const currentPosts = productsData.slice(firstIndex, lastIndex);
    const npages = Math.ceil(productsData.length / showItems);

    const handleChange = (even, page) => {
        setCurrentPage(page)
    };

    const [itemsList, setItemsList] = useState(productsData);
    const currentPosts = itemsList.slice(firstIndex, lastIndex);

    return (
<div>

        <div className="listP_container">

            <div className="listP_left">
                <ProductsTypes  />
                <ProductPrices />
           
            </div>

            <div className="listP_right">
    
                <div className="listProductsItem">
                    <ProductsList productData={currentPosts}/>
                </div>

                <div className="pagination_pages">
                    <Pagination count={npages} variant="outlined" color="primary" page={currentPage}
                                onChange={handleChange}/>
                </div>

            </div>

        </div>
</div>
    );
}

export default ListPage;