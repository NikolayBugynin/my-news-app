import { useGetLatestNewsQuery } from '../../store/services/newsApi';
import { BannersListWithSkeleton } from '../BannersListWithSkeleton/BannersListWithSkeleton';
import styles from './styles.module.css';

export const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersListWithSkeleton
        banners={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
};
