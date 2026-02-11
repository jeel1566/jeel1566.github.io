import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'Jeel | Creative Developer & Visionary',
  description: 'Personal portfolio of a creative developer building the future of context.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
