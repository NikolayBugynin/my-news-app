import { withSkeleton } from '../../helpers/hocs/withSkeleton';
import { type BannersListProps, BannersList } from '../BannersList/BannersList';

export const BannersListWithSkeleton = withSkeleton<BannersListProps>(
  BannersList,
  'banner',
  10,
  'row',
);
