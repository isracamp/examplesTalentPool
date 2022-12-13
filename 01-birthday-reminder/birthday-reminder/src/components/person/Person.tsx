import { FC } from 'react';
import { User } from '../../models/User';

const Person: FC<User> = ({ age, id, image, name }) => {
  //   display: grid;
  //   grid-template-columns: auto 1fr;
  //   column-gap: 0.75rem;
  //   margin-bottom: 1.5rem;
  //   align-items: center;
  return (
    <article key={id} className='grid grid-cols-2 gap-3 mb-6 items-center mt-4'>
      <img
        className='w-20 h-20 object-cover rounded-full'
        src={image}
        alt={name}
      />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default Person;
