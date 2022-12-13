import { SyntheticEvent, useState } from 'react';
import dataText from './db/TextData';
import { SELECT_NUMBER, BIGGER_TEXT } from './constants/DataValidations';
function App() {
  const [count, setCount] = useState<number>(0);
  const [paragraphs, setParagraphsNumbers] = useState<Array<string>>([]);
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (count <= 0) {
      return setParagraphsNumbers([SELECT_NUMBER]);
    }
    if (count > dataText.length) {
      return setParagraphsNumbers([BIGGER_TEXT]);
    }
    setParagraphsNumbers(dataText.slice(0, count));
  };
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          min={0}
          id='amount'
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {paragraphs.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
