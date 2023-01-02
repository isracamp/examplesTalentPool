import React, { FC, ReactNode } from 'react';
import Popup from 'reactjs-popup';

import useUiStore, { getDisplayModal } from '../../../stores/index';

import 'reactjs-popup/dist/index.css';
interface Props {
  children: ReactNode | ReactNode[];
}
const Modal: FC<Props> = ({ children }) => {
  const modalOpen = useUiStore(getDisplayModal);

  return (
    <>
      {modalOpen ? (
        <Popup
          closeOnDocumentClick={!modalOpen}
          open={modalOpen}
          contentStyle={{
            width: 'auto',
            position: 'relative',
          }}
        >
          <div>{children}</div>
        </Popup>
      ) : null}
    </>
  );
};

export default Modal;
