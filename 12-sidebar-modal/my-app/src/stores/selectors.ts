import { Modals } from '../models/ModalModel';
import type { State } from './types';

// Modals
export const getDisplayModal = (state: State): boolean => state.displayModal;
export const getModalOpen = (state: State): (() => void) => state.openModal;
export const getModalClose = (state: State): (() => void) => state.closeModal;
export const getDisplayedModal = (state: State): string =>
  state.displayedModal!;
export const setDisplayedModal = (state: State): ((modal: Modals) => void) =>
  state.setDisplayedModal!;
