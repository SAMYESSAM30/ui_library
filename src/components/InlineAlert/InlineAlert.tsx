import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

const inlineAlertVariants = cva(
  'flex items-start gap-3 rounded-md border p-4',
  {
    variants: {
      variant: {
        default: 'bg-background border-border',
        success: 'bg-green-50 border-green-200 text-green-900 dark:bg-green-950 dark:border-green-800 dark:text-green-300',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-900 dark:bg-yellow-950 dark:border-yellow-800 dark:text-yellow-300',
        error: 'bg-red-50 border-red-200 text-red-900 dark:bg-red-950 dark:border-red-800 dark:text-red-300',
        info: 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const iconMap = {
  success: CheckCircle2,
  warning: AlertTriangle,
  error: AlertCircle,
  info: Info,
  default: Info,
};

export interface InlineAlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inlineAlertVariants> {
  title?: string;
  onClose?: () => void;
}

const InlineAlert = React.forwardRef<HTMLDivElement, InlineAlertProps>(
  ({ className, variant, title, children, onClose, ...props }, ref) => {
    const Icon = variant ? iconMap[variant] : iconMap.default;

    return (
      <div ref={ref} className={cn(inlineAlertVariants({ variant }), className)} {...props}>
        <Icon className="h-5 w-5 shrink-0 mt-0.5" />
        <div className="flex-1">
          {title && <h4 className="font-semibold mb-1">{title}</h4>}
          <div className="text-sm">{children}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="shrink-0 text-current opacity-70 hover:opacity-100"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);
InlineAlert.displayName = 'InlineAlert';

export { InlineAlert, inlineAlertVariants };

