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
      {/* Comment removed to prevent hydration error */}
      <ThemeProvider>
        {/* Move CartProvider inside body */}
        <body className={`${inter.className}`}>
          <CartProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </CartProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
