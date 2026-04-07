import { withSkeleton } from '../../helpers/hocs/withSkeleton';
import { BannersList } from '../BannersList/NewsBanner';

export const BannersListWithSkeleton = withSkeleton(
  BannersList,
  'banner',
  10,
  'row',
);
