import * as React from 'react';
import { cn } from '../../lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

export interface MetricProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  description?: string;
}

const Metric = React.forwardRef<HTMLDivElement, MetricProps>(
  ({ className, title, value, change, changeLabel, icon, description, ...props }, ref) => {
    const isPositive = change !== undefined && change >= 0;

    return (
      <div ref={ref} className={cn('p-6 border rounded-lg', className)} {...props}>
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          {icon && <div className="text-muted-foreground">{icon}</div>}
        </div>
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-bold">{value}</p>
          {change !== undefined && (
            <div
              className={cn(
                'flex items-center gap-1 text-sm font-medium',
                isPositive ? 'text-green-600' : 'text-red-600'
              )}
            >
              {isPositive ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span>{Math.abs(change)}%</span>
              {changeLabel && <span className="text-muted-foreground">{changeLabel}</span>}
            </div>
          )}
        </div>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    );
  }
);
Metric.displayName = 'Metric';

export { Metric };

