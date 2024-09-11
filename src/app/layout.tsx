import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import './globals.css';

const roboto = Roboto_Mono({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lista de Avatares',
  description: 'Este é um componente que exibe uma lista de avatares',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
