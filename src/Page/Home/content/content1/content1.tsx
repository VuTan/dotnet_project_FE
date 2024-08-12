import React from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import img from "../../../../Component/images/images";
import '../content.scss'
import {Link} from "react-router-dom";

function Content1() {
    return (
        <Box>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={6} className={'left'}>
                        <Paper elevation={3}>
                            <Link to="/login"> {/* sửa lại link bao h có menu */}
                                <img src={img.ttc} alt={`content1`} className="images" />
                            </Link>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} className={'right'}>
                        <Paper elevation={3}>
                      {/*( thêm 2 món)*/}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Content1;
