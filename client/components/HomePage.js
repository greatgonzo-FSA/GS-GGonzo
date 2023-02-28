import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/Product';
/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <Product />
    </div>
  );
};

export default Home;
