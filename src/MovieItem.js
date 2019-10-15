import React from 'react';

const MovieItem = ({ movie }) => {
  const { display_title, publication_date, byline, summary_short, multimedia } = movie;
  return (
    <div>
      <b>{display_title} ({publication_date})</b><br/>
      { multimedia && <img src={multimedia.src} /> }<br/>
      <span>{byline}</span><br/>
      <span>{summary_short}</span>
      <br/>
      <br/>
    </div>
  )
}

export default MovieItem
