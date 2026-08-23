import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BarkyTalk | Better days with your best friend',
  description: 'Practical pet-care guides and independently researched product recommendations for happier pets.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
