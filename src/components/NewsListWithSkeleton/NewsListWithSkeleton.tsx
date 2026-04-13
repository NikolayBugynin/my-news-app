import { withSkeleton } from '../../helpers/hocs/withSkeleton';
import { NewsList, type NewsListProps } from '../NewsList/NewsList';

export const NewsListWithSkeleton = withSkeleton<NewsListProps>(
  NewsList,
  'item',
  10,
);
