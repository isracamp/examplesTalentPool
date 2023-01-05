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
} from './stores/useQuizStore';
import { Modals } from './models/ModalModel';
import { FactoryModal } from './components/modals/ModalFactory';
import Modal from './components/modals/modal/Modal';
import SetupForm from './components/setUpForm/SetUpForm';
import Loader from './components/shared/loader/Loader';
import { getGlobalCorrectQuestion } from './stores/useQuizStore/selectors';

function App() {
  const correct = useQuizStore(getGlobalCorrectQuestion);
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
  let answers: any = [];
  if (question) {
    answers = [...question.incorrect_answers];

    const tempIndex = Math.floor(Math.random() * 4);
    if (tempIndex === 3) {
      answers = answers.concat(question?.correct_answer);
    } else {
      answers = answers.concat(answers[tempIndex]);
      answers[tempIndex] = question?.correct_answer;
    }
  }
  const handleModal = (modal: Modals) => {
    setModal(modal);
    openModal();
  };
  const seeResults = () => {
    setIndex();

    if (index > questions.length - 1) {
      handleModal('DEMO_MODAL');
    }
  };
  const checkAnswer = (value: any) => {
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
                {answers.map((answer: any, index: number) => {
                  return (
                    <button
                      key={index}
                      className='answer-btn'
                      onClick={() =>
                        checkAnswer(question.correct_answer === answer)
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
