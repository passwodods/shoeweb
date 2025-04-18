'use client';

import React, { useEffect, useCallback, useRef } from 'react'; // Removed useState, useMemo
// Import context hook
import { useTheme } from '@/context/ThemeContext';
 // Import useCart
import { productVariations } from '../data/productData';

import Link from 'next/link'; // Import Link component
// Import components
import HeroSection from '../components/HeroSection';
import ColorSelector from '../components/ColorSelector';
import ProductGallery from '../components/ProductGallery';
import KeyFeatures from '../components/KeyFeatures';
import TechnologySection from '../components/TechnologySection';
import RecommendedProducts from '../components/RecommendedProducts'; // Import RecommendedProducts
import ScrollAnimatedShoe from '../components/ScrollAnimatedShoe';

export default function Home() {
  // Get theme state and setter from context
  const {
    selectedVariationId,
    setSelectedVariationId, // Use the setter from context
    selectedVariation,
    themeBgClass,
    themeButtonClass,
    // themeTextClass is not directly used here anymore
  } = useTheme();
  // Remove unused addToCart import here (it's used in HeroSection)
  // const { addToCart } = useCart();

  // Handler function passed to ColorSelector - now uses context setter
  const handleSelectVariation = useCallback((variationId: string) => {
    setSelectedVariationId(variationId);
    // Clear interval when user manually selects a color
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; // Clear the ref as well
    }
  }, [setSelectedVariationId]); // Dependency on the setter from context

  // Ref to store interval ID
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Automatic variation change effect - specific to the Home page
  useEffect(() => {
    const changeVariation = () => {
      // Use the setter from context
      setSelectedVariationId((prevId) => {
        const currentIndex = productVariations.findIndex((v) => v.id === prevId);
        const nextIndex = (currentIndex + 1) % productVariations.length;
        return productVariations[nextIndex].id;
      });
    };

    // Start the interval only if not already cleared by manual selection
    if (!intervalRef.current) {
        intervalRef.current = setInterval(changeVariation, 12000); // Change every 12 seconds
    }

    // Clear interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // Rerun effect if setSelectedVariationId changes (though unlikely)
  }, [setSelectedVariationId]);

  return (
    // Apply dynamic background from context
    <main
      className={`flex min-h-screen flex-col items-center justify-start pt-16 transition-colors duration-500 ease-in-out ${themeBgClass}`} // Use themeBgClass from context
    >
      {/* Navbar is rendered in layout */}

      {/* Scroll animated shoe uses selectedVariation from context */}
      <ScrollAnimatedShoe imagePath={selectedVariation?.imagePath} />

      {/* Container for main content */}
      <div className="container mx-auto flex flex-col items-center gap-8 md:gap-12 mt-8 mb-8">
        {/* Hero Section Container */}
        <div className="w-full bg-white/70 backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-lg border border-gray-200">
          <HeroSection
            selectedVariation={selectedVariation} // Pass selectedVariation from context
            themeButtonClass={themeButtonClass} // Pass themeButtonClass from context
          />
        </div>

        {/* Color Selector */}
        <ColorSelector
          variations={productVariations}
          selectedVariationId={selectedVariationId} // Pass selectedVariationId from context
          onSelectVariation={handleSelectVariation} // Pass the updated handler
        />

        {/* Link to Reviews Section */}
        <div className="text-center mt-8 border-t pt-8 w-full max-w-3xl">
            <h3 className="text-xl font-semibold mb-3 text-gray-700">See What Others Think</h3>
            <p className="text-gray-600 mb-4">Check out reviews from our satisfied customers!</p>
            <Link href="/reviews" className={`inline-block px-6 py-2 rounded-md text-white transition duration-300 shadow-sm hover:shadow-md ${themeButtonClass}`}>
                Read Reviews
            </Link>
        </div>

        {/* Product Gallery */}
        <ProductGallery selectedVariation={selectedVariation} />

        {/* Key Features Section */}
        <KeyFeatures />

        {/* Technology Section - Pass selectedVariation */}
        <TechnologySection selectedVariation={selectedVariation} />

         {/* Recommended Products Section */}
         {/* This section is outside the main container for full-width background */}
      </div>
        <RecommendedProducts />
    </main>
  );
}