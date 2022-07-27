import axios from 'axios';

export const Trending = async () => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/';
  const myKey = 'a794a0e126a53200eb2bd9e3c7f541ab';

  const fetchTrending = await axios
    .get(`3/trending/all/day?api_key=${myKey}`)
    .then(res => console.log('res', res.data.results));

  //   api.themoviedb.org/3/trending/all/day?api_key=${myKey}

  return (
    <>
      <div>Trending</div>
    </>
  );
};
