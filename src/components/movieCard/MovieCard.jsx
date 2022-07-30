import { StyledWrap, StyledTextWrap, StyledTitle } from './MovieCard.styled';

export const MovieCard = ({ movieData }) => {
  return (
    <>
      <StyledWrap>
        {movieData.poster_path && (
          <img
            src={'https://image.tmdb.org/t/p/w300' + movieData.poster_path}
            alt="film poster"
          />
        )}
        <StyledTextWrap>
          <h2>{movieData.title}</h2>
          <p>User score: {movieData.vote_average}</p>
          <StyledTitle>Overview</StyledTitle>
          <p>{movieData.overview}</p>
          <StyledTitle>Genres</StyledTitle>
          <p>
            {movieData.genres.reduce((acc, el) => {
              return acc + ' ' + el.name;
            }, '')}
          </p>
        </StyledTextWrap>
      </StyledWrap>
    </>
  );
};
