import { Modals } from '../../models/ModalModel';

type ModalState = {
  displayModal: boolean;
  displayedModal?: string;
  isLoading: boolean;
  isSetUpForm: boolean;
  isWaiting: boolean;
  openModal: () => void;
  closeModal: () => void;
  setDisplayedModal?: (modal: Modals) => void;
  setIsLoading: (isLoading: boolean) => void;
  setIsWaiting: (isWaiting: boolean) => void;
  setIsSetUpForm: (isSetUpForm: boolean) => void;
  setClearUiState: () => void;
};

export type State = ModalState;
