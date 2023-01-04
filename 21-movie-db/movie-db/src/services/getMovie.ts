import axios from 'axios';

export const getMovie = async (id: string) => {
  const URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&i=${id}`;
  const response = await axios.get(URL);
  return response.data;
};
