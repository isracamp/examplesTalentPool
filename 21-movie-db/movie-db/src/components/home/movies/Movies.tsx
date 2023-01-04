import { FC } from 'react';

import useUiStore, {
  getGlobalMovies,
  getGlobalLoader,
} from '../../../stores/searchStore';
import { Link } from 'react-router-dom';
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies: FC = () => {
  const isLoading = useUiStore(getGlobalLoader);
  const movies = useUiStore(getGlobalMovies);

  if (isLoading) {
    return <div className='loading'></div>;
  }

  return (
    <section className='movies'>
      {typeof movies !== 'undefined'
        ? movies?.map((movie: any) => {
            const {
              imdbID: id,
              Poster: poster,
              Title: title,
              Year: year,
            } = movie;

            return (
              <Link to={`/movies/${id}`} key={id} className='movie'>
                <article>
                  <img src={poster === 'N/A' ? url : poster} alt={title} />
                  <div className='movie-info'>
                    <h4 className='title'>{title}</h4>
                    <p>{year}</p>
                  </div>
                </article>
              </Link>
            );
          })
        : []}
    </section>
  );
};

export default Movies;
