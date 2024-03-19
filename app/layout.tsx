import '@/styles/index.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });

const skyText = localFont({
  src: [
    {
      path: '../public/fonts/Sky-Text-Regular.ttf',
      weight: '400',
    },
    {
      path: '../public/fonts/Sky-Text-Medium-Regular.ttf',
      weight: '700',
    },
  ],
  variable: '--font-sky-text',
});

export const metadata: Metadata = {
  title: 'INTERACTIVE TEAM SELECTOR',
  description: 'Exam for Cloud',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${skyText.variable}`}>{children}</body>
    </html>
  );
}
