import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAndroidAsync = createAsyncThunk(
  "singleAndroid",
  async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/api/androids/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const addSingleAndroidAsync = createAsyncThunk(
  "android/addSingleAndroid",
  async ({ model, brand, price, description }) => {
    try {
      const { data } = await axios.post("http://localhost:8080/api/androids", {
        brand,
        model,
        price,
        description,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const singleAndroidSlice = createSlice({
  name: "singleAndroid",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAndroidAsync.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(addSingleAndroidAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });

  },
});


export const selectAndroid= (state) => {
  return state.singleAndroid;
};

export default singleAndroidSlice.reducer;