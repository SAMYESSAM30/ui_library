import * as React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Input } from '../Input/Input';

export interface SearchBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onClear?: () => void;
  showClearButton?: boolean;
}

const SearchBox = React.forwardRef<HTMLInputElement, SearchBoxProps>(
  ({ className, value, onClear, showClearButton = true, onChange, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState<string>(
      typeof value === 'string' ? value : ''
    );

    React.useEffect(() => {
      if (typeof value === 'string') {
        setInternalValue(value);
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(e.target.value);
      if (onChange) {
        onChange(e);
      }
    };

    const handleClear = () => {
      setInternalValue('');
      if (onClear) {
        onClear();
      }
      if (onChange) {
        const event = {
          target: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    };

    return (
      <div className="relative">
        <Input
          ref={ref}
          type="search"
          value={internalValue}
          onChange={handleChange}
          className={cn('pr-10', className)}
          leftIcon={<Search className="h-4 w-4" />}
          {...props}
        />
        {showClearButton && internalValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);
SearchBox.displayName = 'SearchBox';

export { SearchBox };

