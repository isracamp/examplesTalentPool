import reviews from '../db/Data';
import { Review } from '../models/ReviewModel';

export const getPeopleService = (): Review[] => reviews;
