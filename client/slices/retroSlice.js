import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRetro = createAsyncThunk("retro", async () => {
  try {
    let { data } = await axios.get("http://localhost:8080/api/retro");
    return data;
  } catch (error) {
    next(error);
  }
});

export const singleRetro = createAsyncThunk("singleRetro", async () => {
    try {
        let { data } = await axios.get("http://localhost:8080/api/:id");
        return data;
    } catch (error) {
        next(error);
    }
})

const allRetro = createSlice({
  name: "retro",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRetro.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectRetro = (state) => {
  return state.retro;
};
export default allRetro.reducer;
