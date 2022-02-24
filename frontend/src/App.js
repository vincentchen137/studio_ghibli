import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movie from './pages/Movie';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00adef'
    },
    secondary: {
      main: '#f8f9fa',
      dark: '#212529'
    }
  }
});

const movies = [
  {id: 'tt2576852', title: 'The Tale of the Princess Kaguya', year: '2013'},
  {id: 'tt0245429', title: 'Spirited Away', year: '2001'},
  {id: 'tt3398268', title: 'When Marnie Was There', year: '2014'},
  {id: 'tt0095327', title: 'Grave of the Fireflies', year: '1988'},
  {id: 'tt0347149', title: 'Howls Moving Castle', year: '2004'},
  {id: 'tt0119698', title: 'Princess Mononoke', year: '1997'},
  {id: 'tt1568921', title: 'The Secret World of Arrietty', year: '2010'},
  {id: 'tt0110008', title: 'Pom Poko', year: '1994'},
  {id: 'tt0102587', title: 'Only Yesterday', year: '1991'},
  {id: 'tt0096283', title: 'My Neighbor Totoro', year: '1988'},
  {id: 'tt2013293', title: 'The Wind Rises', year: '2013'},
  {id: 'tt0087544', title: 'Nausicaa of the Valley of the Wind', year: '1984'},
  {id: 'tt0876563', title: 'Ponyo', year: '2008'},
  {id: 'tt0097814', title: 'Kikis Delivery Service', year: '1989'},
  {id: 'tt0206013', title: 'My Neighbors The Yamadas', year: '1999'},
  {id: 'tt0104652', title: 'Porco Rosso', year: '1992'},
  {id: 'tt0092067', title: 'Castle in the Sky', year: '1986'},
  {id: 'tt0113824', title: 'Whisper of the Heart', year: '1995'},
  {id: 'tt1798188', title: 'From Up on Poppy Hill', year: '2011'},
  {id: 'tt0495596', title: 'Tales from Earthsea', year: '2006'},
  {id: 'tt0347618', title: 'The Cat Returns', year: '2002'},
  {id: 'tt0108432', title: 'Ocean Waves', year: '1993'}
];

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home movies={movies} />} />
          <Route exact path="/movie/:movieId" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
