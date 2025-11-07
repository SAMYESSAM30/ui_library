import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '../../lib/utils';

export interface RangeSliderProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'value' | 'onValueChange'> {
  value?: [number, number];
  onValueChange?: (value: [number, number]) => void;
  min?: number;
  max?: number;
  step?: number;
  showLabels?: boolean;
}

const RangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  RangeSliderProps
>(({ className, value = [0, 100], onValueChange, min = 0, max = 100, step = 1, showLabels = false, ...props }, ref) => {
  const handleValueChange = (newValue: number[]) => {
    if (onValueChange && newValue.length === 2) {
      onValueChange([newValue[0], newValue[1]]);
    }
  };

  return (
    <div className="w-full">
      {showLabels && (
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
      <SliderPrimitive.Root
        ref={ref}
        className={cn('relative flex w-full touch-none select-none items-center', className)}
        value={value}
        onValueChange={handleValueChange}
        min={min}
        max={max}
        step={step}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
        <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
      </SliderPrimitive.Root>
      {showLabels && (
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>{value[0]}</span>
          <span>{value[1]}</span>
        </div>
      )}
    </div>
  );
});
RangeSlider.displayName = 'RangeSlider';

export { RangeSlider };

