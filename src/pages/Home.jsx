import { useState, useEffect } from 'react';
import { RenderMoviesList } from '../components/RenderMoviesList';
import { fetchTrending } from '../services/fetchTrending';

export const Home = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const fetchMovies = await fetchTrending();
      setResponse(fetchMovies.data.results);
    };
    fetch();
  }, []);

  return (
    <>
      <h2>Tranding today</h2>
      <RenderMoviesList movieData={response} />
    </>
  );
};
