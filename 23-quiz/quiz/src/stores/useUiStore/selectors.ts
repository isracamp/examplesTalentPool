import { Modals } from '../../models/ModalModel';
import type { State } from './types';

// Modals
export const getDisplayModal = (state: State): boolean => state.displayModal;
export const getModalOpen = (state: State): (() => void) => state.openModal;
export const getModalClose = (state: State): (() => void) => state.closeModal;
export const getDisplayedModal = (state: State): string =>
  state.displayedModal!;
export const setDisplayedModal = (state: State): ((modal: Modals) => void) =>
  state.setDisplayedModal!;

// loader and waiting
export const getGlobalLoader = (state: State): boolean => state.isLoading;
export const setGlobalLoader = (state: State): ((isLoading: boolean) => void) =>
  state.setIsLoading;
export const getGlobalIsWaiting = (state: State): boolean => state.isWaiting;
export const setGlobalIsWaiting = (
  state: State
): ((isWaiting: boolean) => void) => state.setIsWaiting;

export const setClearUiState = (state: State): (() => void) =>
  state.setClearUiState;
