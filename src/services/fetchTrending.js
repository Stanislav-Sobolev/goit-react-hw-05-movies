import axios from 'axios';

export const fetchTrending = async () => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/';
  const myKey = 'a794a0e126a53200eb2bd9e3c7f541ab';

  const fetchResult = await axios
    .get(`3/trending/all/day?api_key=${myKey}`)
    .catch(error => {
      return new Error(error.message);
    });

  return fetchResult;
};
