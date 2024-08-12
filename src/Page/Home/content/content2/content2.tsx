import React from "react";
import {Box, Container, Grid, Paper} from "@mui/material";
import img from "../../../../Component/images/images";
import '../content.scss'
import {Link} from "react-router-dom";

function Content2() {
    return (
        <Box>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3} className={'content2'}>
                        <div>Thay thế món vào đây</div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Content2;
