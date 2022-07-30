import axios from 'axios';
import { RenderMoviesList } from 'components/RenderMoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchMovies = () => {
  const [foundMovies, setFoundMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('search') ?? '';

  useEffect(() => {
    if (query !== '') {
      fetchQuery();
    }
  }, []);

  const fetchQuery = async () => {
    axios.defaults.baseURL = 'https://api.themoviedb.org/';
    const myKey = 'a794a0e126a53200eb2bd9e3c7f541ab';

    await axios
      .get(
        `3/search/movie?api_key=${myKey}&language=en-US&page=1&include_adult=false&query=${query}`
      )
      .then(res => setFoundMovies(res.data.results))
      .catch(error => new Error(error));
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchQuery();
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={e =>
            e.target.value
              ? setSearchParams({ search: e.target.value })
              : setSearchParams({})
          }
        />
        <button type="submit">Search</button>
      </form>

      {foundMovies && <RenderMoviesList movieData={foundMovies} />}
    </>
  );
};

export default SearchMovies;
