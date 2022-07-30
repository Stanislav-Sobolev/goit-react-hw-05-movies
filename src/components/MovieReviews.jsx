import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchReviews(id);
  }, [id]);

  const fetchReviews = async movieId => {
    axios.defaults.baseURL = 'https://api.themoviedb.org/';
    const myKey = 'a794a0e126a53200eb2bd9e3c7f541ab';

    await axios
      .get(`3/movie/${movieId}/reviews?api_key=${myKey}&language=en-US&page=1`)
      .then(res => setReviews(res.data.results))
      .catch(error => new Error(error));
  };

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default MovieReviews;
