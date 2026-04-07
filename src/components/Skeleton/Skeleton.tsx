import styles from './styles.module.css';

export interface SkeletonrProps {
  count?: number;
  type?: 'banner' | 'item';
  direction: string;
}

export const Skeleton = ({
  count = 1,
  type = 'banner',
  direction = 'column',
}: SkeletonrProps) => {
  const skeletonClass = type === 'banner' ? styles.banner : styles.item;
  return (
    <>
      {count > 1 ? (
        <ul
          className={
            direction === 'column' ? styles.columnList : styles.rowList
          }
        >
          {Array.from({ length: count }).map((_, index) => (
            <li
              key={index}
              className={skeletonClass}
              aria-label='Загрузка контента'
            ></li>
          ))}
        </ul>
      ) : (
        <li className={skeletonClass} aria-label='Загрузка контента'></li>
      )}
    </>
  );
};
