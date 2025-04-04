import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieList from './components/MoviesList';

const App = () => {
  const [movies, setMovies] = useState([
      {
        "Title": "Man Walking Around the Corner",
        "Year": "1887",
        "imdbID": "tt2075247",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTM3OWM5MzEtY2VkYS00YjliLWJkZTQtNGM3OGY2MGY2YTM4XkEyXkFqcGdeQXVyNDk0MDg4NDk@._V1_SX300.jpg"
      },
      {
          "Title": "The Krays: Dead Man Walking",
          "Year": "2018",
          "imdbID": "tt7858466",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMzEwNjNjN2EtMDM2Zi00MDg1LWI5NWQtMWVmM2Y1MWQzMzg0XkEyXkFqcGc@._V1_SX300.jpg"
      },
      {
        "Title": "Not in Our Name: Dead Man Walking - The Concert",
        "Year": "1998",
        "imdbID": "tt0442819",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmQyOGYzZWYtMTk1OS00YTJjLWJlNzItODFlYTMyZTI5YzU5XkEyXkFqcGdeQXVyODAyNDE3Mw@@._V1_SX300.jpg"
    },
  ]);
  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
export default App;