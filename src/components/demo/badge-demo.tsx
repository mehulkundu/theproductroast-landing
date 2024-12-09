import React from 'react';
import { BadgeExtended } from '@/components/ui/badge-extended';

export function BadgeExtendedDemo() {
  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Variants</h3>
        <div className="grid grid-cols-4 gap-8 p-4 bg-card rounded-lg border">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Solid</span>
            <BadgeExtended variant="solid">Label</BadgeExtended>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Soft</span>
            <BadgeExtended variant="soft">Label</BadgeExtended>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Outline</span>
            <BadgeExtended variant="outline">Label</BadgeExtended>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Surface</span>
            <BadgeExtended variant="surface">Label</BadgeExtended>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Colors</h3>
        <div className="flex flex-wrap gap-2">
          <BadgeExtended color="default">Default</BadgeExtended>
          <BadgeExtended color="primary">Primary</BadgeExtended>
          <BadgeExtended color="secondary">Secondary</BadgeExtended>
          <BadgeExtended color="success">Success</BadgeExtended>
          <BadgeExtended color="warning">Warning</BadgeExtended>
          <BadgeExtended color="info">Info</BadgeExtended>
          <BadgeExtended color="destructive">Destructive</BadgeExtended>
        </div>
      </div>

      {/* All Combinations */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">All Combinations</h3>
        <div className="grid gap-4">
          {['solid', 'soft', 'outline', 'surface'].map((variant) => (
            <div key={variant} className="flex flex-wrap gap-2">
              {[
                'default',
                'primary',
                'secondary',
                'success',
                'warning',
                'info',
                'destructive',
              ].map((color) => (
                <BadgeExtended
                  key={`${variant}-${color}`}
                  variant={variant as any}
                  color={color as any}
                >
                  {`${variant} ${color}`}
                </BadgeExtended>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
