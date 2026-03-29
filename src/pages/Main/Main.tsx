import { useEffect, useState } from 'react';
import { getNews } from '../../api/apiNews';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import { NewsList } from '../../components/NewsList/NewsList';
import { Paginatiton } from '../../components/Paginatiton/Paginatiton';
import { Skeleton } from '../../components/Skeleton/Skeleton';
import styles from './styles.module.css';

// interface MainProps {}

export const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await getNews(currentPage, pageSize);
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, [currentPage]);

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
