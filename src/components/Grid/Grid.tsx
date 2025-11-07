import * as React from 'react';
import { cn } from '../../lib/utils';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 12, gap = 'md', responsive = true, children, ...props }, ref) => {
    const gapClasses = {
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    };

    const colClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      12: 'grid-cols-12',
    };

    const responsiveClasses = responsive
      ? 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      : '';

    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          colClasses[cols],
          gapClasses[gap],
          responsiveClasses,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Grid.displayName = 'Grid';

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  rowSpan?: number;
}

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ className, colSpan, rowSpan, ...props }, ref) => {
    const colSpanClasses = {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6',
      12: 'col-span-12',
    };

    return (
      <div
        ref={ref}
        className={cn(
          colSpan && colSpanClasses[colSpan],
          rowSpan && `row-span-${rowSpan}`,
          className
        )}
        {...props}
      />
    );
  }
);
GridItem.displayName = 'GridItem';

export { Grid, GridItem };

