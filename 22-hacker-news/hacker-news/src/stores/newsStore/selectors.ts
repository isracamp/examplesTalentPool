import type { State } from './types';

export const getGlobalHits = (state: State): any => state.hits;
export const getGlobalLoader = (state: State): boolean => state.isLoading;
export const getGlobalQuery = (state: State): string => state.query;
export const getGlobalPage = (state: State): any => state.page;
export const getGlobalNbPage = (state: State): any => state.nbPages;
export const setRemoveGlobalStory = (
  state: State
): ((id: string | number) => void) => state.removeStory;
export const setGlobalSearch = (state: State): ((query: string) => void) =>
  state.search;
export const setHandleGlobalPage = (state: State): ((value: any) => void) =>
  state.handlePage;

export const setGlobalLoader = (state: State): ((isLoading: boolean) => void) =>
  state.setIsLoading;

export const setStories = (state: State): ((value: any) => void) =>
  state.setStories;
