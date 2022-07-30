import axios from 'axios';
import { StyledAdditionalWrap } from './MovieDetails.styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { MovieCard } from 'components/movieCard/MovieCard';
import { Suspense } from 'react';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchTrending(id);
  }, [id]);

  const fetchTrending = async id => {
    axios.defaults.baseURL = 'https://api.themoviedb.org/';
    const myKey = 'a794a0e126a53200eb2bd9e3c7f541ab';
    const movieId = id;

    await axios
      .get(`3/movie/${movieId}?api_key=${myKey}&language=en-US`)
      .then(res => setMovieData(res.data))
      .catch(error => {
        setError(error.message);
      });
  };

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
