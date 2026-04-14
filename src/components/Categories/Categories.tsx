import { forwardRef, type ForwardedRef } from 'react';
import type { CategoriesType } from '../../interfaces';
import styles from './styles.module.css';

interface CategoriesProps {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}

export const Categories = forwardRef<HTMLDivElement, CategoriesProps>(
  (
    { categories, setSelectedCategory, selectedCategory },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
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
