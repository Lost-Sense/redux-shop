import { Header } from '../Header/Header';
import { CardList } from '../CardList/CardList';
import { fetchProducts } from '../../api/api';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';

function App() {
  const dispatch: AppDispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    dispatch(fetchProducts());
    console.log('OK')
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <CardList
        onAddToCart={(product) => console.log(product)}
        selectedCategory={selectedCategory}
      />
    </>
  );
}

export default App;
