import type { Metadata } from 'next';
import './globals.css';
import NextAuthProvider from '@/provider/nextAuthProvider';
import { authOptions } from '@/auth';
import { getServerSession } from 'next-auth';

export const metadata: Metadata = {
  title: 'Venture Match',
  description: '',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <NextAuthProvider session={session}>
        <body>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
