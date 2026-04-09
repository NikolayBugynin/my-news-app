import { forwardRef } from 'react';
import styles from './styles.module.css';

interface CategoriesProps {
  categories: string[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
  selectedCategory: string | null;
}

export const Categories = forwardRef<HTMLDivElement, CategoriesProps>(
  ({ categories, setSelectedCategory, selectedCategory }, ref) => {
    return (
      <div ref={ref} className={styles.categories}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? styles.active : styles.item}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category ? styles.active : styles.item
              }
              key={category}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  },
);

Categories.displayName = 'Categories';
