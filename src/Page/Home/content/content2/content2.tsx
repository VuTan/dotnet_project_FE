import React from 'react';
import {Box, Container, Grid} from '@mui/material';
import ProductItem from '../../../../Component/ProductList/ProductItem/ProductItem';
import dataListP from '../../../../data/dataListP.json';
import {Product} from "../../../../utils/type";

// Convert dataListP to Product[]
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

// Select the first four products
const selectedProducts = allProducts.slice(0, 4);

const Content2: React.FC = () => {
    return (
        <Box>
            <Container>
                <Grid container spacing={3}>
                    {selectedProducts.map((product) => (
                        <Grid item xs={12} md={3} key={product.id}>
                            <ProductItem productid={product.id}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Content2;
