import { FC, useState, memo } from 'react';
import { QuestionProps } from '../../models/QuestionsModel';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Questions: FC<QuestionProps> = ({ info, title }) => {
  const [isShowInfo, setIsShowInfo] = useState<boolean>(false);
  const handleToggleInfo = (): void =>
    setIsShowInfo((prevState: boolean) => !prevState);
  return (
    <div className='question'>
      <header>
        <h6>{title}</h6>
        <button className='btn' onClick={handleToggleInfo}>
          {isShowInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isShowInfo ? <p>{info}</p> : null}
    </div>
  );
};

export default memo(Questions);
