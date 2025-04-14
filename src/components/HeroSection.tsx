'use client';

import React from 'react';
import { ProductVariation, defaultProduct } from '@/data/productData';
import AnimatedImage from './AnimatedImage';
import { motion } from 'framer-motion'; // Keep motion for text animation

interface HeroSectionProps {
  selectedVariation: ProductVariation | undefined;
  themeButtonClass: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  selectedVariation,
  themeButtonClass,
}) => {
  if (!selectedVariation) {
    return <div className="text-center p-10 h-[500px]">Loading product...</div>;
  }

  // Animation variants for the text container
  const textAnimation = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[400px] md:min-h-[500px]">

        {/* Details Column (Left) */}
        <motion.div
          className="flex flex-col justify-center text-center md:text-left order-2 md:order-1"
          initial="hidden"
          animate="visible"
          variants={textAnimation} // Keep text animation
        >
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-3">
            {defaultProduct.name}
          </h1>
          <p className="text-gray-600 mb-5 text-lg">
            {defaultProduct.description}
          </p>

          <div className="mb-5">
            <span className="text-gray-500 mr-2">Color:</span>
            <span className="font-semibold text-gray-700">
              {selectedVariation.colorName}
            </span>
          </div>

          <div className="mb-8">
            <span className="text-4xl font-bold text-gray-900">
              ${selectedVariation.price.toFixed(2)}
            </span>
          </div>

          {/* Add to Cart Button */}
          <div className="flex justify-center md:justify-start">
            <button
              className={`w-auto px-8 py-3 rounded-lg text-white font-bold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${themeButtonClass}`}
            >
              Add to Cart
            </button>
          </div>
        </motion.div>

        {/* Image Column (Right) - Removed motion wrapper */}
        <div className="w-full order-1 md:order-2">
          <AnimatedImage
            imagePath={selectedVariation.imagePath}
            altText={`${defaultProduct.name} - ${selectedVariation.colorName}`}
          />
        </div>

      </div>
    </div>
  );
};

export default HeroSection;