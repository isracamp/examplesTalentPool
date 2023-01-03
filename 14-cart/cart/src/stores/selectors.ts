import type { State } from './types';
import { Cart } from '../models/Cart';

export const getCartItems = (state: State): Cart[] => state.items;
export const getTotalAmount = (state: State): number => state.amount;
export const getTotalPriceFinal = (state: State): number => state.total;
export const removeGlobalAllItems = (state: State): (() => void) =>
  state.removeAllItems;

export const removeGlobalItem = (
  state: State
): ((id: string | number) => void) => state.removeItem;

export const increaseGlobalItem = (
  state: State
): ((id: string | number) => void) => state.increaseItem;

export const decreaseGlobalItem = (
  state: State
): ((id: string | number) => void) => state.decrease;

export const toggleAmountGlobal = (
  state: State
): ((id: string | number, type: string) => void) => state.toggleAmount;

export const getTotalPrice = (state: State): (() => void) =>
  state.getTotalPrice;

export const displayItems = (state: State): ((items: Cart[]) => void) =>
  state.displayItems;
