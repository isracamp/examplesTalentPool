import axios from 'axios';

export const getMovies = async (query = 'batman') => {
  const URL = `https://www.omdbapi.com/?i=${process.env.REACT_APP_MOVIE_I}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}&s=${query}`;
  const response = await axios.get(URL);
  return response.data;
};
