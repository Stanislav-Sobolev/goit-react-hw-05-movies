// https://api.themoviedb.org/3/movie/{movieId}/reviews?api_key=${myKey}&language=en-US&page=1

import axios from 'axios';

export const MovieReviews = async () => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/';
  const myKey = 'a794a0e126a53200eb2bd9e3c7f541ab';
  const movieId = '725201';

  const fetchReviews = await axios
    .get(`3/movie/${movieId}/reviews?api_key=${myKey}&language=en-US&page=1`)
    .then(res => console.log('resReviews', res.data.results));

  return (
    <>
      <div>Trending</div>
    </>
  );
};
