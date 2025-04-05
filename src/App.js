import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from './components/MovieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([

    {
      "Title": "Merlin",
      "Year": "2008–2012",
      "imdbID": "tt1199099",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmI5NDgyZmQtNDc3YS00Mjg0LThmMzEtZjcyNzczOTJlYWY4XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
      "Title": "Merlin",
      "Year": "1998",
      "imdbID": "tt0130414",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZDE5YWExMGMtYTA5ZS00ODNlLTkzMjEtN2U5NDUyYWIxNDZhXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
      "Title": "Arthur & Merlin: Knights of Camelot",
      "Year": "2020",
      "imdbID": "tt7052270",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxODYwMTMtZDFmNi00YTJmLTliM2ItNjIyZTEyOTYzODY0XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
      "Title": "Arthur & Merlin",
      "Year": "2015",
      "imdbID": "tt4065340",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTk0YWMzZTktYmU1MS00NWZkLTk1ZTctZjQ3MzE5MjEzNTM5XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
      "Title": "Merlin and the War of the Dragons",
      "Year": "2008",
      "imdbID": "tt1294699",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjAwMDc2NzI4M15BMl5BanBnXkFtZTcwODg3MTEwMg@@._V1_SX300.jpg"
  },
]);
  return (
    <div className='container-fluid movie-app'>
      <div className='row no-gutters'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;