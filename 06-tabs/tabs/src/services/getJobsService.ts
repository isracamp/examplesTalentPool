import axios from 'axios';
import { Job } from '../models/JobModel';

export const getJobsService = async (): Promise<Job[]> => {
  const url = 'https://course-api.com/react-tabs-project';
  const response = await axios.get<Job[]>(url);
  return response.data;
};
