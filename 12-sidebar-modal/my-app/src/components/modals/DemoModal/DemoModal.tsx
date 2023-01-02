import { FC } from 'react';

import { FaTimes } from 'react-icons/fa';
import useUiStore, { getModalClose } from '../../../stores/index';

const DemoModal: FC = () => {
  const closeModal = useUiStore(getModalClose);

  return (
    <div className='modal-container'>
      <h3>modal content</h3>
      <button className='close-modal-btn' onClick={closeModal}>
        <FaTimes></FaTimes>
      </button>
    </div>
  );
};

export default DemoModal;
