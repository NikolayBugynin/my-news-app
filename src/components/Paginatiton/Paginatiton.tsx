import styles from './styles.module.css';

interface PaginatitonProps {
  totalPages: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePageClick: (pageNumber: number) => void;
  currentPage: number;
}

export const Paginatiton = ({
  totalPages,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
  currentPage,
}: PaginatitonProps) => {
  return (
    <div className={styles.pagination}>
      <button
        onClick={handlePreviousPage}
        className={styles.arrow}
        disabled={currentPage <= 1}
      >
        {'<'}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              key={index}
              className={styles.pageNumber}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <button
        onClick={handleNextPage}
        className={styles.arrow}
        disabled={currentPage >= totalPages}
      >
        {'>'}
      </button>
    </div>
  );
};
