import { themeIcons } from '../../assets';
import { formatDate } from '../../helpers/formatDate';
import { useTheme } from '../../helpers/hooks/useTheme';
import styles from './styles.module.css';

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>LATEST NEWS</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <img
        src={isDark ? themeIcons.light : themeIcons.dark}
        width={30}
        alt='кнопка переключения темы со светлой на темную'
        onClick={toggleTheme}
      />
    </header>
  );
};
