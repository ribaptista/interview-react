import React from "react";

const MovieItem = ({ movie }) => {
  const {
    display_title,
    publication_date,
    byline,
    summary_short,
    multimedia
  } = movie;
  return (
    <section className="f f-justify-between m-top-2 border-grey-darker p-3">
      <article className="f f-column">
        <b>
          {display_title} ({publication_date})
        </b>
        <span>{byline}</span>
        <span>{summary_short}</span>
      </article>
      <div>
        {multimedia && <img alt="thumbnail of movie" src={multimedia.src} />}
      </div>
    </section>
  );
};

export default MovieItem;
