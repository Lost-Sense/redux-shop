import React, { useEffect } from 'react';
import s from './ModalWindowAddCard.module.css';
import { useCategories } from '../../hooks/useCategories';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    image: string;
    price: number;
    title: string;
    description: string;
    category: string;
  }) => void;
  initialData?: {
    image: string;
    price: number;
    title: string;
    description: string;
    category: string;
  } | null; 
}

export const ModalWindow: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [image, setImage] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState('');
  const categories = useCategories();

  useEffect(() => {
    if (initialData) {
      setImage(initialData.image);
      setPrice(initialData.price.toString());
      setTitle(initialData.title);
      setDescription(initialData.description);
      setCategory(initialData.category);
    } else {
      setImage('');
      setPrice('');
      setTitle('');
      setDescription('');
      setCategory('');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ image, price: parseFloat(price), title, description, category });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={s.modalOverlay}>
      <div className={s.modal}>
        <h2>{initialData ? 'Edit card' : 'Create card'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="URL img"
            value={image}
            maxLength={200}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            maxLength={9}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            maxLength={100}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            maxLength={200}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>
              Choise category
            </option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <div className={s.group_buttons_modal}>
            <button type="submit">{initialData ? 'Save' : 'Create'}</button>
            <button type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
