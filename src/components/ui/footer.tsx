export const Footer = function Footer() {
  const LABELS = {
    TITLE: 'Delivery Mate',
    COPYRIGHT: '© 2024 Delivery Mate. All rights reserved.',
  };

  return (
    <footer className="bg-white">
      <div className="flex flex-col items-start gap-2 w-full desktop:max-w-5xl mx-auto px-7 desktop:px-0 py-5">
        <p className="text-2xl text-gray-500">{LABELS.TITLE}</p>
        <p className="text-sm text-gray-500">{LABELS.COPYRIGHT}</p>
      </div>
    </footer>
  );
};
