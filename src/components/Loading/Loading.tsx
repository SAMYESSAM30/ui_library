import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

const loadingVariants = cva('animate-spin', {
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-12 w-12',
    },
    variant: {
      default: 'text-primary',
      secondary: 'text-secondary',
      muted: 'text-muted-foreground',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});

export interface LoadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingVariants> {
  text?: string;
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, size, variant, text, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col items-center justify-center gap-2', className)}
        {...props}
      >
        <Loader2 className={cn(loadingVariants({ size, variant }))} />
        {text && <p className="text-sm text-muted-foreground">{text}</p>}
      </div>
    );
  }
);
Loading.displayName = 'Loading';

export { Loading, loadingVariants };

