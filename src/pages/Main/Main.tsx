import { Categories } from '../../components/Categories/Categories';
import { NewsBannerWithSkeleton } from '../../components/NewsBannerWithSkeleton/NewsBannerWithSkeleton';
import { NewsListWithSkeleton } from '../../components/NewsListWithSkeleton/NewsListWithSkeleton';
import { Paginatiton } from '../../components/Paginatiton/Paginatiton';
import { Search } from '../../components/Search/Search';
import { PAGES_SIZE, TOTAL_PAGES } from '../../constants/constants';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { useFetchCategoties } from '../../helpers/hooks/useFetchCategoties';
import { useFetchNews } from '../../helpers/hooks/useFetchNews';
import { useFilters } from '../../helpers/hooks/useFilters';
import styles from './styles.module.css';

export const Main = () => {
  const {filters, changeFilter} = useFilters({
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

  const { categories } = useFetchCategoties();

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
    <main className={styles.main}>
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

      {news.length > 0 && (
        <NewsBannerWithSkeleton isLoading={isLoading} item={news[0]} />
      )}

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
    </main>
  );
};
