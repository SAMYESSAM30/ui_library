import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../Button/Button';

export interface SlideoutMenuProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  title?: string;
  position?: 'left' | 'right';
  width?: string;
}

const SlideoutMenu: React.FC<SlideoutMenuProps> = ({
  isOpen,
  onClose,
  children,
  title,
  position = 'right',
  width = '320px',
}) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const positionClasses = {
    left: 'left-0',
    right: 'right-0',
  };

  return (
    <>
      {onClose && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <div
        className={cn(
          'fixed top-0 bottom-0 z-50 bg-background border shadow-lg transition-transform duration-300',
          positionClasses[position],
          isOpen ? 'translate-x-0' : position === 'right' ? 'translate-x-full' : '-translate-x-full'
        )}
        style={{ width }}
      >
        {(title || onClose) && (
          <div className="flex items-center justify-between p-4 border-b">
            {title && <h2 className="text-lg font-semibold">{title}</h2>}
            {onClose && (
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        )}
        <div className="overflow-y-auto h-full">{children}</div>
      </div>
    </>
  );
};

export { SlideoutMenu };

