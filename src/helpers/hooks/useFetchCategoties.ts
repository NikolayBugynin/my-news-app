import { useEffect, useState } from 'react';
import { getCategories } from '../../api/apiNews';

interface UseFetchCategoriesResult {
  categories: string[];
  error: Error | null;
}

export const useFetchCategoties = (): UseFetchCategoriesResult => {
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setError(null);
        const result = await getCategories();
        setCategories(result.categories);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      }
    };

    fetchCategories();
  }, []);

  return { categories, error };
};
