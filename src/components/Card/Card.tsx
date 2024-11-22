import s from './Card.module.css';
import { Product } from '../../api/api.type';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productsActions } from '../../redux/slices/products.slice';
import { useBucket } from '../../hooks/useBucket';

interface CardProps {
  product: Product;
  onEdit: (product: Product) => void;
}

export function Card({ product, onEdit }: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();
  const { addItemToCart, removeItemFromCart } = useBucket();

  const toggleDescription = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  const handleAddToCart = () => {
    addItemToCart(product);
  };

  const handleRemove = () => {
    removeItemFromCart(product.id);
    dispatch(productsActions.removeProduct(product.id));
  };

  return (
    <div className={`${s.card} ${isExpanded ? s.expanded : ''}`}>
      <img src={product.image} alt={product.title} />
      <p className={s.price}>${product.price}</p>
      <h2>{product.title}</h2>
      <p className={`${s.description} ${isExpanded ? s.expanded : ''}`}>
        {product.description}
      </p>
      <a href="#" onClick={toggleDescription} className={s.toggleLink}>
        {isExpanded ? 'Hide' : 'Show more'}
      </a>
      <div className={s.buttonContainer}>
        <button
          onClick={handleAddToCart}
          className={`${s.button} ${s.addToCart}`}
        >
          Add
        </button>
        {product.local && (
          <button
            onClick={() => onEdit(product)}
            className={`${s.button} ${s.edit}`}
          >
            Edit
          </button>
        )}
        <button onClick={handleRemove} className={`${s.button} ${s.remove}`}>
          Delite
        </button>
      </div>
    </div>
  );
}
