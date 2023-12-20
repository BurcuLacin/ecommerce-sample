import './globals.scss';
import { Providers } from '@/redux/provider';
import { lazy } from 'react';

const Navbar = lazy(() => import('@/components/navbar/Navbar'));
const Footer = lazy(() => import('@/components/footer/Footer'));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>E-commerce</title>
      </head>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
