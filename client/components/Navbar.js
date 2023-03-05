import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, cart } from '../app/store';
import { cartSlice, fetchCart } from '../slices/cartSlice';


// Added 3/3 - after merge
const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const cartItemsCount = useSelector((state) => state.cart.items.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };
  const checkCart = () => {
    navigate('/cart')
  };

  return (
    <div>
      <h1>FS-App-Template</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            <Link to="/home">Home</Link>
            <button type="button" onClick={logoutAndRedirectHome}>
            Logout
            </button>
            {/* Added 3/3 - after merge */}
            <Link to="/cart" onClick={() => navigate('/cart')}>
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/mobile-shopping-2363647-1972214.png" 
                alt="Cart" 
                style={{ width: "50px", height: "50px" }}/>
                {cartItemsCount > 0 && <span>{cartItemsCount}</span>}
              </Link>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/cart" onClick={() => navigate('/cart')}>
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/mobile-shopping-2363647-1972214.png" 
                alt="Cart" 
                style={{ width: "50px", height: "50px" }}/>
                {cartItemsCount > 0 && <span>{cartItemsCount}</span>}
              </Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
