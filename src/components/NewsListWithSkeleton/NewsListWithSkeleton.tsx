import { withSkeleton } from '../../helpers/hocs/withSkeleton';
import { NewsList } from '../NewsList/NewsList';

export const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10);
