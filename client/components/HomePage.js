import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Products from './Products';
import Navbar from './Navbar';
import Retro from './Retro'

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
   <div id='nav-container'>

    <Retro />
   </div>
  );
};

export default Home;
