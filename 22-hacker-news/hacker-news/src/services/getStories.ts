import axios from 'axios';

export const getStories = async (query: string, page: number): Promise<any> => {
  const url = `https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`;
  const response = await axios.get(url);

  return response.data;
};
