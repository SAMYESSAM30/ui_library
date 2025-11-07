import * as React from 'react';
import { cn } from '../../lib/utils';
import { ChevronRight } from 'lucide-react';

export interface NavigationDrawerItemProps extends React.HTMLAttributes<HTMLLIElement> {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  level?: number;
}

const NavigationDrawerItem = React.forwardRef<HTMLLIElement, NavigationDrawerItemProps>(
  ({ className, label, href, icon, badge, active, onClick, level = 0, ...props }, ref) => {
    const paddingLeft = level * 1.5 + 1;

    const content = (
      <>
        {icon && <span className="mr-3 flex-shrink-0">{icon}</span>}
        <span className="flex-1">{label}</span>
        {badge && <span className="ml-2">{badge}</span>}
        {href && <ChevronRight className="ml-2 h-4 w-4 opacity-50" />}
      </>
    );

    return (
      <li ref={ref} className={cn('list-none', className)} {...props}>
        {href ? (
          <a
            href={href}
            onClick={onClick}
            className={cn(
              'flex items-center px-4 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md',
              active && 'bg-accent text-accent-foreground',
              className
            )}
            style={{ paddingLeft: `${paddingLeft}rem` }}
          >
            {content}
          </a>
        ) : (
          <button
            type="button"
            onClick={onClick}
            className={cn(
              'flex items-center w-full px-4 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md text-left',
              active && 'bg-accent text-accent-foreground',
              className
            )}
            style={{ paddingLeft: `${paddingLeft}rem` }}
          >
            {content}
          </button>
        )}
      </li>
    );
  }
);
NavigationDrawerItem.displayName = 'NavigationDrawerItem';

export { NavigationDrawerItem };

