import { useSelector } from 'react-redux';
import { ProductsState } from '../api/api.type';

export const useProducts = () => {
  const products = useSelector((state: ProductsState) => state.products);
  return products;
};
