import axios from 'axios';

interface TableKey {
  [key: string]: any;
}
const table: TableKey = {
  sports: 21,
  history: 23,
  politics: 24,
};
export const getQuestions = async (
  amount: string,
  difficulty: string,
  category: string
) => {
  const API_ENDPOINT = 'https://opentdb.com/api.php?';
  const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
  const response = await axios.get(url);
  return response.data;
};
