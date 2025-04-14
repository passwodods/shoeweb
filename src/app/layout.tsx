import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';
// Import ThemeProvider
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shoe Store',
  description: 'E-commerce website for shoes',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      {/* Wrap body content with ThemeProvider */}
      <ThemeProvider>
        <body className={`${inter.className}`}>
          {/* Navbar will now get theme from context */}
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
