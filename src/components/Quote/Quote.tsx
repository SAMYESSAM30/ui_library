import * as React from 'react';
import { cn } from '../../lib/utils';

export interface QuoteProps extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  author?: string;
  cite?: string;
}

const Quote = React.forwardRef<HTMLQuoteElement, QuoteProps>(
  ({ className, children, author, cite, ...props }, ref) => {
    return (
      <blockquote
        ref={ref}
        cite={cite}
        className={cn(
          'mt-6 border-l-4 border-primary pl-6 italic text-muted-foreground',
          className
        )}
        {...props}
      >
        <p>{children}</p>
        {author && (
          <footer className="mt-4 text-sm font-medium not-italic text-foreground">
            — {author}
          </footer>
        )}
      </blockquote>
    );
  }
);
Quote.displayName = 'Quote';

export { Quote };

