import { FC } from 'react';
import useUiStore, {
  setGlobalQuery,
  getGlobalQuery,
} from '../../../stores/searchStore';
const SearchForm: FC = () => {
  const setQuery = useUiStore(setGlobalQuery);
  const query = useUiStore(getGlobalQuery);
  return (
    <form
      className='search-form'
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        event.preventDefault()
      }
    >
      <h2>search movies</h2>
      <input
        type='text '
        className='form-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
