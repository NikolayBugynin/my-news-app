import type { ComponentType } from 'react';
import { Skeleton } from '../../components/Skeleton/Skeleton';

type SkeletonType = 'banner' | 'item';

interface withSkeletonProps {
  isLoading?: boolean;
}

export const withSkeleton = <P extends object>(
  Component: ComponentType<P>,
  type: SkeletonType,
  count: number,
  direction?: 'column' | 'row',
) => {
  return function WithSkeleton(props: P & withSkeletonProps) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Component {...(restProps as P)} />;
  };
};
