import { BannersListWithSkeleton } from '../BannersListWithSkeleton/BannersListWithSkeleton';
import type { NewsItem } from '../NewsItem/NewsItem';
import styles from './styles.module.css';

interface LatestNewsProps {
  isLoading: boolean;
  banners: NewsItem[];
  
}

export const LatestNews = ({ banners, isLoading }: LatestNewsProps) => {
  return (
    <section className={styles.section}>
      <BannersListWithSkeleton banners={banners} isLoading={isLoading} />
    </section>
  );
};
