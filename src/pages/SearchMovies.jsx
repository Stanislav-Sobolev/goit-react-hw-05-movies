import axios from 'axios';

// https://api.themoviedb.org/3/search/movie?api_key=${myKey}&language=en-US&page=1&include_adult=false&query=${query}

export const SearchMovies = async () => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/';
  const myKey = 'a794a0e126a53200eb2bd9e3c7f541ab';
  const movieId = '725201';
  const query = 'batman';

  const fetchTrending = await axios
    .get(
      `3/search/movie?api_key=${myKey}&language=en-US&page=1&include_adult=false&query=${query}`
    )
    .then(res => console.log('resSearch', res));

  return (
    <>
      <div>Trending</div>
    </>
  );
};
