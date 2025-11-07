import * as React from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../Button/Button';

export interface CodeSnippetProps extends React.HTMLAttributes<HTMLPreElement> {
  code: string;
  language?: string;
  showCopyButton?: boolean;
  maxHeight?: string;
}

const CodeSnippet = React.forwardRef<HTMLPreElement, CodeSnippetProps>(
  ({ className, code, language, showCopyButton = true, maxHeight = '400px', ...props }, ref) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = async () => {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div className="relative group">
        {showCopyButton && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </>
            )}
          </Button>
        )}
        {language && (
          <div className="absolute left-2 top-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
            {language}
          </div>
        )}
        <pre
          ref={ref}
          className={cn(
            'relative overflow-x-auto rounded-lg border bg-muted p-4 text-sm',
            className
          )}
          style={{ maxHeight }}
          {...props}
        >
          <code>{code}</code>
        </pre>
      </div>
    );
  }
);
CodeSnippet.displayName = 'CodeSnippet';

export { CodeSnippet };

