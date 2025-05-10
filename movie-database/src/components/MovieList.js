import React from 'react';

const MovieList = ({ movies, handleFavouritesClick, favouriteComponent: FavouriteComponent }) => {
    return (
      <div className="movie-row">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <div className="image-container" onClick={() => handleFavouritesClick(movie)}>
              <img src={movie.Poster} alt={movie.Title} className="movie-img" />
              <div className="overlay d-flex align-items-center justify-content-center">
                <FavouriteComponent />
              </div>
            </div>
            <div className="card-details">
              <h6 className="card-title">{movie.Title}</h6>
              <p className="card-release">Release Date: {movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    );
};

export default MovieList;
