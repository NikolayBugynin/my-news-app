import { formatDate } from '../../helpers/formatDate';
import styles from './styles.module.css';

// interface HeaderProps {}

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>LATEST NEWS</h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  );
};
