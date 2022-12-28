import axios from 'axios';

export const getUsers = async (page = 1) => {
  const url = `https://api.github.com/users/john-smilga/followers?per_page=100&page=${page}`;
  const response = await axios.get(url);
  return response.data;
};
