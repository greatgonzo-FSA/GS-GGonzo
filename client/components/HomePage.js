import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Retro from './Retro';
/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <Retro />
    </div>
  );
};

export default Home;
