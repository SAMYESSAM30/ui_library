import * as React from 'react';
import { cn } from '../../lib/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />
  );
}

const SkeletonCircle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('animate-pulse rounded-full bg-muted', className)} {...props} />
  )
);
SkeletonCircle.displayName = 'SkeletonCircle';

const SkeletonLine = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('animate-pulse rounded-md bg-muted h-4 w-full', className)} {...props} />
  )
);
SkeletonLine.displayName = 'SkeletonLine';

const SkeletonRectangle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('animate-pulse rounded-md bg-muted h-20 w-full', className)} {...props} />
  )
);
SkeletonRectangle.displayName = 'SkeletonRectangle';

const SkeletonSquare = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('animate-pulse rounded-md bg-muted h-20 w-20', className)} {...props} />
  )
);
SkeletonSquare.displayName = 'SkeletonSquare';

export { Skeleton, SkeletonCircle, SkeletonLine, SkeletonRectangle, SkeletonSquare };

