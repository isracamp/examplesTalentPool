import create from 'zustand';
import type { SetState } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { State } from './types';

const initialNewsState = {
  isLoading: false,
  hits: [],
  query: 'react',
  page: 0,
  nbPages: 0,
};

const uiStore = (set: SetState<State>): State => ({
  // initial state
  ...initialNewsState,
  //  actions
  removeStory: (id: string | number) =>
    set((state) => {
      const filteredArray = state.hits.filter(
        (hit: any) => hit.objectID !== id
      );
      return { ...state, hits: filteredArray };
    }),
  search: (query: string) => set((state) => ({ ...state, query, page: 0 })),
  handlePage: (value: any) =>
    set((state) => {
      if (value === 'inc') {
        let nextPage = state.page + 1;
        if (nextPage > state.nbPages - 1) {
          nextPage = 0;
        }
        return { ...state, page: nextPage };
      }

      if (value === 'dec') {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.nbPages - 1;
        }
        return { ...state, page: prevPage };
      }
      return { ...state, page: 0 };
    }),
  setStories: (value: any) => set({ hits: value }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
});

const useNewsStore =
  process.env.NODE_ENV === 'development'
    ? create(devtools(uiStore))
    : create<State>(uiStore);

export default useNewsStore;
