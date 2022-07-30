import { useState, useEffect } from 'react';
import { RenderMoviesList } from '../components/RenderMoviesList';
import axios from 'axios';

export const Home = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    axios.defaults.baseURL = 'https://api.themoviedb.org/';
    const myKey = 'a794a0e126a53200eb2bd9e3c7f541ab';
    await axios
      .get(`3/trending/all/day?api_key=${myKey}`)
      .then(res => {
        setResponse(res.data.results);
      })
      .catch(error => {
        return new Error(error.message);
      });
  };

  return (
    <>
      <h2>Tranding today</h2>
      <RenderMoviesList movieData={response} />
    </>
  );
};
