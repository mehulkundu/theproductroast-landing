import React from 'react';
import { ButtonExtended } from '@/components/ui/button-extended';
import { CircleIcon } from 'lucide-react';

export function ButtonExtendedDemo() {
  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Variants</h3>
        <div className="grid grid-cols-5 gap-8 p-4 bg-card rounded-lg border">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Solid</span>
            <ButtonExtended variant="solid">ButtonExtended</ButtonExtended>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Soft</span>
            <ButtonExtended variant="soft">ButtonExtended</ButtonExtended>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Outline</span>
            <ButtonExtended variant="outline">ButtonExtended</ButtonExtended>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Surface</span>
            <ButtonExtended variant="surface">ButtonExtended</ButtonExtended>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Ghost</span>
            <ButtonExtended variant="ghost">ButtonExtended</ButtonExtended>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Colors</h3>
        <div className="flex flex-wrap gap-2">
          <ButtonExtended color="default">Default</ButtonExtended>
          <ButtonExtended color="primary">Primary</ButtonExtended>
          <ButtonExtended color="secondary">Secondary</ButtonExtended>
          <ButtonExtended color="success">Success</ButtonExtended>
          <ButtonExtended color="warning">Warning</ButtonExtended>
          <ButtonExtended color="info">Info</ButtonExtended>
          <ButtonExtended color="destructive">Destructive</ButtonExtended>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <div className="flex items-center gap-2">
          <ButtonExtended size="sm">Small</ButtonExtended>
          <ButtonExtended>Default</ButtonExtended>
          <ButtonExtended size="lg">Large</ButtonExtended>
          <ButtonExtended size="icon">
            <CircleIcon size={20} />
          </ButtonExtended>
        </div>
      </div>

      {/* All Combinations */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">All Combinations</h3>
        <div className="grid gap-4">
          {['solid', 'soft', 'outline', 'surface', 'ghost'].map((variant) => (
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
                <ButtonExtended
                  key={`${variant}-${color}`}
                  variant={variant as any}
                  color={color as any}
                >
                  {`${variant} ${color}`}
                </ButtonExtended>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
