import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { productType } from '../../../types';

type RecentlyViewedType = {
  recentlyViewed: productType[];
};

const initialState = {
  recentlyViewed: JSON.parse(localStorage.getItem('recentlyViewed') || '[]'),
} as RecentlyViewedType;

const recentlyViewedSlice = createSlice({
  name: 'recentlyViewed',
  initialState: initialState,
  reducers: {
    addRecentlyViewed: (state, action: PayloadAction<productType>) => {
      const exists = state.recentlyViewed.find(
        (product) => product.id === action.payload.id
      );
      if (!exists) {
        state.recentlyViewed = [action.payload, ...state.recentlyViewed].slice(
          0,
          5
        );
        localStorage.setItem(
          'recentlyViewed',
          JSON.stringify(state.recentlyViewed)
        );
      }
    },
  },
});

export const { addRecentlyViewed } = recentlyViewedSlice.actions;

export default recentlyViewedSlice.reducer;
