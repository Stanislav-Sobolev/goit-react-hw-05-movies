import axios from 'axios';

export const fetchMovieDetails = async id => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/';
  const myKey = 'a794a0e126a53200eb2bd9e3c7f541ab';
  const movieId = id;

  const fetchResult = await axios
    .get(`3/movie/${movieId}?api_key=${myKey}&language=en-US`)
    .catch(error => {
      console.log(error);
    });

  return fetchResult;
};
