import Link from 'next/link';
import { cn } from '@/lib/utils';
import { type VariantProps } from 'class-variance-authority';

import { buttonVariants } from './button';

interface LinkButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const LinkButton = function LinkButton(props: LinkButtonProps) {
  const { bg_color, children, className, href, rounded, sizeLevel } = props;

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ bg_color, rounded, sizeLevel }),
        className,
      )}
    >
      {children}
    </Link>
  );
};
