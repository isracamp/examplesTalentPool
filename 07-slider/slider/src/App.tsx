import { useState } from 'react';
import { getPeopleService } from './services/GetPeopleService';

function App() {
  const [index, setIndex] = useState<number>(0);
  const handleShowActiveSlide = (personIndex: number): string => {
    let activeSliderClass = '';
    if (personIndex === index) {
      activeSliderClass = 'activeSlide';
    }

    if (
      personIndex === index - 1 ||
      (index === 0 && personIndex === getPeopleService().length - 1)
    ) {
      activeSliderClass = 'lastSlide';
    }

    return activeSliderClass;
  };
  const nextSlide = (): void => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > getPeopleService().length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = (): void => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = getPeopleService().length - 1;
      }
      return index;
    });
  };
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {getPeopleService().map((person, index) => (
          <article className={handleShowActiveSlide(index)} key={person.id}>
            <img src={person.image} alt={person.name} className='person-img' />
            <h4>{person.name}</h4>
            <p className='title'>{person.title}</p>
            <p className='text'>{person.quote}</p>
          </article>
        ))}
        <button className='prev' onClick={prevSlide}>
          {'<'}
        </button>
        <button className='next' onClick={nextSlide}>
          {'>'}
        </button>
      </div>
    </section>
  );
}

export default App;
