/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from 'react';
import useUiStore, {
  setGlobalMovies,
  setGlobalLoader,
  getGlobalQuery,
} from '../stores/searchStore';
import { getMovies } from '../services/getMovies';
import SearchForm from '../components/home/searchForm/SearchForm';
import Movies from '../components/home/movies/Movies';
const Home: FC = () => {
  const setMovies = useUiStore(setGlobalMovies);
  const setIsLoading = useUiStore(setGlobalLoader);
  const query = useUiStore(getGlobalQuery);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const movies = await getMovies(query);
        setMovies(movies.Search);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getData();
  }, [query]);

  return (
    <main>
      <SearchForm />
      <Movies />
    </main>
  );
};

export default Home;
