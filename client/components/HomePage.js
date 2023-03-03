import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Apple from './Apple';


/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
   <div id='nav-container'>
    <Apple/>
   </div>
  );
};

export default Home;
