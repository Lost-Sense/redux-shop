import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/products.slice';
import { cartReducer } from './slices/bucket.slice';

const reducers = {
  products: productsReducer,
  cart: cartReducer,
};

export const store = configureStore({
  reducer: { ...reducers },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
