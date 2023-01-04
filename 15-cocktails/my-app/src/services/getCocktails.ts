import axios from 'axios';

const getCocktails = async (term: string) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`;
  const response = await axios.get(url);
  return response.data;
};

export default getCocktails;
