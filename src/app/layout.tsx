import type { Metadata } from 'next';
import './globals.css';
import UserProvider from '@/provider/userProvider';

export const metadata: Metadata = {
  title: 'Venture Match',
  description: 'venture match',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}
