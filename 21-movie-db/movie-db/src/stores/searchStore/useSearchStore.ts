import create from 'zustand';
import type { SetState } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { State } from './types';

const initialSearchState = {
  movies: [],
  query: 'batman',
  isLoading: false,
};

const uiStore = (set: SetState<State>): State => ({
  // initial state
  ...initialSearchState,
  // actions

  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
  setQuery: (query: string) => set(() => ({ query })),
  setMovies: (movies: any) => set(() => ({ movies })),
});

const useUiStore =
  process.env.NODE_ENV === 'development'
    ? create(devtools(uiStore))
    : create<State>(uiStore);

export default useUiStore;
