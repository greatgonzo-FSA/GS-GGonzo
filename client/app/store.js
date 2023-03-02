import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../slices/loginSlice';
import allAndroidsSlice from '../slices/androidSlice';
import singleAndroidSlice from '../slices/singleAndroidSlice'



const store = configureStore({
  reducer: { 
    auth: authReducer, 
    allAndroids: allAndroidsSlice,
    singleAndroid: singleAndroidSlice,
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  
});

export default store;
export * from '../slices/loginSlice';
