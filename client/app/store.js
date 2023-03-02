import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../slices/loginSlice';
import allProductsSlice from '../slices/productSlice';
import cartSlice from '../slices/cartSlice';



const store = configureStore({
  reducer: { 
    auth: authReducer, 
    allProducts: allProductsSlice,
    cart: cartSlice,
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  
});

export default store;
export * from '../slices/loginSlice';
