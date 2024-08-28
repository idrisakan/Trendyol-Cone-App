import {createAsyncThunk} from '@reduxjs/toolkit';
import {ALL_PRODUCTS, CATEGORY_URL} from '../../service/url';
import {getRequest} from '../../service/vers';

const getProducts = createAsyncThunk('products/getProducts', async params => {
  let url = params.category
    ? `${ALL_PRODUCTS}/${CATEGORY_URL}/${params.category}`
    : ALL_PRODUCTS;
  const response = await getRequest(url, params);

  return response.data;
});
const getProductInfo = createAsyncThunk(
  'products/getProductInfo',
  async params => {
    let url = `${ALL_PRODUCTS}/${params.id}`;
    const response = await getRequest(url, params);

    return response.data;
  },
);
export {getProducts, getProductInfo};
