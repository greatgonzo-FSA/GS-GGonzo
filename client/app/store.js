import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../slices/loginSlice';
import allProductsSlice from '../slices/productSlice';
import allRetroSlice from '../slices/retroSlice'



const store = configureStore({
  reducer: { 
    auth: authReducer, 
    allProducts: allProductsSlice,
    retro: allRetroSlice,
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  
});

export default store;
export * from '../slices/loginSlice';
