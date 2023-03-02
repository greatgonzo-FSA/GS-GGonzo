import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = [];

export const fetchProductsAsync = createAsyncThunk('allProducts', async () => {

   try {
    let {data} =  await axios.get('http://localhost:8080/api/product');
    return data;
   } catch (error) {
     next(error)
   }
})

export const allProductsSlice = createSlice({
    name: 'allProducts',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectAllProducts = (state) => {
    return state.allProducts
}

export default allProductsSlice.reducer;