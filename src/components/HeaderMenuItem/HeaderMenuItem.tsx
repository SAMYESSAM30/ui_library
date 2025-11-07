import * as React from 'react';
import { cn } from '../../lib/utils';
import { ChevronDown } from 'lucide-react';

export interface HeaderMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const HeaderMenuItem = React.forwardRef<HTMLLIElement, HeaderMenuItemProps>(
  ({ className, label, href, icon, children, active, onClick, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const hasChildren = !!children;

    const content = (
      <>
        {icon && <span className="mr-2">{icon}</span>}
        <span>{label}</span>
        {hasChildren && (
          <ChevronDown
            className={cn('ml-1 h-4 w-4 transition-transform', isOpen && 'rotate-180')}
          />
        )}
      </>
    );

    return (
      <li ref={ref} className={cn('relative', className)} {...props}>
        {href ? (
          <a
            href={href}
            onClick={onClick}
            className={cn(
              'flex items-center px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md',
              active && 'bg-accent text-accent-foreground',
              className
            )}
          >
            {content}
          </a>
        ) : (
          <button
            type="button"
            onClick={() => {
              if (hasChildren) setIsOpen(!isOpen);
              if (onClick) onClick();
            }}
            className={cn(
              'flex items-center px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md w-full text-left',
              active && 'bg-accent text-accent-foreground',
              className
            )}
          >
            {content}
          </button>
        )}
        {hasChildren && isOpen && (
          <ul className="absolute top-full left-0 mt-1 min-w-[200px] bg-popover border rounded-md shadow-lg z-50">
            {children}
          </ul>
        )}
      </li>
    );
  }
);
HeaderMenuItem.displayName = 'HeaderMenuItem';

export { HeaderMenuItem };

