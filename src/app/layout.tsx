import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Template Editor',
  description: 'Easily create and edit your own templates.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto max-w-4xl px-4">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
