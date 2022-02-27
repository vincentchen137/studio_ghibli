const router = require('express').Router();
const fetch = require('node-fetch');

require('dotenv').config();
const OMDB_API_KEY = process.env.OMDB_API_KEY;
const YT_API_KEY = process.env.YT_API_KEY;
const omdbAPI = "https://www.omdbapi.com/?i=";
const ytAPI = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&order=relevance&q="

router.get('/:movieId', async (req, res) => {

    let movieInfo, temp, movieTitle, movieVideoId;

    await fetch(omdbAPI + req.params.movieId + OMDB_API_KEY, {
        method: "GET"
    }).then(response => {return response.json();
    }).then(data => {
        movieInfo = data;
        // extract title from data into movieTitle
        temp = data.Title + ' trailer';
        movieTitle = temp.replaceAll(' ', '%20');       // changing string to be callable in YT API
        // make another API call and pass it to stream
        return fetch(ytAPI + movieTitle + YT_API_KEY);
    }).then(response2 => {return response2.json();
    }).then(data => {
    // assign first youtube videoId in results to movieVideoId
        movieVideoId = data.items[0].id.videoId;
    })

    const movieDetails = {};
    movieDetails.plot = movieInfo.Plot;
    movieDetails.title = movieInfo.Title;
    movieDetails.video = movieVideoId;   
    movieDetails.img = movieInfo.Poster;
    movieDetails.rating = movieInfo.imdbRating;
    movieDetails.certificate = movieInfo.Rated;
    movieDetails.genre = movieInfo.Genre;
    movieDetails.language = movieInfo.Language;
    movieDetails.year = movieInfo.Year;
    movieDetails.runtime = movieInfo.Runtime;
    movieDetails.director = movieInfo.Director;
    movieDetails.writer = movieInfo.Writer;
    movieDetails.actor = movieInfo.Actors;
    movieDetails.boxOffice = movieInfo.BoxOffice;

    res.send(movieDetails);
});

module.exports = router;