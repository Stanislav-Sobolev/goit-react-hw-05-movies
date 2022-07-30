import { Link, useLocation } from 'react-router-dom';

export const RenderMoviesList = ({ movieData }) => {
  const location = useLocation();
  const linkTo = location.pathname === '/' ? 'movies/' : '';

  return (
    <>
      {movieData && (
        <ul>
          {movieData.map(el => {
            const name = el?.title ?? el.name;
            // el.title ? el.title : el.name

            return (
              <li key={el.id}>
                <Link to={`${linkTo}${el.id}`} state={{ from: location }}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
