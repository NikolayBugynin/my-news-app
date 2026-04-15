import { getNews } from '../../api/apiNews';
import { PAGES_SIZE, TOTAL_PAGES } from '../../constants/constants';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilters } from '../../helpers/hooks/useFilters';
import type { NewsApiResponse, ParamsType } from '../../interfaces';
import { NewsFilters } from '../NewsFilters/NewsFilters';
import { NewsListWithSkeleton } from '../NewsListWithSkeleton/NewsListWithSkeleton';
import { PaginationWrapper } from '../PaginationWrapper/PaginationWrapper';
import styles from './styles.module.css';

export const NewsByFilters = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGES_SIZE,
    category: null,
    keywords: '',
  });

  const debouncedKeyWords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
    ...filters,
    keywords: debouncedKeyWords,
  });

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
      <PaginationWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsListWithSkeleton news={data?.news} isLoading={isLoading} />
      </PaginationWrapper>
    </section>
  );
};
