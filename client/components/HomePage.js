import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Android from './Android';
import Navbar from './Navbar';


/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
   <div id='nav-container'>
    <Android />
   </div>
  );
};

export default Home;
