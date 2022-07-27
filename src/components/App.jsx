import { MovieDetails } from './MovieDetails';
import { Trending } from './Trending';
import { SearchMovies } from '../pages/SearchMovies';
import { MovieCredits } from './MovieCredits';
import { MovieReviews } from './MovieReviews';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Trending />
      <MovieDetails />
      <SearchMovies />
      <MovieCredits />
      <MovieReviews />
    </div>
  );
};
