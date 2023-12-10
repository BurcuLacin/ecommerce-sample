import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../slices/fetchProductsSlice";
import cartSlice from "../slices/cartSlice";

export const store = configureStore({
  reducer: {
    productsSlice,
    cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
