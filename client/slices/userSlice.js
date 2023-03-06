import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserById = createAsyncThunk(
  'users/fetchUserById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/users/${id}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
