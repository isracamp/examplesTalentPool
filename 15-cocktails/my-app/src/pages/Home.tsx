import { FC } from 'react';
import SearchForm from '../components/search/Search';
import CocktailList from '../components/cocktailList/CockTailList';
const Home: FC = () => {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
