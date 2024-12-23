import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ErrorBoundary from '@/app/error-boundary';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Delivery Mate',
  description: 'Generated by create next app',
};

const OurDocument = function OurDocument({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

const RootLayout = function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <OurDocument>
      <Header />
      <ErrorBoundary>{children}</ErrorBoundary>
      <Footer />
    </OurDocument>
  );
};

export default RootLayout;
