import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "categories/categoriesSlice",
  async (API_URL: string) => {
    const endpoint = `${API_URL}/categories`;
    try {
      const { data } = await axios.get(endpoint);
      return data;
    } catch {
      console.log(Error);
    }
  },
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
