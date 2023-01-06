import create from 'zustand';
import type { SetState } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { State } from './types';

const initialQuizState = {
  index: 0,
  questions: [],
  userAnswers: [],
  correctAnswers: [],
  correct: 0,
  error: false,
  quiz: { amount: 10, category: 'sports', difficulty: 'easy' },
};

const uiStore = (set: SetState<State>): State => ({
  // initial state
  ...initialQuizState,
  // actions
  setIndex: () => set((state) => ({ index: state.index + 1 })),
  setQuestions: (questions: Array<any>) => set(() => ({ questions })),
  setCorrect: () => set((state) => ({ correct: state.correct + 1 })),
  setError: (error: boolean) => set(() => ({ error })),
  setQuiz: (quiz: any) => set(() => ({ quiz })),
  setUserAnswers: (answers: any) =>
    set((state) => ({
      ...state,
      userAnswers: [...state.userAnswers, answers],
    })),
  setCorrectAnswers: (answer: any) =>
    set((state) => ({
      ...state,
      correctAnswers: [...state.correctAnswers, answer],
    })),
  setCleanStore: () =>
    set(() => ({
      index: 0,
      questions: [],
      correct: 0,
      error: false,
      quiz: { amount: 10, category: 'sports', difficulty: 'easy' },
      userAnswers: [],
      correctAnswers: [],
    })),
});
const useQuizStore =
  process.env.NODE_ENV === 'development'
    ? create(devtools(uiStore))
    : create<State>(uiStore);

export default useQuizStore;
