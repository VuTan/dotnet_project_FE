import React from 'react';
import {Box, Container, Grid} from '@mui/material';
import productsData from '../../../../data/productsData';
import ProductItem from '../../../../Component/ProductList/ProductItem/ProductItem';
// import {Product} from "../../../../utils/type";

interface Image {
    url: string;
    alt: string;
}
interface Product {
    id: string;
    name: string;
    category: string;
    categogyID: number;
    descript: string;
    title: string;
    subcategories: string;
    price: number;
    images: Image[];
}

const Content2: React.FC = () => {
    // Group products by categogyID
    const groupedProducts: Record<number, Product[]> = productsData.reduce((acc: Record<number, Product[]>, product) => {
        const {categogyID} = product;
        if (!acc[categogyID]) {
            acc[categogyID] = [];
        }
        acc[categogyID].push(product);
        return acc;
    }, {});

    // Get the first product from each group
    const selectedProducts = Object.values(groupedProducts).map(products => products[0]);

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
