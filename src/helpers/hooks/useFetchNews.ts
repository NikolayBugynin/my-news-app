/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getNews, type GetNewsParams } from '../../api/apiNews';
import type { NewsItem } from '../../components/NewsItem/NewsItem';

interface UseFetchNewsResult {
  news: NewsItem[];
  isLoading: boolean;
  error: Error | null;
}

export const useFetchNews = (params: GetNewsParams): UseFetchNewsResult => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchNews = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await getNews(params);
      setNews(result.news);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [
    params?.page_number,
    params?.page_size,
    params?.category,
    params?.keywords,
  ]);

  return { news, isLoading, error };
};
