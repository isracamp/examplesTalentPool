import { Cart } from '../models/Cart';

type CartItems = {
  items: Array<any>;
  amount: number;
  total: number;
  increaseItem: (id: string | number) => void;
  removeAllItems: () => void;
  removeItem: (id: string | number) => void;
  decrease: (id: string | number) => void;
  toggleAmount: (id: string | number, type: string) => void;
  displayItems: (itemsCart: Cart[]) => void;
  getTotalPrice: () => void;
};

export type State = CartItems;
