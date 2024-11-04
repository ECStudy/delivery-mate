import Link from 'next/link';

interface ILinkButton {
  label: string;
  href: string;
  isBgColor?: boolean;
}

export const LinkButton = function LinkButton({
  label,
  href,
  isBgColor,
}: ILinkButton) {
  const getClassName = () => {
    let className = 'text-center text-xs px-3 py-2 rounded-full';

    if (isBgColor) {
      className += ' bg-gray-100 hover:bg-gray-200 active:bg-gray-300';
    } else {
      className += ' hover:bg-gray-100 active:bg-gray-200';
    }

    return className;
  };

  return (
    <Link href={href} className={getClassName()}>
      {label}
    </Link>
  );
};
