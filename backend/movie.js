const router = require('express').Router();
const fetch = require('node-fetch');

const OMDB_API_KEY = "&apikey=9286c09c";
// const YT_API_KEY = "&key=AIzaSyDqJop-Gi0SFt3nGtAq3K9kff9MVJetg5A";
// const YT_API_KEY = "&key=AIzaSyDOtjy0XbEWXiuRb6h36IM_vE9kAmzFSp0";
const YT_API_KEY = "&key=AIzaSyBnaPny61PmHNNhIzPCCT7Emb_JLOUhZDQ";
const omdbAPI = "https://www.omdbapi.com/?i=";
const ytAPI = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&order=relevance&q="

router.get('/:movieId', async (req, res) => {
    // const apiMovie = (id) => {
    //     await fetch("https://www.omdbapi.com/?i=" + id + apiKey, {
    //         method: 'GET'
    //     }).then(response => {return response.json()
    //     }).then(data => {
    //         // setMovie(data);
    //         // console.log(movie);
    //         console.log(data);
    //     })
    // }
    // apiMovie(req.movieId);

    // const response = await fetch(apiURL+req.params.movieId+OMDB_API_KEY, {
    //     method: "GET"})
    // .then(res => res.json())
    // .catch(()=> {
    //     console.error('Fetch failed');
    // });

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