import create from 'zustand';
import type { SetState } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { State } from './types';

import { Modals } from '../models/ModalModel';
const initialModalState = {
  displayModal: false,
  openModal: () => null,
  closeModal: () => null,
};

const uiStore = (set: SetState<State>): State => ({
  ...initialModalState,

  // Modal Actions
  openModal: () =>
    set(() => {
      return {
        displayModal: true,
      };
    }),
  closeModal: () =>
    set(() => {
      return { displayModal: false };
    }),
  setDisplayedModal: (modal: Modals) => set(() => ({ displayedModal: modal })),
});
const useUiStore =
  process.env.NODE_ENV === 'development'
    ? create(devtools(uiStore))
    : create<State>(uiStore);

export default useUiStore;
