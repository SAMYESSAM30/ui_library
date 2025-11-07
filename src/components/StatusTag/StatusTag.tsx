import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const statusTagVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
  {
    variants: {
      status: {
        success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
        warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
        error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
        info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
        pending: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
      },
    },
    defaultVariants: {
      status: 'pending',
    },
  }
);

export interface StatusTagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusTagVariants> {}

const StatusTag = React.forwardRef<HTMLSpanElement, StatusTagProps>(
  ({ className, status, children, ...props }, ref) => {
    return (
      <span ref={ref} className={cn(statusTagVariants({ status }), className)} {...props}>
        {children}
      </span>
    );
  }
);
StatusTag.displayName = 'StatusTag';

export { StatusTag, statusTagVariants };

