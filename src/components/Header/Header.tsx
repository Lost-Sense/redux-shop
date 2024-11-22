import { useCategories } from '../../hooks/useCategories';
import { Bucket } from '../Bucket/Bucket';
import { CreateCard } from '../CreateCard/CreateCard';
import s from './Header.module.css';

interface HeaderProps {
  selectedCategory: string; 
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const Header: React.FC<HeaderProps> = ({ selectedCategory, setSelectedCategory }) => {
  const isLoading = false;
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const categories = ['all', ...useCategories()];

  return (
    <header className={s.header}>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <select className={s.select} value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      )}
      <div className={s.right_group_buttons}>
        <CreateCard />
        <Bucket />
      </div>
    </header>
  );
}
