import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../slices/cartSlice';


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const handleAddItem = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item.id));

  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div id='cart'>
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.brand}</h3>
              <h2>{item.model}</h2>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleAddItem(item)}>+</button>
              <button onClick={() => handleRemoveItem(item)}>-</button>
            </div>
          ))}
          <p>Total: ${total}</p>
          <button onClick={handleClearCart}>Clear Cart</button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
