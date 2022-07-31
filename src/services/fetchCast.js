import axios from 'axios';

export const fetchCast = async movieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/';
  const myKey = 'a794a0e126a53200eb2bd9e3c7f541ab';

  const fetchResult = await axios
    .get(`3/movie/${movieId}/credits?api_key=${myKey}&language=en-US`)
    .catch(error => new Error(error));

  return fetchResult;
};
