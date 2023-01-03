import { Cart } from '../models/Cart';
export const transformTotalPrice = (array: Cart[]) => {
  let { total, amount } = array.reduce(
    (cartTotal: any, cartItem: any) => {
      const { price, amount } = cartItem;
      const itemTotal = price * amount;
      cartTotal.total += itemTotal;
      cartTotal.amount += amount;
      return cartTotal;
    },
    {
      total: 0,
      amount: 0,
    }
  );
  total = parseFloat(total.toFixed(2));

  return { total, amount };
};
