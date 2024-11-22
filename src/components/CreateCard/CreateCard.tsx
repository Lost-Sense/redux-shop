import { useState } from 'react';
import { ModalWindow } from '../ModalWindowAddCard/ModalWindowAddCard';
import s from './CreateCard.module.css';
import { Product } from '../../api/api.type';
import { useDispatch } from 'react-redux';
import { productsActions } from '../../redux/slices/products.slice';

export function CreateCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (data: {
    image: string;
    price: number;
    title: string;
    description: string;
    category: string;
  }) => {
    const newProduct: Product = {
      id: 1,
      image: data.image,
      price: data.price,
      title: data.title,
      description: data.description,
      category: data.category,
      local: true,
    };

    dispatch(productsActions.addProduct(newProduct));
    handleCloseModal();
  };

  return (
    <>
      <button className={s['create-button']} onClick={handleOpenModal}>
        Create card
      </button>
      <ModalWindow
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </>
  );
}
