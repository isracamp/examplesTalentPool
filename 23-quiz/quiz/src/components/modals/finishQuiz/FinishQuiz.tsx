import { FC } from 'react';

import useUiStore, {
  getModalClose,
  setClearUiState,
} from '../../../stores/useUiStore/index';
import useQuizStore, {
  getGlobalQuestions,
  getGlobalCorrectQuestion,
  setGlobalCleanStore,
} from '../../../stores/useQuizStore';
const FinishQuiz: FC = () => {
  const closeModal = useUiStore(getModalClose);
  const clearGlobalStateUiStore = useUiStore(setClearUiState);
  const correct = useQuizStore(getGlobalCorrectQuestion);
  const questions = useQuizStore(getGlobalQuestions);
  const clearGlobalStateQuizStore = useQuizStore(setGlobalCleanStore);
  const handleClose = () => {
    closeModal();
    clearGlobalStateQuizStore();
    clearGlobalStateUiStore();
  };
  return (
    <div className='modal-container isOpen'>
      <div className='modal-content'>
        <h3>modal content</h3>
        <h2>congrats!</h2>
        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </p>
        <button className='close-btn' onClick={handleClose}>
          play again
        </button>
      </div>
    </div>
  );
};

export default FinishQuiz;
