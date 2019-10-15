import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ total, movies }) => {
  return (
    <div>
      <span>{total} movies found</span>
      {movies.map(movie => {
        return (
          <MovieItem movie={movie} />
        );}
      )}
    </div>
  )
}

export default MovieList
