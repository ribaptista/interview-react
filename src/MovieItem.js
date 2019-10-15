import React from 'react';

const MovieItem = ({ movie }) => {
    const { display_title, publication_date, byline, summary_short, multimedia } = movie;
    return (
        <li className="movieItem">
            <h5>
                {display_title} ({publication_date})
                <br/>
                <span className="by">{byline}</span>
            </h5>
            <div className="movieContent">
                <p>{summary_short}</p>
                { multimedia && <img src={multimedia.src} /> }
            </div>
        </li>
    )
}

export default MovieItem
