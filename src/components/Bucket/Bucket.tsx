import { useState } from 'react';
import { ModalWindowBucket } from '../ModalWindowBucket/ModalWindowBucket'; // Импортируйте ваш компонент модального окна
import s from './Bucket.module.css';

export function Bucket() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={s['bucket-button']} onClick={handleOpenModal}>
        Bucket
      </button>
      <ModalWindowBucket isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}