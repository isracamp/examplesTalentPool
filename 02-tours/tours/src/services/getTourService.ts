import axios from 'axios';
import { Tour } from '../models/Tour';

export const getTourService = async (): Promise<Tour[]> => {
  const url = 'https://course-api.com/react-tours-project';
  const response = await axios.get<Tour[]>(url);
  return response.data;
};
