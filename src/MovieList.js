import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ total, movies }) => {
    return (
        <div className="moviesContainer">
            <h2>{total} movies found</h2>
            
            <ul className="movieList">
                {movies.map(movie => {
                    return (
                    <MovieItem movie={movie} />
                    );}
                )}
            </ul>
        </div>
    )
}

export default MovieList
