import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../Button/Button';
import { Calendar } from './Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover/Popover';

export interface DatePickerProps {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  ({ date, onDateChange, placeholder = 'Pick a date', disabled, className }, ref) => {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            className={cn('w-full justify-start text-left font-normal', !date && 'text-muted-foreground', className)}
            disabled={disabled}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, 'PPP') : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={date} onSelect={onDateChange} initialFocus />
        </PopoverContent>
      </Popover>
    );
  }
);
DatePicker.displayName = 'DatePicker';

export { DatePicker };

