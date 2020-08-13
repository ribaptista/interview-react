import React from 'react';
import MovieItem from './MovieItem';
import { MovieListContainer, Legend } from './MovieList.styled'

const MovieList = ({ total, movies }) => {
  return (
    <MovieListContainer>
      <Legend>{total} movies found</Legend>
      {movies.map(movie => {
        return (
          <MovieItem movie={movie} />
        );}
      )}
    </MovieListContainer>
  )
}

export default MovieList
