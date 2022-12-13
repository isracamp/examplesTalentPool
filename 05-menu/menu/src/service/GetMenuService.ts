import menu from '../db/MenuData';
import { MenuModel } from '../models/MenuModel';

export const getMenuService = (): MenuModel[] => menu;
