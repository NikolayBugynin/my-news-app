import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import { Image } from '../Image/Image';
import type { NewsItem } from '../NewsItem/NewsItem';
import styles from './styles.module.css';

interface NewsBannerProps {
  item: NewsItem;
}

export const NewsBanner = ({ item }: NewsBannerProps) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};
