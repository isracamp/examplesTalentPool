import { FC } from 'react';
import useNewsStore, {
  getGlobalQuery,
  setGlobalSearch,
} from '../../../../stores/newsStore';

const SearchForm: FC = () => {
  const query = useNewsStore(getGlobalQuery);
  const handleSearch = useNewsStore(setGlobalSearch);

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>search hacker news</h2>
      <input
        type='text'
        className='form-input'
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
