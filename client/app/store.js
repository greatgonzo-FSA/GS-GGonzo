import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../slices/loginSlice';
import allRetroSlice from '../slices/retroSlice'
import singleRetroSlice from '../slices/singleRetroSlice';


const store = configureStore({
  reducer: { 
    auth: authReducer, 
    allRetro: allRetroSlice,
    singleRetro: singleRetroSlice,
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  
});

export default store; export * from '../slices/loginSlice';
