import { useState, useEffect } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';
import { getRandomUser } from './services/GetRandomPerson';
import { transformData } from './utils/transformData';
import { defaultImage } from './constants/defaultImage';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [person, setPerson] = useState<any>(null);
  const [value, setValue] = useState('random person');
  const [title, setTitle] = useState('name');
  const getPerson = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const person = await getRandomUser();
      const newPerson = transformData(person);
      setPerson(newPerson);
      setTitle('name');
      setValue(newPerson.name);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);
  const handleValue = (e: any) => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };
  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img
            src={(person && person.image) || defaultImage}
            alt='random user'
            className='user-img'
          />
          <p className='user-title'>My {title} is</p>
          <p className='user-value'>{value}</p>
          <div className='values-list'>
            <button
              className='icon'
              data-label='name'
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className='icon'
              data-label='email'
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className='icon' data-label='age' onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className='icon'
              data-label='street'
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className='icon'
              data-label='phone'
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className='icon'
              data-label='password'
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button
            disabled={isLoading}
            className='btn'
            type='button'
            onClick={getPerson}
          >
            random user
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
