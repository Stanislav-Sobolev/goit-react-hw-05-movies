import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../services/fetchReviews';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const fetchResult = await fetchReviews(id);

        setReviews(fetchResult.data.results);
      } catch (error) {
        console.log('error :>> ', error);
      }
    };
    fetch();
  }, [id]);

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
