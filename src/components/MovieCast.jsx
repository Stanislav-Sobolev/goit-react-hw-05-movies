import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieCast = () => {
  const [cast, setCast] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchCast(id);
  }, [id]);

  const fetchCast = async movieId => {
    axios.defaults.baseURL = 'https://api.themoviedb.org/';
    const myKey = 'a794a0e126a53200eb2bd9e3c7f541ab';

    await axios
      .get(`3/movie/${movieId}/credits?api_key=${myKey}&language=en-US`)
      .then(res => setCast(res.data.cast))
      .catch(error => new Error(error));
  };

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
