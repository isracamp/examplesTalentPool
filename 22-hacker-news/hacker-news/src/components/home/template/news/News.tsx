import { FC } from 'react';
import Buttons from '../../atoms/buttons/Buttons';
import SearchForm from '../../molecules/searchForm/SearchForm';
import Stories from '../../organisms/stories/Stories';

const News: FC = () => {
  return (
    <>
      <SearchForm />
      <Buttons />
      <Stories />
    </>
  );
};

export default News;
