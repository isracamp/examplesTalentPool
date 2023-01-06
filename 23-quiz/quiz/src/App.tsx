import { useMemo } from 'react';
import useUiStore, {
  getModalOpen,
  setDisplayedModal,
  getDisplayedModal,
  getGlobalIsWaiting,
  getGlobalLoader,
} from './stores/useUiStore';
import useQuizStore, {
  setGlobalIndex,
  getGlobalIndex,
  setGlobalCorrect,
  getGlobalQuestions,
  setGlobalUserAnswers,
  setGlobalCorrectAnswers,
  getGlobalCorrectQuestion,
} from './stores/useQuizStore';
import { Modals } from './models/ModalModel';
import { FactoryModal } from './components/modals/ModalFactory';
import Modal from './components/modals/modal/Modal';
import SetupForm from './components/setUpForm/SetUpForm';
import Loader from './components/shared/loader/Loader';

function App() {
  const correct = useQuizStore(getGlobalCorrectQuestion);
  const setUserGlobalAnswers = useQuizStore(setGlobalUserAnswers);
  const setGlobalCorrectAnswer = useQuizStore(setGlobalCorrectAnswers);

  const setCorrect = useQuizStore(setGlobalCorrect);
  const questions = useQuizStore(getGlobalQuestions);
  const openModal = useUiStore(getModalOpen);
  const setModal = useUiStore(setDisplayedModal);
  const getModal = useUiStore(getDisplayedModal);
  const waiting = useUiStore(getGlobalIsWaiting);
  const loading = useUiStore(getGlobalLoader);
  const index = useQuizStore(getGlobalIndex);
  const setIndex = useQuizStore(setGlobalIndex);

  const question = questions.length > 0 && questions[index];

  const answersM = useMemo(() => {
    let answers: any = [];
    if (question) {
      answers = [...question.incorrect_answers];

      const tempIndex = Math.floor(Math.random() * 4);
      if (tempIndex === 3) {
        answers.push(question?.correct_answer);
      } else {
        answers.push(answers[tempIndex]);
        answers[tempIndex] = question?.correct_answer;
      }
    }
    return answers;
  }, [question]);

  const handleModal = (modal: Modals) => {
    setModal(modal);
    openModal();
  };
  const seeResults = () => {
    if (index > questions.length - 1) {
      handleModal('FINAL_QUIZ');
    }
  };
  const checkAnswer = (
    value: boolean,
    userAnswers: string,
    correctAnswer: string
  ) => {
    setUserGlobalAnswers(userAnswers);
    setGlobalCorrectAnswer(correctAnswer);
    setIndex();
    if (value) {
      setCorrect();
    }
    seeResults();
  };

  return (
    <>
      {waiting ? <SetupForm /> : null}
      {loading ? <Loader /> : null}
      {!waiting ? (
        <main>
          <section className='quiz'>
            <p className='correct-answers'>
              correct answers :{correct}/{index}
            </p>
            <article className='container'>
              <h2>{question?.question}</h2>
              <div className='btn-container'>
                {answersM.map((answer: any, index: number) => {
                  return (
                    <button
                      key={index}
                      className='answer-btn'
                      onClick={() =>
                        checkAnswer(
                          question.correct_answer === answer,
                          answer,
                          question.correct_answer
                        )
                      }
                      dangerouslySetInnerHTML={{ __html: answer }}
                    />
                  );
                })}
              </div>
            </article>
            {questions.length === index ? (
              <button className='next-question' onClick={seeResults}>
                See results
              </button>
            ) : null}

            <Modal>{FactoryModal(getModal)}</Modal>
          </section>
        </main>
      ) : null}
    </>
  );
}

export default App;
