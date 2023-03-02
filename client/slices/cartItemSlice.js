import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCartItems = createAsyncThunk('cartItems/fetchCartItems', async () => {
  const response = await axios.get('/api/cart_items');
  return response.data;
});

export const addCartItem = createAsyncThunk('cartItems/addCartItem', async (cartItemData) => {
  const response = await axios.post('/api/cart_items', cartItemData);
  return response.data;
});

export const updateCartItem = createAsyncThunk('cartItems/updateCartItem', async (cartItemData) => {
  const { id, ...data } = cartItemData;
  const response = await axios.put(`/api/cart_items/${id}`, data);
  return response.data;
});

export const deleteCartItem = createAsyncThunk('cartItems/deleteCartItem', async (cartItemId) => {
  await axios.delete(`/api/cart_items/${cartItemId}`);
return cartItemId;
});

const cartItemSlice = createSlice({
name: 'cartItems',
initialState: [],
reducers: {},
extraReducers: (builder) => {
builder
.addCase(fetchCartItems.fulfilled, (state, action) => {
return action.payload;
})
.addCase(addCartItem.fulfilled, (state, action) => {
state.push(action.payload);
})
.addCase(updateCartItem.fulfilled, (state, action) => {
    const { id } = action.payload;
    const index = state.findIndex((item) => item.id === id);
    if (index !== -1) {
      state[index] = action.payload;
    }
  })
.addCase(deleteCartItem.fulfilled, (state, action) => {
const index = state.findIndex((cartItem) => cartItem.id === action.payload);
if (index !== -1) {
state.splice(index, 1);
    }
    });
},
});

export default cartItemSlice.reducer;

// TABLE OF CART ITEMS GETS PUSHED TO CART ,  SO MAY NOT NEED TO DO IT SAME WAY FOR BOTH SLICES