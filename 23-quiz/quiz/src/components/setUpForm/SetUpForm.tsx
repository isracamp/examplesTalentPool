import { FC } from 'react';
import useUiStore, {
  setGlobalLoader,
  setGlobalIsWaiting,
} from '../../stores/useUiStore';
import useQuizStore, {
  getGlobalQuiz,
  getGlobalError,
  setGlobalQuestions,
  setGlobalError,
  setGlobalQuiz,
} from '../../stores/useQuizStore';
import { getQuestions } from '../../services/getQuestions';

const SetupForm: FC = () => {
  const quiz = useQuizStore(getGlobalQuiz);
  const error = useQuizStore(getGlobalError);
  const setLoading = useUiStore(setGlobalLoader);
  const setWaiting = useUiStore(setGlobalIsWaiting);
  const setQuestions = useQuizStore(setGlobalQuestions);
  const setError = useQuizStore(setGlobalError);
  const setQuiz = useQuizStore(setGlobalQuiz);
  const fetchQuestions = async () => {
    try {
      setLoading(true);
      setWaiting(false);
      const response = await getQuestions(
        quiz.amount,
        quiz.difficulty,
        quiz.category
      );
      if (!response) {
        return setWaiting(true);
      }
      const data = response.results;
      setQuestions(data);
      setLoading(false);
      setWaiting(false);
      setError(false);
    } catch (error) {
      setWaiting(true);
      setError(true);
    }
  };
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setQuiz({ ...quiz, [name]: value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetchQuestions();
  };

  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>setup quiz</h2>
          {/* amount */}
          <div className='form-control'>
            <label htmlFor='amount'>number of questions</label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={quiz.amount}
              onChange={handleChange}
              className='form-input'
              min={1}
              max={50}
            />
          </div>
          {/* category */}

          <div className='form-control'>
            <label htmlFor='category'>category</label>
            <select
              name='category'
              id='category'
              className='form-input'
              value={quiz.category}
              onChange={handleChange}
            >
              <option value='sports'>sports</option>
              <option value='history'>history</option>
              <option value='politics'>politics</option>
            </select>
          </div>
          {/* difficulty */}

          <div className='form-control'>
            <label htmlFor='difficulty'>select difficulty</label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
          </div>
          {error && (
            <p className='error'>
              can't generate questions, please try different options
            </p>
          )}
          <button type='submit' onClick={handleSubmit} className='submit-btn'>
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
