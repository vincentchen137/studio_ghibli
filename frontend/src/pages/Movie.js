import React, { useState, useEffect } from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

const fetchURL = "http://localhost:8000/movie/";
const ytURL = "https://www.youtube.com/embed/";
const hbo = 'https://www.hbomax.com/hub/studio-ghibli';

const Movie = () => {

    const params = useParams();
    const [movie, setMovie] = useState({});

    const getMovie = (id) => {
        fetch(fetchURL + id, {
        method: 'GET'
        }).then(response => {return response.json(); 
        }).then(data => {
            setMovie(data)
        });
    }

    useEffect(() => {
        getMovie(params.movieId);
    }, []);

    // console.log(movie);
    const videoLink = movie.video;       
    const video = ytURL + videoLink      

    return (
        <div>
            <Grid sx={{ p: 3 }}/>
            <Container maxWidth="xl">
                <Grid container justifyContent="space-evenly" alignItems="center" backgroundColor="secondary.main">
                    <Typography sx={{ mt: 2}}variant="h6" fontSize={30}><strong>{movie.title}</strong></Typography>
                </Grid>
            </Container>
            <Container maxWidth="xl">
                <Grid sx={{ p: 2}} backgroundColor="secondary.main" />
                <Grid container direction="row" backgroundColor="secondary.main" justifyContent="center" alignItems="center">
                    <Grid item align="center" xs={4}>
                        <img height="400" src={movie.img} alt='' />
                    </Grid>
                    <Grid item align="center" xs={8} sx={{ p: 3}} backgroundColor="secondary.dark">
                        <iframe 
                        width="750" 
                        height="400" 
                        title="trailer" 
                        src={video}
                        frameBorder="2" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        />
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="xl">
                <Grid sx={{ py: 3}} backgroundColor="secondary.main" />
                <Grid container backgroundColor="secondary.main" justifyContent="center" alignItems="center">
                    <Grid item align="center" xs={12}>
                        <Typography align="center" fontSize={18}><strong>Plot: </strong></Typography>
                        <Typography align="center">{movie.plot}</Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="xl">
                <Grid sx={{ py: 3}} backgroundColor="secondary.main" />
                <Grid container direction="row" backgroundColor="secondary.main" justifyContent="center" alignItems="center">
                    <Grid item xs={6} sx={{ pl: 25 }}>
                        <Typography align="left" sx={{ my: 1}}><strong>IMDB Rating: </strong>{movie.rating}</Typography>
                        <Typography align="left" sx={{ my: 1}}><strong>Certificate: </strong>{movie.certificate}</Typography>
                        <Typography align="left" sx={{ my: 1}}><strong>Genre: </strong>{movie.genre}</Typography>
                        <Typography align="left" sx={{ my: 1}}><strong>Languages: </strong>{movie.language}</Typography>
                        <Typography align="left" sx={{ my: 1}}><strong>Production Year: </strong>{movie.year}</Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ pl: 25 }}>
                        <Typography align="left" sx={{ my: 1}}><strong>Runtime: </strong>{movie.runtime}</Typography>
                        <Typography align="left" sx={{ my: 1}}><strong>Box Office: </strong>{movie.boxOffice}</Typography>
                        <Typography align="left" sx={{ my: 1}}><strong>Director(s): </strong>{movie.director}</Typography>
                        <Typography align="left" sx={{ my: 1}}><strong>Writer(s): </strong>{movie.writer}</Typography>
                        <Typography align="left" sx={{ my: 1}}><strong>Actors: </strong>{movie.actor}</Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="xl">
                <Grid sx={{ pb: 4}} backgroundColor="secondary.main" />
                <Grid container backgroundColor="secondary.main">
                    <Grid item xs={12} align="center">
                        <Typography align="center" sx={{ mt: 1}}><strong>Places to watch: </strong></Typography>
                        <a href={hbo} target="_blank">
                            <img height="100" width="150" src="../../images/HBO_Max_Logo.svg" alt=''></img>
                        </a>    
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Movie;