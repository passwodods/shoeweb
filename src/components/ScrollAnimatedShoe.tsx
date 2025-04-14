'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ScrollAnimatedShoeProps {
  imagePath: string | undefined;
}

const SCROLL_THRESHOLD = 50;

const ScrollAnimatedShoe: React.FC<ScrollAnimatedShoeProps> = ({ imagePath }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const hasAnimatedRef = useRef(false); // Track if animation has already played

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD && !hasAnimatedRef.current) {
        setHasScrolled(true);
        hasAnimatedRef.current = true; // Lock animation so it never re-triggers
        window.removeEventListener('scroll', handleScroll);
      }
    };

    if (!hasAnimatedRef.current) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!imagePath) {
    return null;
  }

  // Only animate on first scroll, never again
  const dropVariants = {
    hidden: { y: '-100vh', opacity: 0 },
    visible: {
      y: '100vh',
      opacity: 0.5,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 50,
      }
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] z-40 pointer-events-none opacity-50"
      variants={dropVariants}
      initial="hidden"
      animate={hasScrolled ? 'visible' : 'hidden'}
    >
      <Image
        src={imagePath}
        alt="Animated shoe background"
        fill
        className="object-contain drop-shadow-2xl"
        priority={false}
        quality={75}
        sizes="(max-width: 768px) 80vw, 60vw"
      />
    </motion.div>
  );
};

export default ScrollAnimatedShoe;