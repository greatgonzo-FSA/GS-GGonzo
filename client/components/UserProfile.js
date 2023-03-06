import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser, fetchUserById} from '../slices/userSlice';  // need to create user slice
import { me } from '../slices/loginSlice';  // need to determine what to import
import axios from 'axios';

const UserProfile = () => {
  const user = useSelector(selectUser);
  const login = useSelector(me);
//   const login = useSelector((state) => state.login.me);
useEffect(() => {
    dispatch(fetchUserById(login.id));
  }, [login.id]);


  useEffect(() => {
    const fetchUserHistory = async () => {
      const response = await axios.get(`/users/${user.id}/history`);
      console.log(response.data); // Do something with the user's purchase history
    };
    const fetchUserWishlist = async () => {
      const response = await axios.get(`/users/${user.id}/wishlist`);
      console.log(response.data); // Do something with the user's wishlist
    };
    fetchUserHistory();
    fetchUserWishlist();
  }, [user]);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
      <p>City: {user.city}</p>
      <p>State: {user.state}</p>
      <p>Zip: {user.zip}</p>
      {/* 
      //Render user's purchase history
      
      <h2>Purchase History</h2>
      {user.history.map((purchase) => (
        <div key={purchase.id}>
          <p>Product Name: {purchase.product.name}</p>
          <p>Price: {purchase.product.price}</p>
          <p>Date: {purchase.createdAt}</p>
        </div>
      ))}

      //Render user's wishlist
      
      <h2>Wishlist</h2>
      {user.wishlist.map((product) => (
        <div key={product.id}>
          <p>Product Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      ))}
    </div> 
    */}
    </div>
  );
};

export default UserProfile;
