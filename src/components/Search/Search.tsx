import { useTheme } from '../../helpers/hooks/useTheme';
import styles from './styles.module.css';

interface SearchProps {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

export const Search = ({ keywords, setKeywords }: SearchProps) => {
  const { isDark } = useTheme();
  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        type='text'
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className={styles.input}
        placeholder='JavaScript'
      />
    </div>
  );
};
