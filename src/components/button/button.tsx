import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'text-center disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      bg_color: {
        white: 'bg-white hover:bg-gray-100 active:bg-gray-200',
        gray: 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300 disabled:hover:bg-gray-100 disabled:active:bg-gray-100',
        black: 'bg-black text-white',
        custom: '',
      },
      rounded: {
        default: 'rounded-md',
        full: 'rounded-full',
      },
      sizeLevel: {
        small: 'text-xs px-3 py-2',
        medium: 'text-sm px-5 py-3',
        large: 'text-base px-7 py-4',
        full: 'text-sm w-full py-3',
        fit: 'text-sm min-w-fit px-5',
        icon: 'w-fit h-fit p-2',
      },
    },
    defaultVariants: {
      bg_color: 'white',
      rounded: 'default',
      sizeLevel: 'medium',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      bg_color,
      children,
      className,
      rounded,
      sizeLevel,
      type = 'submit',
      ...props
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          buttonVariants({ bg_color, rounded, sizeLevel }),
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
