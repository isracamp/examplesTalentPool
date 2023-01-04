import type { State } from './types';

// selectors movies
export const getGlobalMovies = (state: State): any => state.movies;
export const getGlobalLoader = (state: State): boolean => state.isLoading;
export const getGlobalQuery = (state: State): string => state.query;
export const setGlobalMovies = (state: State): ((movie: any) => void) =>
  state.setMovies;
export const setGlobalQuery = (state: State): ((movie: any) => void) =>
  state.setQuery;
export const setGlobalLoader = (state: State): ((isLoading: boolean) => void) =>
  state.setIsLoading;
