import { NewsBanner } from '../NewsBanner/NewsBanner';
import type { NewsItem } from '../NewsItem/NewsItem';
import styles from './styles.module.css';

interface BannersList {
  banners: NewsItem[];
}

export const BannersList = ({ banners }: BannersList) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};
