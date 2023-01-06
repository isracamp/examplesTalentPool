import { FC, useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import useUiStore, {
  getModalClose,
  setClearUiState,
} from '../../../stores/useUiStore/index';
import useQuizStore, {
  getGlobalQuestions,
  getGlobalCorrectQuestion,
  setGlobalCleanStore,
  getGlobalUserAnswer,
  getGlobalCorrectAnswers,
} from '../../../stores/useQuizStore';
const FinishQuiz: FC = () => {
  const [seeResults, setSeeResults] = useState<boolean>(false);
  const userAnswers = useQuizStore(getGlobalUserAnswer);
  const correctAnswers = useQuizStore(getGlobalCorrectAnswers);
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
  const findDuplicates = (
    arr: Array<string>,
    answer: string,
    index: number
  ): boolean => {
    if (arr[index] === answer) {
      return true;
    }
    return false;
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
        <button
          className='close-btn'
          onClick={() => setSeeResults((prevState) => !prevState)}
        >
          {!seeResults ? 'See your answers' : ' Hide your answers'}
        </button>
        {seeResults ? (
          <div className='flex'>
            <ul className='list-numbered'>
              <h2>Your answers</h2>
              {userAnswers.map((userAnswer: string, index: number) => (
                <li
                  className={`${
                    findDuplicates(
                      correctAnswers.concat(userAnswers),
                      userAnswer,
                      index
                    )
                      ? 'success'
                      : 'error'
                  }`}
                  key={index}
                >
                  {userAnswer}{' '}
                  {findDuplicates(
                    correctAnswers.concat(userAnswers),
                    userAnswer,
                    index
                  ) ? (
                    <FaThumbsUp className=' success' />
                  ) : (
                    <FaThumbsDown className='error' />
                  )}
                </li>
              ))}
            </ul>
            <ul className='list-numbered'>
              <h2>Correct answers</h2>
              {correctAnswers.map((correctAnswer: string, index: number) => (
                <li
                  className={`${
                    findDuplicates(
                      userAnswers.concat(correctAnswers),
                      correctAnswer,
                      index
                    )
                      ? 'success'
                      : 'error'
                  }`}
                  key={index}
                >
                  {correctAnswer}{' '}
                  {findDuplicates(
                    userAnswers.concat(correctAnswers),
                    correctAnswer,
                    index
                  ) ? (
                    <FaThumbsUp className=' success' />
                  ) : (
                    <FaThumbsDown className='error' />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FinishQuiz;
