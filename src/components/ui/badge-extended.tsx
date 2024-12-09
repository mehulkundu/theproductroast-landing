import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        solid: 'border-transparent shadow-sm',
        soft: 'border-transparent',
        outline: '',
        surface: 'shadow-sm',
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
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function BadgeExtended({ className, variant, color, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, color }), className)}
      {...props}
    />
  );
}

export { BadgeExtended, badgeVariants };
