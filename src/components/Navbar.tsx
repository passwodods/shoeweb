'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const { themeTextClass } = useTheme();
  const hoverTextClass = themeTextClass.replace(/-\d+/, m => `-${Math.min(900, parseInt(m.slice(1)) + 200)}`);

  return (
    <Link
      href={href}
      className={`relative px-2 py-1 ${themeTextClass} hover:${hoverTextClass} transition-all duration-300 ease-out group transform hover:scale-110 whitespace-nowrap`}
    >
      {children}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const { themeBgClass, themeTextClass } = useTheme();
  const homeHoverTextClass = themeTextClass.replace(/-\d+/, m => `-${Math.min(900, parseInt(m.slice(1)) + 200)}`);

  const UserIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> );
  const CartIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> );

  return (
    <nav className={`sticky top-0 z-50 ${themeBgClass} shadow-md transition-colors duration-300 rounded-b-lg`}>
      <div className="container mx-auto p-4 flex justify-center items-center space-x-10 md:space-x-16">
        {/* Left Side */}
        <div className="flex items-center space-x-4 md:space-x-6">
           {/* Wrap button in Link */}
           <Link href="/account" aria-label="Account" className={`${themeTextClass} hover:scale-110 transition-transform duration-300 ease-out`}>
             <UserIcon />
           </Link>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/policy">Policy</NavLink>
        </div>

        {/* Center - Home */}
        <Link
          href="/"
          className={`relative px-2 py-1 text-lg font-bold ${themeTextClass} hover:${homeHoverTextClass} transition-all duration-300 ease-out group transform hover:scale-110 whitespace-nowrap`}
        >
          Home
        </Link>

        {/* Right Side */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <NavLink href="/reviews">Reviews</NavLink>
          <NavLink href="/about">About</NavLink>
           {/* Wrap button in Link */}
           <Link href="/cart" aria-label="Shopping Cart" className={`${themeTextClass} hover:scale-110 transition-transform duration-300 ease-out`}>
             <CartIcon />
           </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;