import axios from 'axios';

// https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${myKey}&language=en-US

export const MovieCredits = async () => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/';
  const myKey = 'a794a0e126a53200eb2bd9e3c7f541ab';
  const movieId = '725201';

  const fetchTrending = await axios
    .get(`3/movie/${movieId}/credits?api_key=${myKey}&language=en-US`)
    .then(res => console.log('resCredits', res));

  return (
    <>
      <div>Trending</div>
    </>
  );
};
