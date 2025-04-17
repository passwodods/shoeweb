'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isMobile?: boolean; // Flag for mobile specific styling
}

// Helper to generate gradient based on theme button class
const getGradientClass = (buttonClass: string): string => {
  if (buttonClass.includes('red')) return 'from-red-50/50 to-white';
  if (buttonClass.includes('blue')) return 'from-blue-50/50 to-white';
  if (buttonClass.includes('green')) return 'from-green-50/50 to-white';
  if (buttonClass.includes('orange')) return 'from-orange-50/50 to-white';
  return 'from-gray-50/50 to-white'; // Default
};

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick, isMobile = false }) => {
  const { themeTextClass } = useTheme();
  // More subtle hover for desktop, bolder for mobile
  const hoverClass = isMobile
    ? `hover:bg-gray-100`
    : `hover:text-opacity-80 after:content-[''] after:absolute after:left-1/2 after:right-1/2 after:bottom-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:left-0 hover:after:right-0`;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative px-3 py-2 ${themeTextClass} transition-all duration-300 ease-out group ${hoverClass} ${isMobile ? 'w-full text-center rounded-md' : 'whitespace-nowrap'}`}
    >
      {children}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const { themeButtonClass, themeTextClass } = useTheme();
  const gradientBg = getGradientClass(themeButtonClass);
  const [menuOpen, setMenuOpen] = useState(false);

  const UserIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> );
  const CartIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> );
  const HamburgerIcon = () => (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
    </svg>
  );

  // Mobile menu links with animation
  const mobileMenuVariants = {
    closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.05 } }
  };

  const mobileLinkVariants = {
    closed: { opacity: 0, y: -5 },
    open: { opacity: 1, y: 0 }
  };

  const mobileLinks = (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={mobileMenuVariants}
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg z-40 border-t border-gray-100`} // Use z-40 to be below sticky nav
        >
          <div className="flex flex-col items-center py-4 px-4 space-y-1">
            <motion.div variants={mobileLinkVariants} className="w-full"><NavLink href="/contact" onClick={() => setMenuOpen(false)} isMobile>Contact</NavLink></motion.div>
            <motion.div variants={mobileLinkVariants} className="w-full"><NavLink href="/policy" onClick={() => setMenuOpen(false)} isMobile>Policy</NavLink></motion.div>
            <motion.div variants={mobileLinkVariants} className="w-full"><NavLink href="/reviews" onClick={() => setMenuOpen(false)} isMobile>Reviews</NavLink></motion.div>
            <motion.div variants={mobileLinkVariants} className="w-full"><NavLink href="/about" onClick={() => setMenuOpen(false)} isMobile>About</NavLink></motion.div>
            <motion.div variants={mobileLinkVariants} className="w-full"><NavLink href="/account" onClick={() => setMenuOpen(false)} isMobile>
              <span className="flex items-center justify-center gap-2"><UserIcon /> Account</span>
            </NavLink></motion.div>
            <motion.div variants={mobileLinkVariants} className="w-full"><NavLink href="/cart" onClick={() => setMenuOpen(false)} isMobile>
              <span className="flex items-center justify-center gap-2"><CartIcon /> Cart</span>
            </NavLink></motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    // Added relative positioning for the mobile menu anchor
    <nav className={`sticky top-0 z-50 bg-gradient-to-b ${gradientBg} shadow-sm transition-colors duration-300 rounded-b-md border-b border-black/5 relative`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Hamburger for mobile, logo for desktop */}
        <div className="flex items-center gap-4">
          <button
            className={`md:hidden focus:outline-none p-1 rounded ${themeTextClass}`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <HamburgerIcon />
          </button>
          {/* Adjusted font weight and size */}
          <Link href="/" className={`hidden md:block text-xl font-semibold tracking-tight px-2 py-1 ${themeTextClass}`}>Shoe Store</Link>
        </div>

        {/* Center: Home link (desktop only) */}
        <div className="hidden md:flex items-center space-x-5">
           <NavLink href="/">Home</NavLink>
           <NavLink href="/contact">Contact</NavLink>
           <NavLink href="/policy">Policy</NavLink>
           <NavLink href="/reviews">Reviews</NavLink>
           <NavLink href="/about">About</NavLink>
        </div>


        {/* Right: Desktop icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/account" aria-label="Account" className={`${themeTextClass} p-1 rounded-full hover:bg-black/5 transition-colors duration-200`}>
            <UserIcon />
          </Link>
          <Link href="/cart" aria-label="Shopping Cart" className={`${themeTextClass} p-1 rounded-full hover:bg-black/5 transition-colors duration-200`}>
            <CartIcon />
          </Link>
        </div>

         {/* Mobile Logo (Centered when menu is closed) */}
         {!menuOpen && (
            <Link href="/" className={`md:hidden text-xl font-semibold tracking-tight absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${themeTextClass}`}>Shoe Store</Link>
         )}
      </div>
      {/* Mobile menu */}
      {mobileLinks}
    </nav>
  );
};

export default Navbar;