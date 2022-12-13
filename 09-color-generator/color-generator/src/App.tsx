import { SyntheticEvent, useState } from 'react';
import Values from 'values.js';
import SelectedColors from './components/selectedColor/SelectedColor';

function App() {
  const [color, setColor] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [list, setList] = useState<Values[]>(new Values('#fff').all(10));
  const [inputType, setInputType] = useState<boolean>(false);
  const handleSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  const handleToggle = (): void => setInputType((prevState) => !prevState);
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type={inputType ? 'color' : 'text'}
            value={color}
            onChange={(event) => setColor(event.target.value)}
            placeholder='Choose a color'
            className={`${error ? 'error' : null}`}
          />
          <div className='buttonsContainer'>
            <button className='btn' type='submit'>
              submit
            </button>
            <button
              style={{ marginLeft: '10px' }}
              onClick={handleToggle}
              className='btn'
              type='button'
            >
              Change input
            </button>
          </div>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SelectedColors
              key={index}
              index={index}
              hexColor={color.hex}
              {...color}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
