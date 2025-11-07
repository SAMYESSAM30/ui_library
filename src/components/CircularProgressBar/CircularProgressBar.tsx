import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const circularProgressVariants = cva('', {
  variants: {
    variant: {
      default: 'text-primary',
      success: 'text-green-500',
      warning: 'text-yellow-500',
      destructive: 'text-destructive',
    },
    size: {
      sm: 'w-12 h-12',
      md: 'w-16 h-16',
      lg: 'w-24 h-24',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export interface CircularProgressBarProps
  extends React.SVGProps<SVGSVGElement>,
    VariantProps<typeof circularProgressVariants> {
  value?: number;
  max?: number;
  showLabel?: boolean;
  strokeWidth?: number;
}

const CircularProgressBar = React.forwardRef<SVGSVGElement, CircularProgressBarProps>(
  (
    {
      className,
      value = 0,
      max = 100,
      variant,
      size,
      showLabel = false,
      strokeWidth = 8,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    const radius = size === 'sm' ? 20 : size === 'lg' ? 48 : 32;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg
          ref={ref}
          className={cn(circularProgressVariants({ variant, size }), className)}
          viewBox="0 0 100 100"
          {...props}
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="opacity-20"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-300"
            transform="rotate(-90 50 50)"
          />
        </svg>
        {showLabel && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-medium">{Math.round(percentage)}%</span>
          </div>
        )}
      </div>
    );
  }
);
CircularProgressBar.displayName = 'CircularProgressBar';

export { CircularProgressBar, circularProgressVariants };

