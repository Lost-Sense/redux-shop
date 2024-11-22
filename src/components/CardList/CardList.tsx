import { Card } from '../Card/Card';
import s from './CardList.module.css';
import { useProducts } from '../../hooks/useProducts';
import { Product } from '../../api/api.type';
import { useDispatch } from 'react-redux';
import { productsActions } from '../../redux/slices/products.slice';
import { ModalWindow } from '../ModalWindowAddCard/ModalWindowAddCard';
import { useState } from 'react';

interface CardListProps {
  onAddToCart: (product: Product) => void;
  selectedCategory: string;
}

export function CardList({ selectedCategory }: CardListProps) {
  const { products: productList, isLoading } = useProducts();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);

  const handleEdit = (product: Product) => {
    setEditProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditProduct(null);
  };

  const handleSubmit = (data: {
    image: string;
    price: number;
    title: string;
    description: string;
    category: string;
  }) => {
    if (editProduct) {
      const updatedProduct: Product = {
        ...editProduct,
        image: data.image,
        price: data.price,
        title: data.title,
        description: data.description,
        category: data.category,
      };

      dispatch(productsActions.updateProduct(updatedProduct));
    }
    handleCloseModal();
  };

  const filteredProducts =
    selectedCategory === 'all'
      ? productList
      : productList.filter((product) => product.category === selectedCategory);

  return (
    <div className={s.card_list}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        filteredProducts.map((product) => (
          <Card
            key={product.id}
            product={product}
            onEdit={handleEdit}
          />
        ))
      )}
      <ModalWindow
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        initialData={editProduct || null}
      />
    </div>
  );
}
