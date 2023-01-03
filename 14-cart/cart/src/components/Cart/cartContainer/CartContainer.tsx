/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import CartItem from '../cartItem/CartItem';
import useUiStore, {
  getCartItems,
  getTotalPriceFinal,
  removeGlobalAllItems,
  displayItems,
} from '../../../stores';
import { getItems } from '../../../services/getItems';
import { Cart } from '../../../models/Cart';

const CartContainer = () => {
  const displayedItems = useUiStore(displayItems);
  const getData = async () => {
    const cartItems = await getItems();
    displayedItems(cartItems);
  };
  useEffect(() => {
    getData();
  }, []);

  const cart = useUiStore(getCartItems);
  const total = useUiStore(getTotalPriceFinal);
  const removeItems = useUiStore(removeGlobalAllItems);

  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>

      <div>
        {cart.map((item: Cart) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              amount={item.amount}
            />
          );
        })}
      </div>

      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>

        <button onClick={removeItems} className='btn clear-btn'>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
