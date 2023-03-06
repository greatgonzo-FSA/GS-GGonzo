import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
   <div id='nav-container'>
    <Product />
   </div>
  );
};

export default Home;
