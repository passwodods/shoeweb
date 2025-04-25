'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { defaultProduct } from '@/data/productData'; // Import the full product data
import ProductCard from './ProductCard'; // Import the ProductCard component

// Remove unused prop from interface
// interface RecommendedProductsProps {
//   currentProductId?: string;
// }

// Remove props type annotation as the component takes no props
const RecommendedProducts: React.FC = () => {
  const { themeTextClass } = useTheme();

  // For now, just recommend the different color variations of the main product
  // Later, this could fetch actual recommended products based on logic
  const recommended = defaultProduct; // Use the main product data

  // Filter out the current product if an ID is provided (though not strictly needed for variations)
  // const filteredVariations = recommended.variations.filter(v => v.id !== currentProductId);

  return (
    <section className="py-16 md:py-24 bg-gray-50"> {/* Light background */}
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${themeTextClass}`}>
          You Might Also Like
        </h2>
        {/* Display product cards for variations */}
        {/* We need to pass the full product structure to ProductCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
           {/* Create temporary product objects for each variation to pass to ProductCard */}
           {recommended.variations.map(variation => {
             // Construct a temporary Product-like object for the card
             const productForCard = {
               ...defaultProduct, // Get name, description etc.
               id: variation.id, // Use variation ID for link uniqueness if needed later
               variations: [variation] // Pass only this specific variation
             };
             return <ProductCard key={variation.id} product={productForCard} />;
           })}
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;