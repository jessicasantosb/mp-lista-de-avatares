import type { Metadata } from 'next';
import { Oxygen } from 'next/font/google';
import './globals.css';

const oxygem = Oxygen({ weight: ['300', '400', '700'], subsets: ['latin'] });

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
      <body className={oxygem.className}>{children}</body>
    </html>
  );
}
