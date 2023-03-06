import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const response = await axios.get('/api/carts');
  console.log(response.data,"fetch cart")

  return response.data;
});

export const addToCart = createAsyncThunk('cart/addToCart', async (product) => {
  const response = await axios.post('/api/carts', product);
  console.log(response.data,"add 2 cart")
  return response.data;
});

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (product) => {
  const response = await axios.delete('/api/carts', { data: product });
  console.log(response.data,"remove cart")

  return response.data;
});

export const clearCart = createAsyncThunk('cart/clearCart', async () => {
  const response = await axios.delete('/api/carts');
  console.log(response.data, "clear cart")
  return response.data;
});



export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { id, name, price, quantity } = action.payload;
      const existingItemIndex  = state.items.findIndex(item => item.id === id);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity++;
      } else {
        state.items.push({ id, name, price, quantity: 1 });
      }
      state.total += price * quantity;
    },
    removeItem: (state, action) => {
      const { id, price, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id);
      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        if (existingItem.quantity > quantity) {
          existingItem.quantity -= quantity;
          state.total -= price * quantity;

        } else {
          state.total -= price * existingItem.quantity;
          state.items.splice(existingItemIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
  extraReducers: {},
});

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
