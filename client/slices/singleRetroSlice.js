import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleRetroAsync = createAsyncThunk(
  "fetchSingleRetro",
  async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/api/retro/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const singleRetroSlice = createSlice({
  name: "singleRetro",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleRetroAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});


export const selectRetro= (state) => {
  return state.retro;
};

export default singleRetroSlice.reducer;