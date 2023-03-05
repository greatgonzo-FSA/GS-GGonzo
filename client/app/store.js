import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../slices/loginSlice';
import singleProductSlice from '../slices/singleProductSlice';
import productSlice from '../slices/productSlice';
import cartSlice from '../slices/cartSlice';


const store = configureStore({
  reducer: { 
    auth: authReducer, 
    allProducts: productSlice,
    singleProduct: singleProductSlice,
    cart: cartSlice
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  
});

export default store; 
export * from '../slices/loginSlice';

