import React from 'react';
import s from './ModalWindowBucket.module.css';
import { useBucket } from '../../hooks/useBucket';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalWindowBucket: React.FC<CartModalProps> = ({ isOpen, onClose }) => {

  const { cartItems, totalAmount, removeItemFromCart } = useBucket();

  if (!isOpen) return null;

  return (
    <div className={s.modalOverlay}>
      <div className={s.modal}>
        <h2>Bucket</h2>
        {cartItems.length === 0 ? (
          <p>Your bucket is empty.</p>
        ) : (
          <div>
            <ul className={s.cartList}>
              {cartItems.map(item => (
                <li key={item.product.id} className={s.cartItem}>
                  <div className={s.itemDetails}>
                    <div className={s.itemHeader}>
                      <h3>{item.product.title}</h3>
                      <button
                        onClick={() => removeItemFromCart(item.product.id)}
                        className={s.removeButton}
                      >
                        Delite
                      </button>
                    </div>
                    <div className={s.itemPriceQuantity}>
                      <p className={s.itemPriceQuantity}>Price: ${item.product.price}</p>
                      <p className={s.itemPriceQuantity}>Counts: {item.quantity}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className={s.totalAmount}>
              <h3>Total: ${totalAmount.toFixed(2)}</h3>
            </div>
          </div>
        )}
        <button onClick={onClose} className={s.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};
