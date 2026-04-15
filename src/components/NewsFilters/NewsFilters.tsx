import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useTheme } from '../../helpers/hooks/useTheme';
import type { CategoriesApiResponse, IFilters } from '../../interfaces';
import { Categories } from '../Categories/Categories';
import { Search } from '../Search/Search';
import { Slider } from '../Slider/Slider';
import styles from './styles.module.css';
interface NewsFiltersProps {
  filters: IFilters;
  changeFilter: (key: string, value: string | number | null) => void;
}

export const NewsFilters = ({ filters, changeFilter }: NewsFiltersProps) => {
  const { data } = useFetch<CategoriesApiResponse, null>(getCategories);
  const { isDark } = useTheme();

  return (
    <div className={styles.filters}>
      {data ? (
        <Slider isDark={isDark}>
          <Categories
            categories={data?.categories}
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
