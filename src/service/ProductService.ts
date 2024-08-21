import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Product} from "../utils/type";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: "https://localhost:7184/api/Product/"}),
    endpoints: (build) => ({
        getProduct: build.query <Product, string>({
            query: (id:string ) => `${id}`
        }),

    })
});

export const {useGetProductQuery} = productApi