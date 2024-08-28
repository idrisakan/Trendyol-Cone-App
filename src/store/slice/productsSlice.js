import {createSlice} from '@reduxjs/toolkit';
import {getProductInfo, getProducts} from '../actions/productsActions';

const initialState = {
  pending: false,
  pendingDetail: false,
  products: [],
  bestSellerProducts: [],
  forYouProducts: [],
  productInfo:{},
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.pending = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.pending = false;
        state.products = action.payload;
        if (action.meta.arg.category == "men's clothing") {
          state.bestSellerProducts = action.payload;
        }
        if (action.meta.arg.category == "women's clothing") {
          state.forYouProducts = action.payload;
        }
      })
      .addCase(getProducts.rejected, (state, action) => {
        (state.error = action.payload.error), (state.pending = false);
      })

      // For women's clothing
      .addCase(getProductInfo.pending, state => {
        state.pendingDetail = true;
      })
      .addCase(getProductInfo.fulfilled, (state, action) => {
        state.pendingDetail = false;
        state.productInfo = action.payload;
       
      })
      .addCase(getProductInfo.rejected, (state, action) => {
        (state.error = action.payload.error), (state.pending = false);
      });
  },
});

export default productsSlice.reducer;
