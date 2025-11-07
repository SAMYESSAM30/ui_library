import * as React from 'react';
import { Plus } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button, ButtonProps } from '../Button/Button';

export interface FloatingButtonProps extends ButtonProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  icon?: React.ReactNode;
}

const FloatingButton = React.forwardRef<HTMLButtonElement, FloatingButtonProps>(
  ({ className, position = 'bottom-right', icon, children, ...props }, ref) => {
    const positionClasses = {
      'bottom-right': 'bottom-4 right-4',
      'bottom-left': 'bottom-4 left-4',
      'top-right': 'top-4 right-4',
      'top-left': 'top-4 left-4',
    };

    return (
      <Button
        ref={ref}
        size="icon"
        className={cn(
          'fixed z-50 h-14 w-14 rounded-full shadow-lg',
          positionClasses[position],
          className
        )}
        {...props}
      >
        {icon || <Plus className="h-6 w-6" />}
        {children}
      </Button>
    );
  }
);
FloatingButton.displayName = 'FloatingButton';

export { FloatingButton };

