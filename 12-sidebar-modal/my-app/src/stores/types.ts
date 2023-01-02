import { Modals } from '../models/ModalModel';

type ModalState = {
  displayModal: boolean;
  openModal: () => void;
  closeModal: () => void;
  displayedModal?: string;
  setDisplayedModal?: (modal: Modals) => void;
};

export type State = ModalState;
