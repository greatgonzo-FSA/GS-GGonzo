import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRetroAsync = createAsyncThunk("allRetro", async () => {
  try {
    let { data } = await axios.get("http://localhost:8080/api/retro");
    return data;
  } catch (error) {
    next(error);
  }
});

const allRetro = createSlice({
  name: "allRetro",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRetroAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectRetro = (state) => {
  return state.allRetro;
};
export default allRetro.reducer;
