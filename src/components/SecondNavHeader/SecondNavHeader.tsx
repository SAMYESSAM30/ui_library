import * as React from 'react';
import { cn } from '../../lib/utils';

export interface SecondNavHeaderProps extends React.HTMLAttributes<HTMLElement> {
  items: Array<{
    label: string;
    href?: string;
    active?: boolean;
    onClick?: () => void;
  }>;
  variant?: 'default' | 'pills' | 'underline';
}

const SecondNavHeader = React.forwardRef<HTMLElement, SecondNavHeaderProps>(
  ({ className, items, variant = 'default', ...props }, ref) => {
    const variantClasses = {
      default: 'border-b',
      pills: '',
      underline: 'border-b',
    };

    return (
      <nav
        ref={ref}
        className={cn('flex space-x-1', variantClasses[variant], className)}
        {...props}
      >
        {items.map((item, index) => {
          const isActive = item.active;
          const itemClasses = {
            default: cn(
              'px-4 py-2 text-sm font-medium transition-colors hover:text-foreground border-b-2 border-transparent',
              isActive && 'border-primary text-foreground'
            ),
            pills: cn(
              'px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent',
              isActive && 'bg-accent text-foreground'
            ),
            underline: cn(
              'px-4 py-2 text-sm font-medium transition-colors hover:text-foreground border-b-2 border-transparent',
              isActive && 'border-primary text-foreground'
            ),
          };

          return item.href ? (
            <a
              key={index}
              href={item.href}
              onClick={item.onClick}
              className={itemClasses[variant]}
            >
              {item.label}
            </a>
          ) : (
            <button
              key={index}
              type="button"
              onClick={item.onClick}
              className={itemClasses[variant]}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    );
  }
);
SecondNavHeader.displayName = 'SecondNavHeader';

export { SecondNavHeader };

