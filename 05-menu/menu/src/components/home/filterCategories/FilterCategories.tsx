import { FC } from 'react';
import { FilterCategoriesProps } from '../../../models/MenuModel';

const FilterCategories: FC<FilterCategoriesProps> = ({
  allCategories,
  filterItems,
}) => {
  return (
    <div className='btn-container'>
      {allCategories.map((category, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default FilterCategories;
