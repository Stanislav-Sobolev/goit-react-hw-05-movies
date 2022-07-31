import { StyledAdditionalWrap } from './MovieDetails.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { MovieCard } from 'components/movieCard/MovieCard';
import { fetchMovieDetails } from '../../services/fetchMovieDetails';
import { Suspense } from 'react';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetch = async () => {
      try {
        const fetchResult = await fetchMovieDetails(id);
        setMovieData(fetchResult.data);
      } catch (error) {
        setError(error.message);
        console.log('error.message :>> ', error.message);
      }
    };

    fetch();
  }, [id]);

  return (
    <>
      {error && <p>{error}</p>}
      {movieData && (
        <>
          <Link to={location.state?.from ?? '/'}>
            <span>
              <AiOutlineArrowLeft />
              Go back
            </span>
          </Link>

          <MovieCard movieData={movieData} />

          <StyledAdditionalWrap>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </StyledAdditionalWrap>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
