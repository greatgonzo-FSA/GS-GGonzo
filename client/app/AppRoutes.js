import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../components/LoginForm';
import Home from '../components/HomePage';
import { me } from './store';
import Cart from '../components/Cart';
import Products from '../components/Products';
import SingleProduct from '../components/SingleProduct';
import UserProfile from '../components/UserProfile';

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
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} /> // add new route for SingleProduct component
          <Route path="/user" element={<UserProfile />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<Home name="home" displayName="Home" />}/>
          <Route 
          path="/home" element={<Home name="home" displayName="Home"/>} />
          <Route
            path="/login"element={<AuthForm name="login" displayName="Login" />}/>
          <Route
            path="/signup"element={<AuthForm name="signup" displayName="Sign Up" />}/>
          <Route
            path="/cart"element={<Cart name="cart" displayName="cart" />}/>
          <Route 
          path="/products" element={<Products />} />
          <Route 
          path="/products/:id" element={<SingleProduct />} />
          <Route 
          path="/user" element={<UserProfile />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
