import { useSelector } from 'react-redux';
import { selectCategories } from '../selectors/selectors';

export const useCategories = () => {
  const categories = useSelector(selectCategories);
  return [...categories];
};
