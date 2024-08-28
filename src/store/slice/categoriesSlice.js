import {createSlice} from '@reduxjs/toolkit';
import {getCategories} from '../actions/categoriActions';

const initialState = {
  pending: false,
  categories: [],
  selectedCategory: "",
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, state => {
        state.pending = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.pending = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.error;
      });
  },
});
export const {setCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;
