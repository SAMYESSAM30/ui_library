import * as React from 'react';
import { cn } from '../../lib/utils';
import { Button } from '../Button/Button';

export interface ContentSwitcherOption {
  value: string;
  label: string;
  content: React.ReactNode;
}

export interface ContentSwitcherProps {
  options: ContentSwitcherOption[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

const ContentSwitcher: React.FC<ContentSwitcherProps> = ({
  options,
  defaultValue,
  value: controlledValue,
  onValueChange,
  className,
}) => {
  const [internalValue, setInternalValue] = React.useState<string>(
    controlledValue || defaultValue || options[0]?.value || ''
  );

  const currentValue = controlledValue !== undefined ? controlledValue : internalValue;

  const handleValueChange = (newValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  const currentOption = options.find((opt) => opt.value === currentValue);

  return (
    <div className={cn('w-full', className)}>
      <div className="flex gap-1 border-b">
        {options.map((option) => (
          <Button
            key={option.value}
            variant={currentValue === option.value ? 'default' : 'ghost'}
            className={cn(
              'rounded-b-none border-b-2 border-transparent',
              currentValue === option.value && 'border-primary'
            )}
            onClick={() => handleValueChange(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>
      <div className="mt-4">{currentOption?.content}</div>
    </div>
  );
};

export { ContentSwitcher };

