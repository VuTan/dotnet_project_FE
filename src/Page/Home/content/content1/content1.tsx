import React from "react";
import {Box, Container, Grid, Paper} from "@mui/material";
// @ts-ignore
import img from "../../../../Component/images/images";
import '../content.scss'
import {Link} from "react-router-dom";
import ProductItem from '../../../../Component/ProductList/ProductItem/ProductItem';
import dataListP from "../../../../data/dataListP.json"; // Import dataListP or appropriate data source

const allProducts = dataListP.flatMap((subCategory) =>
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

const product1 = allProducts.find(product => product.id === "70");
const product2 = allProducts.find(product => product.id === "59");

function Content1() {
    return (
        <Box>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={6} className={'left'}>
                        <Paper elevation={3}>
                            <Link to="/login"> {/* sửa lại link bao h có menu */}
                                <img src={img.ttc} alt="content1" className="images"/>
                            </Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} className={'right'}>
                        {product1 && (
                            <ProductItem productid={product1.id}/>
                        )}
                        {product2 && (
                            <ProductItem productid={product2.id}/>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Content1;
