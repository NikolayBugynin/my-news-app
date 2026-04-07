import { LatestNews } from '../../components/LatestNews/LatestNews';
import { NewsByFilters } from '../../components/NewsByFilters/NewsByFilters';
import { PAGES_SIZE } from '../../constants/constants';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { useFetchNews } from '../../helpers/hooks/useFetchNews';
import { useFilters } from '../../helpers/hooks/useFilters';
import styles from './styles.module.css';

export const Main = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGES_SIZE,
    category: null,
    keywords: '',
  });

  const debouncedKeyWords = useDebounce(filters.keywords, 1500);

  const { news, isLoading } = useFetchNews({
    ...filters,
    keywords: debouncedKeyWords,
  });

  return (
    <main className={styles.main}>
      {news.length > 0 && <LatestNews isLoading={isLoading} banners={news} />}
      <NewsByFilters
        filters={filters}
        changeFilter={changeFilter}
        isLoading={isLoading}
        news={news}
      />
    </main>
  );
};
