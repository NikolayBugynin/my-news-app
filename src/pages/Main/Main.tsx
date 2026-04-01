import { useEffect, useState } from 'react';
import { getCategories, getNews } from '../../api/apiNews';
import { Categories } from '../../components/Categories/Categories';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import { NewsList } from '../../components/NewsList/NewsList';
import { Paginatiton } from '../../components/Paginatiton/Paginatiton';
import { Search } from '../../components/Search/Search';
import { Skeleton } from '../../components/Skeleton/Skeleton';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import styles from './styles.module.css';

export const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState<string[]>([]);
  const [keywords, setKeywords] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    'All',
  );
  const totalPages = 10;
  const pageSize = 10;

  const debouncedKeyWords = useDebounce(keywords, 1500);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await getNews({
          page_number: currentPage,
          page_size: pageSize,
          category: selectedCategory === 'All' ? null : selectedCategory,
          keywords: debouncedKeyWords,
        });
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, [currentPage, selectedCategory, debouncedKeyWords]);

  useEffect(() => {
    const fetcCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(['All', ...response.categories]);
      } catch (error) {
        console.error(error);
      }
    };
    fetcCategories();
  }, []);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Search keywords={keywords} setKeywords={setKeywords} />
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type={'banner'} />
      )}
      <Paginatiton
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type={'item'} />
      )}
      <Paginatiton
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </main>
  );
};
