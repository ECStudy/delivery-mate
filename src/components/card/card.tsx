import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function Card({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border bg-card text-card-foreground shadow-sm bg-white',
          className,
        )}
        {...props}
      />
    );
  },
);
