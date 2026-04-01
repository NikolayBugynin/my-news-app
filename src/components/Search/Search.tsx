import styles from './styles.module.css';

interface SearchProps {
  keywords: string;
  setKeywords: React.Dispatch<React.SetStateAction<string>>;
}

export const Search = ({ keywords, setKeywords }: SearchProps) => {
  return (
    <div className={styles.search}>
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
