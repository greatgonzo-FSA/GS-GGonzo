import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = [];

export const fetchAndroidsAsync = createAsyncThunk('allAndroids', async () => {

   try {
    let {data} =  await axios.get('http://localhost:8080/api/androids');
    console.log(data)
    return data;
   } catch (error) {
    console.log(error)
     next(error)
   }
})

export const allAndroidsSlice = createSlice({
    name: 'allAndroids',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchAndroidsAsync.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectAllAndroids = (state) => {
    return state.allAndroids
}

export default allAndroidsSlice.reducer;