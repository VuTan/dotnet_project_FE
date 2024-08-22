import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Category} from "../Component/ProductList/SideBar/ProductsTypes/InterfacePTypes";

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({baseUrl: "https://localhost:7184/api"}),
    endpoints: (build) => ({
        getCategory: build.query <Category ,void >({
            query:  () => '/Category'
        }),

    })
});

export const {useGetCategoryQuery} = categoryApi