import * as React from 'react';
import { cn } from '../../lib/utils';

export interface ProgressIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: string[];
  currentStep: number;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'dots' | 'numbers';
}

const ProgressIndicator = React.forwardRef<HTMLDivElement, ProgressIndicatorProps>(
  ({ className, steps, currentStep, orientation = 'horizontal', variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'horizontal' ? 'flex-row items-center' : 'flex-col',
          className
        )}
        {...props}
      >
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const stepNumber = index + 1;

          return (
            <React.Fragment key={index}>
              <div
                className={cn(
                  'flex items-center',
                  orientation === 'horizontal' ? 'flex-col' : 'flex-row'
                )}
              >
                {variant === 'dots' ? (
                  <div
                    className={cn(
                      'w-3 h-3 rounded-full transition-colors',
                      isCompleted
                        ? 'bg-primary'
                        : isActive
                        ? 'bg-primary ring-4 ring-primary/20'
                        : 'bg-muted'
                    )}
                  />
                ) : variant === 'numbers' ? (
                  <div
                    className={cn(
                      'flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors',
                      isCompleted
                        ? 'bg-primary text-primary-foreground'
                        : isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    )}
                  >
                    {stepNumber}
                  </div>
                ) : (
                  <div
                    className={cn(
                      'w-2 h-2 rounded-full transition-colors',
                      isCompleted
                        ? 'bg-primary'
                        : isActive
                        ? 'bg-primary ring-4 ring-primary/20'
                        : 'bg-muted'
                    )}
                  />
                )}
                <div
                  className={cn(
                    'mt-2 text-center',
                    orientation === 'horizontal' ? 'w-20' : 'ml-3'
                  )}
                >
                  <div
                    className={cn(
                      'text-xs font-medium',
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    )}
                  >
                    {step}
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    'flex-shrink-0',
                    orientation === 'horizontal'
                      ? 'w-12 h-0.5 mx-2'
                      : 'h-12 w-0.5 my-2',
                    isCompleted ? 'bg-primary' : 'bg-muted'
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
);
ProgressIndicator.displayName = 'ProgressIndicator';

export { ProgressIndicator };

