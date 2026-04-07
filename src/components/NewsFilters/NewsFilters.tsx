import { useFetchCategoties } from '../../helpers/hooks/useFetchCategoties';
import { Categories } from '../Categories/Categories';
import type { Filters } from '../NewsByFilters/NewsByFilters';
import { Search } from '../Search/Search';
import styles from './styles.module.css';

interface NewsFilters {
  filters: Filters;

  changeFilter: <K extends string, V>(key: K, value: V) => void;
}

export const NewsFilters = ({ filters, changeFilter }: NewsFilters) => {
  const { categories } = useFetchCategoties();

  return (
    <div className={styles.filters}>
      {' '}
      {categories ? (
        <Categories
          categories={categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter('category', category)}
        />
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter('keywords', keywords)}
      />
    </div>
  );
};
