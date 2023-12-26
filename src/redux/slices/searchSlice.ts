import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productType } from '../../../types';
import { API_URL } from '../../../constants';
import axios from 'axios';
import { log } from 'console';

type searchState = {
  results: productType[];
};

const initialState = {
  results: [],
} as searchState;

export const fetchSearchProducts = createAsyncThunk(
  'searchSlice/search',
  async (q: string) => {
    try {
      const { data } = await axios.get(`${API_URL}/products?name=${q}`);
      console.log(data);
      return data;
    } catch {
      return rejectWithValue([]);
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchProducts.fulfilled, (state, action) => {
      state.results = action.payload;
    });
  },
});

export default searchSlice.reducer;
