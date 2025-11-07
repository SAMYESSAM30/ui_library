import * as React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../Button/Button';

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  maxVisible?: number;
}

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      className,
      currentPage,
      totalPages,
      onPageChange,
      showFirstLast = true,
      maxVisible = 5,
      ...props
    },
    ref
  ) => {
    const getPageNumbers = () => {
      const pages: (number | string)[] = [];
      const half = Math.floor(maxVisible / 2);

      if (totalPages <= maxVisible) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (currentPage <= half + 1) {
          for (let i = 1; i <= maxVisible - 1; i++) {
            pages.push(i);
          }
          pages.push('ellipsis');
          pages.push(totalPages);
        } else if (currentPage >= totalPages - half) {
          pages.push(1);
          pages.push('ellipsis');
          for (let i = totalPages - maxVisible + 2; i <= totalPages; i++) {
            pages.push(i);
          }
        } else {
          pages.push(1);
          pages.push('ellipsis');
          for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pages.push(i);
          }
          pages.push('ellipsis');
          pages.push(totalPages);
        }
      }

      return pages;
    };

    const pages = getPageNumbers();

    return (
      <nav ref={ref} aria-label="pagination" className={cn('flex items-center gap-1', className)} {...props}>
        {showFirstLast && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
          >
            First
          </Button>
        )}
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {pages.map((page, index) => {
          if (page === 'ellipsis') {
            return (
              <span key={`ellipsis-${index}`} className="px-2">
                <MoreHorizontal className="h-4 w-4" />
              </span>
            );
          }
          return (
            <Button
              key={page}
              variant={currentPage === page ? 'default' : 'outline'}
              size="sm"
              onClick={() => onPageChange(page as number)}
            >
              {page}
            </Button>
          );
        })}
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        {showFirstLast && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            Last
          </Button>
        )}
      </nav>
    );
  }
);
Pagination.displayName = 'Pagination';

export { Pagination };

