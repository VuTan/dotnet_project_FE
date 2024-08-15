import React, { useState } from "react";
import './ListPageStyles.scss';
import { Pagination } from "@mui/material";
import ProductsList from "../../component/ProductList/ProductsList/ProductsList";
import productsData from "../../data/productsData";
import ProductPrices from "../../component/ProductList/SideBar/ProductsPrices/ProductPrices";
import ProductsTypes from "../../component/ProductList/SideBar/ProductsTypes/ProductsTypes";
import { useLocation } from "react-router-dom";

const ListPage: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const showItems = 12;
    const lastIndex = currentPage * showItems;
    const firstIndex = lastIndex - showItems;
    const npages = Math.ceil(productsData.length / showItems);

    // Update handleChange to match the expected type
    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const [itemsList, setItemsList] = useState(productsData);
    const currentPosts = itemsList.slice(firstIndex, lastIndex);

    return (
        <div>
            <div className="listP_container">
                <div className="listP_left">
                    <ProductsTypes handleChange={(event) => handleChange(event as React.ChangeEvent<unknown>, currentPage)} />
                    <ProductPrices handleChange={(event) => handleChange(event as React.ChangeEvent<unknown>, currentPage)}/>
                </div>

                <div className="listP_right">
                    <div className="listProductsItem">
                        <ProductsList productData={currentPosts} />
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
