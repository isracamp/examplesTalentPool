// import moment from 'moment';
import { FC } from 'react';
import dayjs from 'dayjs';
const Article: FC<any> = ({ title, snippet, date, length }) => {
  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{dayjs(date).format('DD/MM/YYYY')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
