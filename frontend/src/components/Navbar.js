import React from 'react';
import { Typography, Button, AppBar, Toolbar, Box, Link, Grid, Container } from '@mui/material';

const Navbar = () => {

    return (
        <div>
            <AppBar color="primary" elevation={0} position="static">
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                    >                        
                        <Grid item align="center">
                            <Link href="/">
                                <img width='100' heigh='100' src='../../images/Studio_Ghibli_Logo.jpeg' alt='' />
                            </Link>
                        </Grid>
                        <Grid item xs={11} align="center">
                            <Link
                                underline="none"
                                color="inherit"
                                href="/"
                                sx={{ fontSize: 24 }}
                            >
                                <strong>Studio Ghibli Movies</strong>
                            </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;