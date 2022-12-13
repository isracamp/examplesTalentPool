import reviews from '../db/Data';
import { Review } from '../models/ReviewModel';

export const getPeopleByIndexService = (index: number): Review =>
  reviews[index];
