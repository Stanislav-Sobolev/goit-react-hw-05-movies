import { RenderMoviesList } from 'components/RenderMoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from '../services/fetchQuery';

const SearchMovies = () => {
  const [foundMovies, setFoundMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams('');
  const [query, setQuery] = useState('');
  const search = searchParams.get('search') ?? '';

  useEffect(() => {
    if (!search) {
      return;
    }

    const fetchQuery = async () => {
      try {
        const movies = await fetchMovies(search);

        setFoundMovies(movies.data.results);
      } catch (error) {
        console.log('error :>> ', error);
      }
    };

    fetchQuery();
  }, [search]);

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.query;

    value ? setSearchParams({ search: value }) : setSearchParams({});
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {foundMovies && <RenderMoviesList movieData={foundMovies} />}
    </>
  );
};

export default SearchMovies;
