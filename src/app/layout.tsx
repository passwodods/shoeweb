import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';
// Import ThemeProvider
import { ThemeProvider } from '@/context/ThemeContext';
import { CartProvider } from '@/context/CartContext';
import Footer from '@/components/Footer'; // Import Footer

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
        <CartProvider> {/* Wrap with CartProvider */}
          <body className={`${inter.className}`}>
            <Navbar />
            <main className="flex-grow">{children}</main> {/* Wrap children in a main tag for semantic structure and flex-grow */}
            <Footer /> {/* Add Footer here */}
          </body>
        </CartProvider>
      </ThemeProvider>
    </html>
  );
}
