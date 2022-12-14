import { ReactNode } from 'react';
import DemoModal from './finishQuiz/FinishQuiz';

type FactoryModals = {
  [key: string]: () => ReactNode;
};

export const FactoryModal = (type: string): ReactNode => {
  const modalComponent: FactoryModals = {
    FINAL_QUIZ: () => <DemoModal />,
  };

  if (typeof modalComponent[type] !== 'function') {
    return;
  }
  return modalComponent[type]();
};
