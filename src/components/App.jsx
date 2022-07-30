import { Home } from '../pages/Home';
import { Header } from './header/Header';
// import { SearchMovies } from '../pages/SearchMovies';
// import { MovieDetails } from './movieDetails/MovieDetails';
// import { MovieCast } from './MovieCast';
// import { MovieReviews } from './MovieReviews';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const SearchMovies = lazy(() => import('../pages/SearchMovies'));
const MovieCast = lazy(() => import('./MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews'));
const MovieDetails = lazy(() => import('./movieDetails/MovieDetails'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />

          <Route path="/movies" element={<SearchMovies />} />

          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
