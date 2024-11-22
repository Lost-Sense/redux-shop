import { createSelector } from 'reselect';
import { ProductsState } from '../api/api.type';

const selectProducts = (state: ProductsState) => state.products.products;

export const selectCategories = createSelector(
  [selectProducts],
  (products) => {
    return [...new Set(products.map((item) => item.category))];
  }
);