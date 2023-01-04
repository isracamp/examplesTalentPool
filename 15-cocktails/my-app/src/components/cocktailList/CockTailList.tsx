import React from 'react';
import Cocktail from '../cocktail/Cocktail';

import { useGlobalContext } from '../../context/ContextCocktail';

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext();
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section className='section'>
      {loading ? (
        <p>loading</p>
      ) : (
        <>
          <h2 className='section-title'>cocktails</h2>
          <div className='cocktails-center'>
            {cocktails.map((item: any) => {
              return <Cocktail key={item.id} {...item} />;
            })}
          </div>
        </>
      )}
    </section>
  );
}
