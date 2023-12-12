import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/productsSlice",
  async (API_URL: string) => {
    const endpoint = `${API_URL}/products`;
    try {
      const { data } = await axios.get(endpoint);
      return data;
    } catch {
      console.log(Error);
    }
  },
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productsSlice.reducer;
