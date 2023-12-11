import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../slices/fetchProductsSlice";
import cartSlice from "../slices/cartSlice";
import categoriesSlice from "../slices/fetchCategoriesSlice";

export const store = configureStore({
  reducer: {
    productsSlice,
    cartSlice,
    categoriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
