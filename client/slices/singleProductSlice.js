import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchSingleProductAsync = createAsyncThunk(
  "singleProduct",
  async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/api/products/${id}`);
      console.log(data, "DATTTAAAAAA");
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchSingleProductAsync.fulfilled, (state, action) => {
        return action.payload;
      });
    },
  });
  
  export const selectSingleProduct = (state) =>  state.singleProduct;
  
  export default singleProductSlice.reducer;
