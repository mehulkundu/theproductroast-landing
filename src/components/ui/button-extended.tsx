import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        solid: 'shadow-sm',
        soft: 'shadow-sm',
        outline: 'border shadow-sm',
        surface: 'border shadow-sm',
        ghost: '',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
      color: {
        default: '',
        primary: '',
        secondary: '',
        success: '',
        warning: '',
        info: '',
        destructive: '',
      },
    },
    compoundVariants: [
      // Solid variants
      {
        variant: 'solid',
        color: 'default',
        class: 'bg-foreground text-background hover:bg-foreground/90',
      },
      {
        variant: 'solid',
        color: 'primary',
        class: 'bg-primary text-primary-foreground hover:bg-primary/90',
      },
      {
        variant: 'solid',
        color: 'secondary',
        class: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
      },
      {
        variant: 'solid',
        color: 'success',
        class: 'bg-success text-success-foreground hover:bg-success/90',
      },
      {
        variant: 'solid',
        color: 'warning',
        class: 'bg-warning text-warning-foreground hover:bg-warning/90',
      },
      {
        variant: 'solid',
        color: 'info',
        class: 'bg-info text-info-foreground hover:bg-info/90',
      },
      {
        variant: 'solid',
        color: 'destructive',
        class:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      },
      // Soft variants
      {
        variant: 'soft',
        color: 'default',
        class: 'bg-muted text-muted-foreground hover:bg-muted/80',
      },
      {
        variant: 'soft',
        color: 'primary',
        class: 'bg-primary/20 text-primary-foreground hover:bg-primary/30',
      },
      {
        variant: 'soft',
        color: 'secondary',
        class:
          'bg-secondary/20 text-secondary-foreground hover:bg-secondary/30',
      },
      {
        variant: 'soft',
        color: 'success',
        class: 'bg-success/20 text-success-foreground hover:bg-success/30',
      },
      {
        variant: 'soft',
        color: 'warning',
        class: 'bg-warning/20 text-warning-foreground hover:bg-warning/30',
      },
      {
        variant: 'soft',
        color: 'info',
        class: 'bg-info/20 text-info-foreground hover:bg-info/30',
      },
      {
        variant: 'soft',
        color: 'destructive',
        class:
          'bg-destructive/20 text-destructive-foreground hover:bg-destructive/30',
      },
      // Outline variants
      {
        variant: 'outline',
        color: 'default',
        class: 'border-border bg-background hover:bg-muted',
      },
      {
        variant: 'outline',
        color: 'primary',
        class: 'border-primary text-primary-foreground hover:bg-primary/10',
      },
      {
        variant: 'outline',
        color: 'secondary',
        class:
          'border-secondary text-secondary-foreground hover:bg-secondary/10',
      },
      {
        variant: 'outline',
        color: 'success',
        class: 'border-success text-success-foreground hover:bg-success/10',
      },
      {
        variant: 'outline',
        color: 'warning',
        class: 'border-warning text-warning-foreground hover:bg-warning/10',
      },
      {
        variant: 'outline',
        color: 'info',
        class: 'border-info text-info-foreground hover:bg-info/10',
      },
      {
        variant: 'outline',
        color: 'destructive',
        class:
          'border-destructive text-destructive-foreground hover:bg-destructive/10',
      },
      // Surface variants
      {
        variant: 'surface',
        color: 'default',
        class: 'bg-muted border-border text-foreground hover:bg-muted',
      },
      {
        variant: 'surface',
        color: 'primary',
        class:
          'bg-primary/10 border-primary text-primary-foreground hover:bg-primary/20',
      },
      {
        variant: 'surface',
        color: 'secondary',
        class:
          'bg-secondary/10 border-secondary text-secondary-foreground hover:bg-secondary/20',
      },
      {
        variant: 'surface',
        color: 'success',
        class:
          'bg-success/10 border-success text-success-foreground hover:bg-success/20',
      },
      {
        variant: 'surface',
        color: 'warning',
        class:
          'bg-warning/10 border-warning text-warning-foreground hover:bg-warning/20',
      },
      {
        variant: 'surface',
        color: 'info',
        class: 'bg-info/10 border-info text-info-foreground hover:bg-info/20',
      },
      {
        variant: 'surface',
        color: 'destructive',
        class:
          'bg-destructive/10 border-destructive text-destructive-foreground hover:bg-destructive/20',
      },
      // Ghost variants
      {
        variant: 'ghost',
        color: 'default',
        class: 'text-foreground hover:bg-muted',
      },
      {
        variant: 'ghost',
        color: 'primary',
        class: 'text-primary-foreground hover:bg-primary/20',
      },
      {
        variant: 'ghost',
        color: 'secondary',
        class: 'text-secondary-foreground hover:bg-secondary/20',
      },
      {
        variant: 'ghost',
        color: 'success',
        class: 'text-success-foreground hover:bg-success/20',
      },
      {
        variant: 'ghost',
        color: 'warning',
        class: 'text-warning-foreground hover:bg-warning/20',
      },
      {
        variant: 'ghost',
        color: 'info',
        class: 'text-info-foreground hover:bg-info/20',
      },
      {
        variant: 'ghost',
        color: 'destructive',
        class: 'text-destructive-foreground hover:bg-destructive/20',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'default',
      color: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const ButtonExtended = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, color, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, color, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
ButtonExtended.displayName = 'Button';

export { ButtonExtended, buttonVariants };
