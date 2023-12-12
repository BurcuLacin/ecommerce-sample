import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductDetail = createAsyncThunk(
  "productDetail/fetchProductDetail",
  async (API_URL: string) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
);

export const productDetailSlice = createSlice({
  name: "productDetail",
  // initialState: {
  //   product: {},
  //   status: 'idle',
  // },
  // reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchProductDetail.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(fetchProductDetail.fulfilled, (state, action) => {
  //       state.product = action.payload;
  //       state.status = 'succeeded';
  //     })
  //     .addCase(fetchProductDetail.rejected, (state) => {
  //       state.status = 'failed';
  //     });
  // },

  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchProductDetail.fulfilled,
      (state, action) => (state = action.payload),
    );
  },
});

export default productDetailSlice.reducer;
