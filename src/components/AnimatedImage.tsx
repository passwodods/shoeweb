'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedImageProps {
  imagePath: string;
  altText?: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  imagePath,
  altText = 'Product Image',
}) => {
  const variants = {
    // Start off-screen right and faded out
    initial: { x: '50%', opacity: 0 },
    // Slide in to center and fade in
    animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] } // Smoother easing
    },
    // Fade out (can add slide out if desired)
    exit: { opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    // Removed bg-gray-100 and shadow-md, kept aspect ratio and relative positioning
    <div className="relative w-full aspect-square overflow-hidden rounded-lg">
      <AnimatePresence mode="wait" initial={false}> {/* initial=false prevents initial animation if not desired on first load, but we want it */}
        <motion.div
          key={imagePath} // Change in key triggers animation
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          // Removed transition prop here, defined within variants
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src={imagePath}
            alt={altText}
            fill
            style={{ objectFit: 'contain' }}
            priority // Keep priority for LCP optimization
            sizes="(max-width: 768px) 100vw, 50vw" // Adjusted sizes
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedImage;