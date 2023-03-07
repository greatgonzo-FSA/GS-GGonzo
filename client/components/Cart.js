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
        {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
            <h3>{item.brand}</h3>
              <p className="cart-item-price">${item.price}</p>
              <div className="cart-item-quantity">
                <button className="cart-item-quantity-button" onClick={() => handleRemoveItem(item)}>-</button>
                <p>{item.quantity}</p>
                <button className="cart-item-quantity-button" onClick={() => handleAddItem(item)}>+</button>
              </div>
            </div>
        ))}
        <p>Total: ${total}</p>
        <button onClick={handleClearCart}>Clear Cart</button>
      </>
    ) : (
      <div className="empty-cart">
      <p>Your cart is empty.</p>
      <p>Start shopping <a href="/home">here</a>.</p>
    </div>    
    )}
  </div>
);
};


export default Cart;