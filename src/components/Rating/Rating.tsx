import * as React from 'react';
import { Star } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  readonly?: boolean;
  onValueChange?: (value: number) => void;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      className,
      value = 0,
      max = 5,
      readonly = false,
      onValueChange,
      size = 'md',
      showLabel = false,
      ...props
    },
    ref
  ) => {
    const [hoveredValue, setHoveredValue] = React.useState<number | null>(null);
    const displayValue = hoveredValue ?? value;

    const sizeClasses = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    };

    const handleClick = (newValue: number) => {
      if (!readonly && onValueChange) {
        onValueChange(newValue);
      }
    };

    return (
      <div ref={ref} className={cn('flex items-center gap-1', className)} {...props}>
        {Array.from({ length: max }, (_, i) => i + 1).map((starValue) => (
          <button
            key={starValue}
            type="button"
            disabled={readonly}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => !readonly && setHoveredValue(starValue)}
            onMouseLeave={() => setHoveredValue(null)}
            className={cn(
              'transition-colors',
              readonly ? 'cursor-default' : 'cursor-pointer',
              sizeClasses[size]
            )}
          >
            <Star
              className={cn(
                sizeClasses[size],
                starValue <= displayValue
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700'
              )}
            />
          </button>
        ))}
        {showLabel && (
          <span className="ml-2 text-sm text-muted-foreground">
            {value.toFixed(1)} / {max}
          </span>
        )}
      </div>
    );
  }
);
Rating.displayName = 'Rating';

export { Rating };

