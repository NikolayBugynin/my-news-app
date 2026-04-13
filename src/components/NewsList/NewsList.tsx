import type { INews } from '../../interfaces';
import { NewsItem } from '../NewsItem/NewsItem';
import styles from './styles.module.css';

export interface NewsListProps {
  news?: INews[];
}

export const NewsList = ({ news }: NewsListProps) => {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};
