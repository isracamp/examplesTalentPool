/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import News from './components/home/template/news/News';
import { getStories } from './services/getStories';
import useNewsStore, {
  getGlobalQuery,
  getGlobalPage,
  setGlobalLoader,
  setStories,
} from './stores/newsStore';

function App() {
  const query = useNewsStore(getGlobalQuery);
  const page = useNewsStore(getGlobalPage);
  const handleLoader = useNewsStore(setGlobalLoader);
  const setGlobalStories = useNewsStore(setStories);
  const getData = async () => {
    try {
      handleLoader(true);
      const hits = await getStories(query, page);
      setGlobalStories(hits.hits);
      handleLoader(false);
    } catch (error) {
      handleLoader(false);
    }
  };
  useEffect(() => {
    getData();
  }, [query]);
  return <News />;
}

export default App;
