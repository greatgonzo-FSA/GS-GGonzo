import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === product.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.total += product.price;
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === productId);
      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        if (item.quantity === 1) {
          state.total -= item.price;
          state.items.splice(itemIndex, 1);
        } else {
          state.total -= item.price;
          item.quantity -= 1;
        }
      }
    },
    
    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
