import React from 'react';
import {
  ItemContainer,
  Title,
  Legend,
  MovieBox,
  Paragraph,
  Image
} from './MovieItem.styled'

const MovieItem = ({ movie }) => {
  const { display_title, publication_date, byline, summary_short, multimedia } = movie;
  return (
    <ItemContainer>
      <Title>{display_title} ({publication_date})</Title>
      <Legend>{byline}</Legend>

      <MovieBox>
        <Paragraph>{summary_short}</Paragraph>
        { multimedia && <Image src={multimedia.src} name={`${display_title} by: ${byline}`} /> }
      </MovieBox>
    </ItemContainer>
  )
}

export default MovieItem
