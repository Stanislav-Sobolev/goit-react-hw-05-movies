import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../services/fetchCast';

const MovieCast = () => {
  const [cast, setCast] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const resultFetchCast = await fetchCast(id);

        setCast(resultFetchCast.data.cast);
      } catch (error) {
        console.log('error :>> ', error);
      }
    };
    fetch();
  }, [id]);

  return (
    <>
      {cast && (
        <ul>
          {cast.slice(0, 10).map(el => {
            return (
              <li key={el.cast_id}>
                {el.profile_path && (
                  <img
                    src={
                      'https://image.tmdb.org/t/p/w200' + el.profile_path ??
                      null
                    }
                    alt="actor"
                  />
                )}
                <p>
                  <b>{el.name}</b>
                </p>
                <p>{el.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MovieCast;
