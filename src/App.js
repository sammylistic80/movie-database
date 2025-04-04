import React, { useState } from 'react';

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
        "Title": "And Then One Night: The Making of 'Dead Man Walking'",
        "Year": "2001",
        "imdbID": "tt0495573",
        "Type": "movie",
        "Poster": "N/A"
    },
  ])
  return (
    <div>
      <h1>Movie Database</h1>
    </div>
  );
}
export default App;