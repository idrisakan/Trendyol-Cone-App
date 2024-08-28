import {configureStore} from '@reduxjs/toolkit';
import productsSlice from './slice/productsSlice';
import categoriesSlice from './slice/categoriesSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    categories: categoriesSlice,
  },
});
