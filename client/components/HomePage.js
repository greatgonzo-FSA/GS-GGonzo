import React from 'react';
import { useSelector } from 'react-redux';
import Android from './Android';
/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <Android />
    </div>
  );
};

export default Home;
