import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Apple from './Apple';
import Android from './Android';
import Navbar from './Navbar';
import Retro from './Retro'
import { Link, Route, Routes } from 'react-router-dom';
import Products from './Products';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

return (
  <div>
    <div className="home-container">
          <Link to='/apple'>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRytCcAW5QwUZoSq2llmhWgeIw-77SxWY6lw&usqp=CAU" 
          style={{ width: "300px", height: "220px" }} alt='Apple' />
          <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRytCcAW5QwUZoSq2llmhWgeIw-77SxWY6lw&usqp=CAU" 
          style={{ width: "300px", height: "220px" }} alt='Apple' />
          <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRytCcAW5QwUZoSq2llmhWgeIw-77SxWY6lw&usqp=CAU" 
          style={{ width: "300px", height: "220px" }} alt='Apple' />
          <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRytCcAW5QwUZoSq2llmhWgeIw-77SxWY6lw&usqp=CAU" 
          style={{ width: "300px", height: "220px" }} alt='Apple' />
          </div>
    <span style={{ display: 'block', textAlign: "center" }}>Apple</span>
          </Link>
    </div>
    <div className="home-container">
          <Link to='/android'>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <img src= "https://www.popsci.com/uploads/2021/10/29/Best-Android-Phones-Header.jpg?auto=webp&width=1440&height=901.44" 
          style={{ width: "300px", height: "220px", border: "none"  }} alt='Android' />
          <img src= "https://www.popsci.com/uploads/2021/10/29/Best-Android-Phones-Header.jpg?auto=webp&width=1440&height=901.44" 
          style={{ width: "300px", height: "220px", border: "none"  }} alt='Android' />
          <img src= "https://www.popsci.com/uploads/2021/10/29/Best-Android-Phones-Header.jpg?auto=webp&width=1440&height=901.44" 
          style={{ width: "300px", height: "220px", border: "none"  }} alt='Android' />
          <img src= "https://www.popsci.com/uploads/2021/10/29/Best-Android-Phones-Header.jpg?auto=webp&width=1440&height=901.44" 
          style={{ width: "300px", height: "220px", border: "none" }} alt='Android' />
          </div>
    <span style={{ display: 'block', textAlign: "center" }}>Android</span>
    </Link>
    </div>
    <div className="home-container">
          <Link to='/retro'>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <img src= "https://hips.hearstapps.com/hmg-prod/images/flip-phones-2020-1605552080.gif?crop=1.00xw:1.00xh;0,0&resize=640:*" 
          style={{ width: "300px", height: "220px", border: "none"  }} alt='Retro' />
          <img src= "https://i.pinimg.com/474x/9d/bf/55/9dbf55867403c02f8e3ae59eab954a78--motorola-dynatac-zack-morris.jpg" 
          style={{ width: "300px", height: "220px", border: "none"  }} alt='Retro' />
          <img src= "https://hips.hearstapps.com/hmg-prod/images/flip-phones-2020-1605552080.gif?crop=1.00xw:1.00xh;0,0&resize=640:*" 
          style={{ width: "300px", height: "220px", border: "none"  }} alt='Retro' />
          <img src= "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/01/hipertextual-motorola-razr-volvera-smartphone-plegable-1-500-dolares-segun-wsj-2019136487-scaled.jpg?fit=2560%2C1621&quality=50&strip=all&ssl=1" 
          style={{ width: "300px", height: "220px", border: "none"  }} alt='Retro' />
          </div>
    <span style={{ display: 'block', textAlign: "center" }}>Retro</span>
    </Link>
    </div>
    <Routes>
    <Route path='/apple' component={Apple} />
    <Route path='/android' component={Android} />
    <Route path='/retro' component={Retro} />
    </Routes>
  </div>
);

};

export default Home;
