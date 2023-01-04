type CartItems = {
  movies: Array<any>;
  query: string;
  isLoading: boolean;
  setMovies: (movies: any) => void;
  setQuery: (query: string) => void;
  setIsLoading: (isLoading: boolean) => void;
};

export type State = CartItems;
