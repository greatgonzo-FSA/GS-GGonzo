import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import allIphonesSlice  from '../slices/iphoneSlice';
import authReducer from '../slices/loginSlice';
import singleIphoneSlice from '../slices/singleIphoneSlice';



const store = configureStore({
  reducer: { 
    auth: authReducer, 
    allIphones: allIphonesSlice,
    singleIphone: singleIphoneSlice
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  
});

export default store;
export * from '../slices/loginSlice';
