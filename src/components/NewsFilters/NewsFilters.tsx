import { useTheme } from '../../helpers/hooks/useTheme';
import type { IFilters } from '../../interfaces';
import { useAppDispatch } from '../../store';
import { useGetCategoriesQuery } from '../../store/services/newsApi';
import { setFilters } from '../../store/slices/newsSlice';
import { Categories } from '../Categories/Categories';
import { Search } from '../Search/Search';
import { Slider } from '../Slider/Slider';
import styles from './styles.module.css';

interface NewsFiltersProps {
  filters: IFilters;
}

export const NewsFilters = ({ filters }: NewsFiltersProps) => {
  const { data } = useGetCategoriesQuery(null);
  const { isDark } = useTheme();

  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {data ? (
        <Slider isDark={isDark}>
          <Categories
            categories={data?.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: 'category', value: category }))
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: 'keywords', value: keywords }))
        }
      />
    </div>
  );
};
