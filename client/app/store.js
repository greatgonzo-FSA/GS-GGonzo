import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../slices/loginSlice';
import singleProductSlice from '../slices/singleProductSlice';
import productSlice from '../slices/productSlice';




const store = configureStore({
  reducer: { 
    auth: authReducer, 
    allProducts: productSlice,
    singleProduct: singleProductSlice
    
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  
});

export default store; export * from '../slices/loginSlice';
