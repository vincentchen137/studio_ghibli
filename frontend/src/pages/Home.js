import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Menu, MenuItem, Typography, Container, Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const imgHeight = 300;
const imgNav = '../../images/';
const imgExt = '.jpg';
const movieURL = '/movie/'

const Home = ({ movies }) => {

    const [drawer, setDrawer] = useState(null);
    const [currentSort, setCurrentSort] = useState('');
    const open = Boolean(drawer);

    const [moviesList, setMoviesList] = useState(movies.map(
        movie => {
            return movie;
        }
    ));

    const handleDrawer = (event) => {
        setDrawer(event.currentTarget);
    }

    const closeDrawer = () => {
        setDrawer(null)
    }

    // modifying moviesList back to original movies prop
    const sortByFeatured = () => {
        setMoviesList(movies.map(
            movie => {
                return movie;
            }
        ));
        setDrawer(null);
        setCurrentSort('Sorted by: Featured');
    }

    // sort titles -> modify array from oldest to newest 
    const sortByYear = () => {
        moviesList.sort((a, b) => (a.year > b.year) ? 1: -1);
        setDrawer(null);
        setCurrentSort('Sorted by: Year');
    }

    // sort titles -> modify array to range from a-z
    const sortByAlphabet = () => {
        moviesList.sort((a, b) => (a.title > b.title) ? 1 : -1);
        setDrawer(null)
        setCurrentSort('Sorted by: Alphabetical Order');
    }

    const travel = useNavigate();

    const toTravel = (URL) => {
        travel(URL);
    }

    return (
        <div>
            <Grid sx={{ p: 3 }}/>
            <Container maxWidth="xl" sx={{ mb: 1.75}}>
                <Grid container>
                    <Grid item xs={2}>
                        <Button 
                            startIcon={<FilterListIcon />}
                            id="custom-button"
                            disableElevation
                            aria-controls={open ? 'custom-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined} 
                            variant="contained" 
                            color="primary"
                            onClick={handleDrawer}
                        >Sort Movies
                        </Button>
                        <Menu
                            id="custom-menu"
                            MenuListProps={{
                                'aria-labelledby' : 'custom-button',
                            }}
                            elevation={0}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                            }}
                            anchorEl={drawer}
                            open={open}
                            onClose={closeDrawer}
                        >
                            <MenuItem disableRipple onClick={sortByFeatured}>Sort by Featured
                            </MenuItem>
                            <MenuItem disableRipple onClick={sortByYear}>Sort by Year
                            </MenuItem>
                            <MenuItem disableRipple onClick={sortByAlphabet}>Sort by Alphabetical Order
                            </MenuItem>
                        </Menu>
                        <Typography sx={{ mt: 2}}>{currentSort}</Typography>
                    </Grid>
                    <Grid item xs={10}>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="xl">
                <Grid container justifyContent="space-evenly" alignItems="stretch" backgroundColor="secondary.main">
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3  }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[0].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[0].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[0].title}</Typography>
                                <Typography align="center">{moviesList[0].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3  }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[1].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[1].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[1].title}</Typography>
                                <Typography align="center">{moviesList[1].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3 }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[2].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[2].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[2].title}</Typography>
                                <Typography align="center">{moviesList[2].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3  }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[3].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[3].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[3].title}</Typography>
                                <Typography align="center">{moviesList[3].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-evenly" alignItems="stretch" backgroundColor="secondary.main">
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3  }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[4].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[4].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[4].title}</Typography>
                                <Typography align="center">{moviesList[4].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3  }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[5].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[5].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[5].title}</Typography>
                                <Typography align="center">{moviesList[5].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3 }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[6].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[6].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[6].title}</Typography>
                                <Typography align="center">{moviesList[6].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3  }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[7].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[7].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[7].title}</Typography>
                                <Typography align="center">{moviesList[7].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-evenly" alignItems="stretch" backgroundColor="secondary.main">
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3  }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[8].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[8].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[8].title}</Typography>
                                <Typography align="center">{moviesList[8].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3  }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[9].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[9].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[9].title}</Typography>
                                <Typography align="center">{moviesList[9].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3 }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[10].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[10].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[10].title}</Typography>
                                <Typography align="center">{moviesList[10].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3  }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[11].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[11].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[11].title}</Typography>
                                <Typography align="center">{moviesList[11].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-evenly" alignItems="stretch" backgroundColor="secondary.main">
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3  }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[12].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[12].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[12].title}</Typography>
                                <Typography align="center">{moviesList[12].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3  }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[13].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[13].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[13].title}</Typography>
                                <Typography align="center">{moviesList[13].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3 }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[14].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[14].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[14].title}</Typography>
                                <Typography align="center">{moviesList[14].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3  }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[15].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[15].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[15].title}</Typography>
                                <Typography align="center">{moviesList[15].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-evenly" alignItems="stretch" backgroundColor="secondary.main">
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3  }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[16].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[16].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[16].title}</Typography>
                                <Typography align="center">{moviesList[16].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3  }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[17].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[17].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[17].title}</Typography>
                                <Typography align="center">{moviesList[17].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3 }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[18].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[18].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[18].title}</Typography>
                                <Typography align="center">{moviesList[18].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3  }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[19].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[19].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[19].title}</Typography>
                                <Typography align="center">{moviesList[19].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-evenly" backgroundColor="secondary.main">
                    <Grid item component={Card} xs={2} sx={{ alignItems: 'flex-start', mx: 2, my: 3  }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[20].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[20].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[20].title}</Typography>
                                <Typography align="center">{moviesList[20].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid item component={Card} xs={2} sx={{ mx: 2, my: 3  }}>
                        <CardActionArea onClick={() => {toTravel(movieURL+moviesList[21].id)}}>
                            <CardMedia
                                component="img"
                                height={imgHeight}
                                image={imgNav+moviesList[21].title+imgExt}
                                alt=""
                            />
                            <CardContent>
                                <Typography align="center" variant="h6" fontSize={16}>{moviesList[21].title}</Typography>
                                <Typography align="center">{moviesList[21].year}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid item xs={2} sx={{  mx: 2, my: 3  }} />
                    <Grid item xs={2} sx={{  mx: 2, my: 3  }} />
                </Grid>
            </Container>
        </div>
    );
}

export default Home;