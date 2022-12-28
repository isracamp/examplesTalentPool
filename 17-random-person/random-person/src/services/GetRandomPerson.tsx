import axios from 'axios';
const url = 'https://randomuser.me/api/';
export const getRandomUser = async () => {
  const response = await axios.get(url);
  return response.data.results[0];
};
