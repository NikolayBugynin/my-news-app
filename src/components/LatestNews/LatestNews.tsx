import { getLatestnews } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import type { NewsApiResponse } from '../../interfaces';
import { BannersListWithSkeleton } from '../BannersListWithSkeleton/BannersListWithSkeleton';
import styles from './styles.module.css';

export const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestnews);

  return (
    <section className={styles.section}>
      <BannersListWithSkeleton
        banners={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
};
