import * as React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface RadialStepperStep {
  label: string;
  description?: string;
  completed?: boolean;
  active?: boolean;
}

export interface RadialStepperProps {
  steps: RadialStepperStep[];
  currentStep?: number;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

const RadialStepper: React.FC<RadialStepperProps> = ({
  steps,
  currentStep,
  orientation = 'horizontal',
  className,
}) => {
  return (
    <div
      className={cn(
        'flex',
        orientation === 'horizontal' ? 'flex-row items-center' : 'flex-col',
        className
      )}
    >
      {steps.map((step, index) => {
        const isActive = currentStep === index || step.active;
        const isCompleted = step.completed || (currentStep !== undefined && index < currentStep);
        const stepNumber = index + 1;

        return (
          <React.Fragment key={index}>
            <div
              className={cn(
                'flex items-center',
                orientation === 'horizontal' ? 'flex-col' : 'flex-row'
              )}
            >
              <div className="relative flex flex-col items-center">
                <div
                  className={cn(
                    'flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors',
                    isCompleted
                      ? 'bg-primary border-primary text-primary-foreground'
                      : isActive
                      ? 'border-primary bg-background text-primary'
                      : 'border-muted bg-background text-muted-foreground'
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-medium">{stepNumber}</span>
                  )}
                </div>
                <div
                  className={cn(
                    'mt-2 text-center',
                    orientation === 'horizontal' ? 'w-24' : 'ml-4'
                  )}
                >
                  <div
                    className={cn(
                      'text-sm font-medium',
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    )}
                  >
                    {step.label}
                  </div>
                  {step.description && (
                    <div className="text-xs text-muted-foreground mt-1">{step.description}</div>
                  )}
                </div>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'flex-shrink-0',
                  orientation === 'horizontal'
                    ? 'w-16 h-0.5 mx-2'
                    : 'h-16 w-0.5 my-2',
                  isCompleted ? 'bg-primary' : 'bg-muted'
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export { RadialStepper };

