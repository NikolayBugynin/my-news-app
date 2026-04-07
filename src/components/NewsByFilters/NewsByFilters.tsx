import { TOTAL_PAGES } from '../../constants/constants';
import { NewsFilters } from '../NewsFilters/NewsFilters';
import type { NewsItem } from '../NewsItem/NewsItem';
import { NewsListWithSkeleton } from '../NewsListWithSkeleton/NewsListWithSkeleton';
import { Paginatiton } from '../Paginatiton/Paginatiton';
import styles from './styles.module.css';

export interface Filters {
  page_number: number;
  page_size: number;
  category: null;
  keywords: string;
}

interface NewsByFiltersProps {
  filters: Filters;
  changeFilter: <K extends string, V>(key: K, value: V) => void;
  isLoading: boolean;
  news: NewsItem[];
}

export const NewsByFilters = ({
  filters,
  changeFilter,
  isLoading,
  news,
}: NewsByFiltersProps) => {
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter('page_number', filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter('page_number', filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    changeFilter('page_number', pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />
      <Paginatiton
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />

      <NewsListWithSkeleton news={news} isLoading={isLoading} />

      <Paginatiton
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />
    </section>
  );
};
