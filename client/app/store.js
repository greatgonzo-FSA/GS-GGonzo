import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../slices/loginSlice';
import singleProductSlice from '../slices/singleProductSlice';
import productSlice from '../slices/productSlice';
import cartSlice from '../slices/cartSlice';
import loginReducer from '../slices/loginSlice';
import userReducer from '../slices/userSlice';


const store = configureStore({
  reducer: { 
    auth: authReducer, 
    allProducts: productSlice,
    singleProduct: singleProductSlice,
    cart: cartSlice,
    user: userReducer,
    login: loginReducer
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  
});

export default store; 
export * from '../slices/loginSlice';

