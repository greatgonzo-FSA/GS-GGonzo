import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  // const handleRemoveFromCart = (productType, productId, price, quantity) => {
  //   dispatch(removeFromCart({ productType, productId, price, quantity }));
  const handleAddItem = item => {
    dispatch(addToCart(item));
  };

  const handleRemoveItem = item => {
    dispatch(removeFromCart(item));
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
            <h3>{item.name}</h3>
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



//   return (
//     <div>
//       <h2>Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <ul>
//             {cartItems.map((item) => (
//             <li key={`${item.productType}-${item.productId}-${item.id}`}>
//                 <div>
//                   <p>
//                     {item.productType}: {item.productId}
//                   </p>
//                   <p>
//                     Quantity: {item.quantity} @ ${item.price.toFixed(2)} each = ${(item.quantity * item.price).toFixed(2)}
//                   </p>
//                   <button onClick={() => handleRemoveFromCart(item.productType, item.productId, item.price, item.quantity)}>
//                     Remove from cart
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };