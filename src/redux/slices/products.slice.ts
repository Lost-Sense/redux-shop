import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../../api/api';
import { Product } from '../../api/api.type';

const initialStateProd = {
  products: [] as Product[],
  isLoading: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialStateProd,
  reducers: {
    getProducts(state) {
      return state;
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct(state, action) {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    addProduct(state, action) {
      state.products.forEach((product) => {
        product.id += 1;
      });
      const newProduct = {
        ...action.payload,
        id: 1,
      };
      state.products.unshift(newProduct);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        console.log('pending');
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        console.log('fullfilled')
      });
  },
});

export const { actions: productsActions, reducer: productsReducer } =
  productsSlice;
