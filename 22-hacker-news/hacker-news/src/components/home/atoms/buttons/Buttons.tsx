import { FC, memo } from 'react';
import useNewsStore, {
  getGlobalLoader,
  getGlobalPage,
  getGlobalNbPage,
  setHandleGlobalPage,
} from '../../../../stores/newsStore';

const Buttons: FC = () => {
  const isLoading = useNewsStore(getGlobalLoader);
  const page = useNewsStore(getGlobalPage);
  const nbPages = useNewsStore(getGlobalNbPage);
  const handlePage = useNewsStore(setHandleGlobalPage);

  return (
    <div className='btn-container'>
      <button disabled={!isLoading} onClick={() => handlePage('dec')}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={!isLoading} onClick={() => handlePage('inc')}>
        next
      </button>
    </div>
  );
};

export default memo(Buttons);
