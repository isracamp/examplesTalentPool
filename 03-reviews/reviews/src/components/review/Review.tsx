import { FC, useState } from 'react';
import { getPeopleByIndexService } from '../../services/getPeopleByIndexService';
import { getPeopleService } from '../../services/getPeopleService';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review: FC = () => {
  const [index, setIndex] = useState<number>(0);
  const { image, job, name, text } = getPeopleByIndexService(index);

  const checkFirstLastNumber = (number: number): number => {
    if (number > getPeopleService().length - 1) {
      return getPeopleService().length - 1;
    }
    if (number < 0) {
      return 0;
    }
    return number;
  };
  const nextPerson = (): void => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkFirstLastNumber(newIndex);
    });
  };
  const prevPerson = (): void => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkFirstLastNumber(newIndex);
    });
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Review;
