import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/*

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const response = await axios.get('/api/cart');
  return response.data;
});

export const addToCart = createAsyncThunk('cart/addToCart', async (product) => {
  const response = await axios.post('/api/cart', product);
  return response.data;
});

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (product) => {
  const response = await axios.delete('/api/cart', { data: product });
  return response.data;
});

export const clearCart = createAsyncThunk('cart/clearCart', async () => {
  const response = await axios.delete('/api/cart');
  return response.data;
});

*/

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { productId, productType, price, quantity } = action.payload;
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.productId === productId && item.productType === productType
      );
      if (existingCartItemIndex !== -1) {
        state.cartItems[existingCartItemIndex].quantity += quantity;
      } else {
        state.cartItems.push({ productId, productType, price, quantity });
      }
      state.total += price * quantity;
    },
    removeFromCart: (state, action) => {
      const { productId, productType, price, quantity } = action.payload;
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.productId === productId && item.productType === productType
      );
      if (existingCartItemIndex !== -1) {
        const existingCartItem = state.cartItems[existingCartItemIndex];
        if (existingCartItem.quantity > quantity) {
          existingCartItem.quantity -= quantity;
          state.total -= price * quantity;
        } else {
          state.total -= price * existingCartItem.quantity;
          state.cartItems.splice(existingCartItemIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        state.total = action.payload.reduce((acc, item) => acc + item.price * item.quantity, 0);
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        const { productId, productType, price, quantity } = action.payload;
        const existingCartItemIndex = state.cartItems.findIndex(
          (item) => item.productId === productId && item.productType === productType
        );
        if (existingCartItemIndex !== -1) {
          state.cartItems[existingCartItemIndex].quantity += quantity;
        } else {
          state.cartItems.push({ productId, productType, price, quantity });
        }
        state.total += price * quantity;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        const { id } = action.payload;
        const index = state.cartItems.findIndex((item) => item.id === id);
        if (index !== -1) {
          state.cartItems[index] = action.payload;
          state.total = state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        }
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        const deletedItemId = action.payload.id;
        const deletedItemQuantity = action.payload.quantity;
        const deletedItem = state.cartItems.find((item) => item.id === deletedItemId);
        if (deletedItem) {
          if (deletedItem.quantity > deletedItemQuantity) {
            deletedItem.quantity -= deletedItemQuantity;
            state.total -= deletedItem.price * deletedItemQuantity;
          } else {
            state.total -= deletedItem.price * deletedItem.quantity;
            state.cartItems = state.cartItems.filter((item) => item.id !== deletedItemId);
          }
        }
      });
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
