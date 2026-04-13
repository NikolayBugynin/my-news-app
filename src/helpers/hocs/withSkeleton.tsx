import { Skeleton } from '../../components/Skeleton/Skeleton';
import type { DirectionType, SkeletonType } from '../../interfaces';

interface withSkeletonProps {
  isLoading?: boolean;
}

export const withSkeleton = <P extends object>(
  Component: React.ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType,
) => {
  return function WithSkeleton(props: P & withSkeletonProps) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Component {...(restProps as P)} />;
  };
};
