import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import allIphonesSlice  from '../slices/iphoneSlice';
import authReducer from '../slices/loginSlice';
import cartSlice from '../slices/cartSlice';
import singleIphoneSlice from '../slices/singleIphoneSlice';
import allAndroidsSlice from '../slices/androidSlice';
import singleAndroidSlice from '../slices/singleAndroidSlice'
import allRetroSlice from '../slices/retroSlice'
import singleRetroSlice from '../slices/singleRetroSlice';



const store = configureStore({
  reducer: { 
    auth: authReducer, 
    allProducts: allProductsSlice,
    cart: cartSlice,
    allIphones: allIphonesSlice,
    singleIphone: singleIphoneSlice,
    allAndroids: allAndroidsSlice,
    singleAndroid: singleAndroidSlice,
    allRetro: allRetroSlice,
    singleRetro: singleRetroSlice,
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  
});

export default store; export * from '../slices/loginSlice';
