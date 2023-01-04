type NewsType = {
  isLoading: boolean;
  hits: Array<any>;
  query: string;
  page: number;
  nbPages: number;
  removeStory: (id: string | number) => void;
  search: (query: string) => void;
  handlePage: (value: any) => void;
  setStories: (value: any) => void;
  setIsLoading: (isLoading: boolean) => void;
};

export type State = NewsType;
