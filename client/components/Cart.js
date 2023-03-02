import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.total);

  const handleRemoveFromCart = (productType, productId, price, quantity) => {
    dispatch(removeFromCart({ productType, productId, price, quantity }));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
            <li key={`${item.productType}-${item.productId}-${item.id}`}>
              {/* PRODUCT TYPE NEEDS TO BE DECIDED AS EITHER BRAND OR OPERATING SYSTEM */}
                <div>
                  <p>
                    {item.productType}: {item.productId}
                  </p>
                  <p>
                    Quantity: {item.quantity} @ ${item.price.toFixed(2)} each = ${(item.quantity * item.price).toFixed(2)}
                  </p>
                  <button onClick={() => handleRemoveFromCart(item.productType, item.productId, item.price, item.quantity)}>
                    Remove from cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
