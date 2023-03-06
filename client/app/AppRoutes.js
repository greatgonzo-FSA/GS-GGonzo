import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../components/LoginForm';
import Home from '../components/HomePage';
import { me } from './store';
import Cart from '../components/Cart';
import SingleBbk from '../components/SingleBbkElectronics';
import SingleGoogle from '../components/SingleGoogle';
import SingleSamsung from '../components/SingleSamsung';
import Android from '../components/Android';
import Products from '../components/Products';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singleGoogle" element={<SingleGoogle />} />
          <Route path="/singleBbk" element={<SingleBbk />} />
          <Route path="/singleSamsung" element={<SingleSamsung />} />
          <Route path="/products" element={<Products />} />
          <Route path="/android" element={<Android />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route
            path="/cart"
            element={<Cart name="cart" displayName="cart" />}
          />
          <Route path="/singleGoogle" element={<SingleGoogle />} />
          <Route path="/singleBbk" element={<SingleBbk />} />
          <Route path="/singleSamsung" element={<SingleSamsung />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/android" element={<Android />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
