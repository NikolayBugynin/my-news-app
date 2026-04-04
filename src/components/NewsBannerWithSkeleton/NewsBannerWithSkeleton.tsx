import { withSkeleton } from '../../helpers/hocs/withSkeleton';
import { NewsBanner } from '../NewsBanner/NewsBanner';

export const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1);
