import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = [];

export const fetchIphonesAsync = createAsyncThunk('allIphones', async () => {

   try {
    let {data} =  await axios.get('http://localhost:8080/api/iphones');
    console.log(data)
    return data;
   } catch (error) {
    console.log(error)
     next(error)
   }
})

export const allIphonesSlice = createSlice({
    name: 'allIphones',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchIphonesAsync.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectAllIphones = (state) => {
    return state.allIphones
}

export default allIphonesSlice.reducer;