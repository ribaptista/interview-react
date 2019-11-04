import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ total, movies }) => {
  return (
    <>
      <span>{total} movies found</span>
      <div className="f f-column">
        {movies.map(movie => {
          return <MovieItem movie={movie} />;
        })}
      </div>
    </>
  );
};

export default MovieList;
