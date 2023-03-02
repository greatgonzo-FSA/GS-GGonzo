import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Iphones from './Iphones';
import Android from './Android';
import Retro from './Retro';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <h3>Welcome, {username}</h3>

      <Iphones />
      <Android />
      <Retro />
    </div>
  );
};

export default Home;
