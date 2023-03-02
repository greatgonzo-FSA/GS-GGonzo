import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleIphoneAsync = createAsyncThunk(
  "singleIphone",
  async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/api/iphones/${id}`);
      console.log(data, "data");
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const singleIphoneSlice = createSlice({
    name: "singleIphone",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchSingleIphoneAsync.fulfilled, (state, action) => {
        return action.payload;
      });
    },
  });
  
  export const selectSingleIphone = (state) => state.singleIphone;
  
  export default singleIphoneSlice.reducer;