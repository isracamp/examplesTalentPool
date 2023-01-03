import create from 'zustand';
import type { SetState } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { State } from './types';
import Data from '../db/Data';
import { transformTotalPrice } from '../utils/transformTotalPrice';
import { Cart } from '../models/Cart';

const initialCartItemState = {
  items: Data,
  amount: 0,
  total: 0,
};

const uiStore = (set: SetState<State>): State => ({
  // initial state
  ...initialCartItemState,
  // cart actions
  increaseItem: (id: string | number) =>
    set((state) => {
      const tempCart = state.items.map((cartItem: Cart) => {
        if (id === cartItem.id) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return { ...state, items: tempCart };
    }),
  removeAllItems: () => set(() => ({ items: Data, total: 0, amount: 0 })),
  removeItem: (id: string | number) =>
    set((state) => {
      const filteredArray = state.items.filter((cartItem) => {
        return cartItem.id !== id;
      });
      const { total } = transformTotalPrice(filteredArray);
      return {
        ...state,
        total: total,
        amount: filteredArray.length,
        items: filteredArray,
      };
    }),
  decrease: (id: string | number) =>
    set((state) => {
      const tempCart = state.items
        .map((cartItem) => {
          if (cartItem.id === id) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return { ...state, items: tempCart };
    }),
  toggleAmount: (id: string | number, type: string) =>
    set((state) => {
      const tempCart = state.items
        .map((cartItem) => {
          if (cartItem.id === id) {
            if (type === 'inc') {
              return { ...cartItem, amount: cartItem.amount + 1 };
            }
            if (type === 'dec') {
              return { ...cartItem, amount: cartItem.amount - 1 };
            }
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);

      return { ...state, items: tempCart };
    }),
  displayItems: (items: Cart[]) => set({ items }),
  getTotalPrice: () =>
    set((state) => {
      const { amount, total } = transformTotalPrice(state.items);
      return { ...state, amount, total };
    }),
});

const useUiStore =
  process.env.NODE_ENV === 'development'
    ? create(devtools(uiStore))
    : create<State>(uiStore);

export default useUiStore;
