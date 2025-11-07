import * as React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, items, separator, ...props }, ref) => {
    const Separator = separator || <ChevronRight className="h-4 w-4" />;

    return (
      <nav ref={ref} aria-label="breadcrumb" className={cn('flex', className)} {...props}>
        <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="inline-flex items-center gap-1.5">
                {index > 0 && <span className="mx-1">{Separator}</span>}
                {isLast ? (
                  <span className="font-medium text-foreground">{item.label}</span>
                ) : item.href ? (
                  <a
                    href={item.href}
                    className="transition-colors hover:text-foreground"
                    onClick={item.onClick}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    className="transition-colors hover:text-foreground"
                    onClick={item.onClick}
                  >
                    {item.label}
                  </button>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);
Breadcrumb.displayName = 'Breadcrumb';

export { Breadcrumb };

