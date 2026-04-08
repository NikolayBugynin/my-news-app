import { useFetchLatest } from '../../helpers/hooks/useFetchLatest';
import { BannersListWithSkeleton } from '../BannersListWithSkeleton/BannersListWithSkeleton';
import styles from './styles.module.css';

export const LatestNews = () => {
  const { news, isLoading } = useFetchLatest();

  return (
    <section className={styles.section}>
      <BannersListWithSkeleton banners={news} isLoading={isLoading} />
    </section>
  );
};
