import axios from 'axios';
const url = 'https://course-api.com/react-useReducer-cart-project';
export const getItems = async () => {
  const response = await axios(url);
  return response.data;
};
