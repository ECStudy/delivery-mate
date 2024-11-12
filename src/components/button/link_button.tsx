import Link from 'next/link';
import { cn } from '@/lib/utils';
import { type VariantProps } from 'class-variance-authority';

import { buttonVariants } from './button';

interface LinkButtonProps extends VariantProps<typeof buttonVariants> {
  label: string;
  href: string;
}

export const LinkButton = function LinkButton(props: LinkButtonProps) {
  const { bg_color, href, label, rounded, sizeLevel: size } = props;

  return (
    <Link
      href={href}
      className={cn(buttonVariants({ bg_color, rounded, sizeLevel: size }))}
    >
      {label}
    </Link>
  );
};
