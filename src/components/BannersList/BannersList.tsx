import type { INews } from '../../interfaces';
import { NewsBanner } from '../NewsBanner/NewsBanner';
import styles from './styles.module.css';

export interface BannersListProps {
  banners?: INews[] | null;
}

export const BannersList = ({ banners }: BannersListProps) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};
