import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {}

export const InputVariants = cva(
  'flex border rounded-md focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      sizeLevel: {
        small: 'text-xs px-3 py-2',
        medium: 'text-sm px-5 py-3',
        large: 'text-base px-7 py-4',
        full: 'text-sm w-full px-5 py-3',
        custom: '',
      },
    },
    defaultVariants: {
      sizeLevel: 'small',
    },
  },
);

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, sizeLevel, type, ...props },
  ref,
) {
  return (
    <input
      type={type}
      className={cn(InputVariants({ sizeLevel }), className)}
      ref={ref}
      {...props}
    />
  );
});
