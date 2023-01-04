import { FC, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useUiStore, { getGlobalLoader } from '../stores/searchStore';
import { getMovie } from '../services/getMovie';
const Movie: FC = () => {
  const [movie, setMovie] = useState<any>([]);
  const { id } = useParams();
  const isLoading = useUiStore(getGlobalLoader);
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
  useEffect(() => {
    const getData = async () => {
      const movieData = await getMovie(`${id}`);
      setMovie(movieData);
    };
    getData();
  }, [id, setMovie]);

  return (
    <section className='single-movie'>
      {isLoading ? (
        <div className='loading'></div>
      ) : (
        <>
          {' '}
          <img src={poster} alt={title} />
          <div className='single-movie-info'>
            <h2>{title}</h2>
            <p>{plot}</p>
            <h4>{year}</h4>
            <Link to='/' className='btn'>
              back to movies
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Movie;
