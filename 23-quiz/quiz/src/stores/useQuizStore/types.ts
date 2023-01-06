type QuizType = {
  index: number;
  questions: Array<any>;
  correct: number;
  error: boolean;
  quiz: any;
  userAnswers: Array<string>;
  correctAnswers: Array<string>;
  setCorrectAnswers: (answer: any) => void;
  setUserAnswers: (answer: any) => void;
  setIndex: () => void;
  setQuestions: (questions: Array<any>) => void;
  setCorrect: () => void;
  setError: (error: boolean) => void;
  setQuiz: (quiz: any) => void;
  setCleanStore: () => void;
};

export type State = QuizType;
