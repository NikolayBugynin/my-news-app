import { useEffect, useState } from 'react';
import { getLatestnews } from '../../api/apiNews';
import type { NewsItem } from '../../components/NewsItem/NewsItem';

interface UseFetchLatestResult {
  news: NewsItem[];
  isLoading: boolean;
  error: Error | null;
}

export const useFetchLatest = (): UseFetchLatestResult => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchNews = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await getLatestnews();
      setNews(result.news);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return { news, isLoading, error };
};
