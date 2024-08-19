import React from "react";
import {Box, Container, Grid, Paper} from "@mui/material";
// @ts-ignore
import img from "../../../../Component/images/images";
import '../content.scss'
import {Link} from "react-router-dom";
import ProductItem from '../../../../Component/ProductList/ProductItem/ProductItem';
import productsData from "../../../../data/productsData";

function Content1() {
    const getTwoProducts = productsData.slice(0, 2);
    return (
        <Box>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={6} className={'left'}>
                        <Paper elevation={3}>
                            <Link to="/login"> {/* sửa lại link bao h có menu */}
                                <img src={img.ttc} alt={`content1`} className="images"/>
                            </Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} className={'right'}>
                        {getTwoProducts.map(product => (
                            <ProductItem key={product.id} productid={product.id}/>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Content1;
