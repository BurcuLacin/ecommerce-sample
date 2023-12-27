import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productType } from '../../../types';
import { API_URL } from '../../../constants';
import axios from 'axios';

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
      return data;
    } catch {
      console.log(Error);
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
