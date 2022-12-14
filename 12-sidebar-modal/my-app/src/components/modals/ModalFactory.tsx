import { ReactNode } from 'react';
import DemoModal from './DemoModal/DemoModal';

type FactoryModals = {
  [key: string]: () => ReactNode;
};

export const FactoryModal = (type: string): ReactNode => {
  const modalComponent: FactoryModals = {
    DEMO_MODAL: () => <DemoModal />,
  };

  if (typeof modalComponent[type] !== 'function') {
    return;
  }
  return modalComponent[type]();
};
