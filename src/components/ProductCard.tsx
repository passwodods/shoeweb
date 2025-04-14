'use client';

import React, { useState, useMemo } from 'react';
import {
  productVariations,
  defaultProduct,
  ProductVariation,
} from '@/data/productData';
import ColorSelector from './ColorSelector';
import AnimatedImage from './AnimatedImage';

const ProductCard: React.FC = () => {
  // Initialize state with the ID of the first variation
  const [selectedVariationId, setSelectedVariationId] = useState<string>(
    productVariations[0]?.id || ''
  );

  // Find the currently selected variation object based on the ID
  const selectedVariation = useMemo(() => {
    return productVariations.find((v) => v.id === selectedVariationId);
  }, [selectedVariationId]);

  // Handle color selection
  const handleColorSelect = (variationId: string) => {
    setSelectedVariationId(variationId);
  };

  // Fallback if no variation is selected (shouldn't happen with initialization)
  if (!selectedVariation) {
    return <div>Product data not available.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white rounded-lg shadow-xl mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Column */}
        <div>
          <AnimatedImage
            imagePath={selectedVariation.imagePath}
            altText={`${defaultProduct.name} - ${selectedVariation.colorName}`}
          />
        </div>

        {/* Details Column */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {defaultProduct.name}
          </h1>
          <p className="text-gray-600 mb-4">{defaultProduct.description}</p>

          <div className="mb-4">
            <span className="text-gray-500 mr-2">Color:</span>
            <span className="font-semibold text-gray-700">
              {selectedVariation.colorName}
            </span>
          </div>

          <div className="mb-6">
            <span className="text-3xl font-bold text-gray-900">
              ${selectedVariation.price.toFixed(2)}
            </span>
          </div>

          <ColorSelector
            variations={productVariations}
            selectedVariationId={selectedVariationId}
            onColorSelect={handleColorSelect}
          />

          {/* Add to Cart Button (Optional Placeholder) */}
          <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;