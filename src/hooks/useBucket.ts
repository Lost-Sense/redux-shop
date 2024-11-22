import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, addToCart } from '../redux/slices/bucket.slice';
import { RootState } from '../redux/store';
import { Product } from '../api/api.type';

interface CartItem {
  product: Product;
  quantity: number;
}

export const useBucket = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  ) as CartItem[];

  const addItemToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const removeItemFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return {
    cartItems,
    totalAmount,
    removeItemFromCart,
    addItemToCart,
  };
};
