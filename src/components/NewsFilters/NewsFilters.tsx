import { useFetchCategoties } from '../../helpers/hooks/useFetchCategoties';
import { Categories } from '../Categories/Categories';
import { Search } from '../Search/Search';
import { Slider } from '../Slider/Slider';
import styles from './styles.module.css';

export interface Filters {
  page_number: number;
  page_size: number;
  category: null;
  keywords: string;
}

interface NewsFilters {
  filters: Filters;

  changeFilter: <K extends string, V>(key: K, value: V) => void;
}

export const NewsFilters = ({ filters, changeFilter }: NewsFilters) => {
  const { categories } = useFetchCategoties();

  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider >
          <Categories
            categories={categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              changeFilter('category', category)
            }
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter('keywords', keywords)}
      />
    </div>
  );
};
