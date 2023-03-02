import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import allIphonesSlice  from '../slices/iphoneSlice';
import authReducer from '../slices/loginSlice';
import singleIphoneSlice from '../slices/singleIphoneSlice';
import allAndroidsSlice from '../slices/androidSlice';
import singleAndroidSlice from '../slices/singleAndroidSlice'




const store = configureStore({
  reducer: { 
    auth: authReducer, 
    allIphones: allIphonesSlice,
    singleIphone: singleIphoneSlice
    allAndroids: allAndroidsSlice,
    singleAndroid: singleAndroidSlice,
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  
});

export default store;
export * from '../slices/loginSlice';
