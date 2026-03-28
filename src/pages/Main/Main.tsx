import { useEffect, useState } from 'react';
import { getNews } from '../../api/apiNews';
import { NewsBanner } from '../../components/NewsBanner/NewsBanner';
import { NewsList } from '../../components/NewsList/NewsList';
import { Skeleton } from '../../components/Skeleton/Skeleton';
import styles from './styles.module.css';

// interface MainProps {}

export const Main = () => {
  const [news, setNews] = useState([]);

  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsloading(true);
        const response = await getNews();
        setNews(response.news);
        setIsloading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type={'banner'} />
      )}
      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type={'item'} />
      )}
    </main>
  );
};
