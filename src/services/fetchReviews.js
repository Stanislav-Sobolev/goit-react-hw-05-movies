import axios from 'axios';

export const fetchReviews = async movieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/';
  const myKey = 'a794a0e126a53200eb2bd9e3c7f541ab';

  const fetchResult = await axios
    .get(`3/movie/${movieId}/reviews?api_key=${myKey}&language=en-US&page=1`)

    .catch(error => new Error(error));

  return fetchResult;
};
