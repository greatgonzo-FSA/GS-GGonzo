import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../slices/loginSlice';
import allProductsSlice from '../slices/productSlice';



const store = configureStore({
  reducer: { 
    auth: authReducer, 
    allProducts: allProductsSlice,
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  
});

export default store;
export * from '../slices/loginSlice';
