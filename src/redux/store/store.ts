import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../slices/fetchProductsSlice';
import cartSlice from '../slices/cartSlice';
import categoriesSlice from '../slices/fetchCategoriesSlice';
import productDetailSlice from '../slices/fetchProductDetailSlice';
import searchSlice from '../slices/searchSlice';

export const store = configureStore({
  reducer: {
    productsSlice,
    cartSlice,
    categoriesSlice,
    productDetailSlice,
    searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
