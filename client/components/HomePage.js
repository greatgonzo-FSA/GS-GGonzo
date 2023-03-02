import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/Product';
import Retro from './Retro';
/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <Product />
      <Retro />
    </div>
  );
};

export default Home;
