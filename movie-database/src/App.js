import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  
  const typingTimeoutRef = useRef(null);

  // Fetch movies based on search query
  const getMovieRequest = async (searchValue) => {
    try {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`; // Ensure using HTTPS
      console.log('Fetching movies for:', searchValue); // Log search term
      const response = await fetch(url);
      const responseJson = await response.json();
      
      console.log('API Response:', responseJson); // Log API response

      if (responseJson.Search) {
        setMovies(responseJson.Search);
      } else {
        setMovies([]); // Clear if no results
      }
    } catch (err) {
      console.error('Fetch failed:', err);
    }
  };

  // Debounced search effect
  useEffect(() => {
    if (searchValue.trim() !== '') {
      // Clear any previous timeout if the user is still typing
      clearTimeout(typingTimeoutRef.current);

      // Set a new timeout to trigger the search after 500ms
      typingTimeoutRef.current = setTimeout(() => {
        getMovieRequest(searchValue);
      }, 500);  // Adjust 500ms delay as necessary
    } else {
      setMovies([]); // Clear results if searchValue is empty
    }
  }, [searchValue]);

  // Default search value effect
  useEffect(() => {
    setSearchValue('Avengers'); // Default search value when app loads
  }, []);

  // Load favourites from local storage
  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  // Save to local storage
  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  // Add to favourites
  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  // Remove from favourites
  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
        <MovieList
          movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Favourites' />
      </div>
      <div className='row'>
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
};

export default App;
