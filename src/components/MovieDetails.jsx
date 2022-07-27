import axios from 'axios';

export const MovieDetails = async () => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/';
  const myKey = 'a794a0e126a53200eb2bd9e3c7f541ab';
  const movieId = '725201';

  const fetchTrending = await axios
    .get(`3/movie/${movieId}?api_key=${myKey}&language=en-US`)
    .then(res => console.log('resDetail', res));

  return (
    <>
      <div>Trending</div>
    </>
  );
};
