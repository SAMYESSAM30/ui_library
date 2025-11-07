import * as React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../Button/Button';

export interface NumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  helperText?: string;
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number) => void;
}

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      min,
      max,
      step = 1,
      value,
      onValueChange,
      onChange,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `number-input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;
    const [internalValue, setInternalValue] = React.useState<number>(
      typeof value === 'number' ? value : typeof value === 'string' ? parseFloat(value) || 0 : 0
    );

    React.useEffect(() => {
      if (typeof value === 'number') {
        setInternalValue(value);
      } else if (typeof value === 'string') {
        const parsed = parseFloat(value);
        if (!isNaN(parsed)) {
          setInternalValue(parsed);
        }
      }
    }, [value]);

    const handleChange = (newValue: number) => {
      let finalValue = newValue;
      if (min !== undefined && finalValue < min) finalValue = min;
      if (max !== undefined && finalValue > max) finalValue = max;

      setInternalValue(finalValue);
      if (onValueChange) {
        onValueChange(finalValue);
      }
      if (onChange) {
        const event = {
          target: { value: finalValue.toString() },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    };

    const increment = () => {
      handleChange(internalValue + step);
    };

    const decrement = () => {
      handleChange(internalValue - step);
    };

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1.5 block"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            type="number"
            id={inputId}
            ref={ref}
            value={internalValue}
            min={min}
            max={max}
            step={step}
            onChange={(e) => {
              const newValue = parseFloat(e.target.value) || 0;
              handleChange(newValue);
            }}
            className={cn(
              'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-20 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              hasError && 'border-destructive focus-visible:ring-destructive',
              className
            )}
            {...props}
          />
          <div className="absolute right-1 top-1 flex flex-col">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-4 w-8 rounded-b-none"
              onClick={increment}
              disabled={max !== undefined && internalValue >= max}
            >
              <ChevronUp className="h-3 w-3" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-4 w-8 rounded-t-none"
              onClick={decrement}
              disabled={min !== undefined && internalValue <= min}
            >
              <ChevronDown className="h-3 w-3" />
            </Button>
          </div>
        </div>
        {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-muted-foreground">{helperText}</p>
        )}
      </div>
    );
  }
);
NumberInput.displayName = 'NumberInput';

export { NumberInput };

