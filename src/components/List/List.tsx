import * as React from 'react';
import { cn } from '../../lib/utils';

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  variant?: 'default' | 'bordered' | 'spaced';
}

const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variantClasses = {
      default: '',
      bordered: 'divide-y divide-border border',
      spaced: 'space-y-2',
    };

    return (
      <ul
        ref={ref}
        className={cn('list-none p-0 m-0', variantClasses[variant], className)}
        {...props}
      >
        {children}
      </ul>
    );
  }
);
List.displayName = 'List';

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, startIcon, endIcon, onClick, children, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn(
          'flex items-center gap-3 px-4 py-3',
          onClick && 'cursor-pointer hover:bg-muted/50 transition-colors',
          className
        )}
        onClick={onClick}
        {...props}
      >
        {startIcon && <span className="flex-shrink-0">{startIcon}</span>}
        <span className="flex-1">{children}</span>
        {endIcon && <span className="flex-shrink-0">{endIcon}</span>}
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

export { List, ListItem };

