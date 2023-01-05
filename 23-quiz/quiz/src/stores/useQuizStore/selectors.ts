import type { State } from './types';
// quiz selectors get
export const getGlobalIndex = (state: State): number => state.index;
export const getGlobalQuestions = (state: State): Array<any> => state.questions;
export const getGlobalCorrectQuestion = (state: State): number => state.correct;
export const getGlobalError = (state: State): boolean => state.error;
export const getGlobalQuiz = (state: State): any => state.quiz;
// quiz selectors set
export const setGlobalIndex = (state: State): (() => void) => state.setIndex;
export const setGlobalQuestions = (
  state: State
): ((questions: Array<any>) => void) => state.setQuestions;
export const setGlobalCorrect = (state: State): (() => void) =>
  state.setCorrect;
export const setGlobalError = (state: State): ((error: boolean) => void) =>
  state.setError;
export const setGlobalQuiz = (state: State): ((quiz: any) => void) =>
  state.setQuiz;

export const setGlobalCleanStore = (state: State): (() => void) =>
  state.setCleanStore;
