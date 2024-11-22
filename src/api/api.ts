import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from './api.type';

export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const response = await (
      await axios.get('https://fakestoreapi.com/products/')
    ).data;
    return response.map((item: Product) => {
      item.local = false;
      return item;
    });
  }
);



