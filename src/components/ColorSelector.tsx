'use client';

import React from 'react';
import { ProductVariation } from '@/data/productData';

interface ColorSelectorProps {
  variations: ProductVariation[];
  selectedVariationId: string;
  // Renamed prop for clarity based on revised plan
  onSelectVariation: (variationId: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  variations,
  selectedVariationId,
  onSelectVariation, // Using the new prop name
}) => {
  return (
    <div className="flex justify-center md:justify-start space-x-3 mt-4 py-4">
      <span className="text-gray-600 self-center mr-2">Variations:</span>
      {variations.map((variation) => (
        <button
          key={variation.id}
          onClick={() => onSelectVariation(variation.id)} // Use the passed handler
          className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
            variation.colorValue // Swatch color
          } ${
            selectedVariationId === variation.id
              ? 'border-gray-900 ring-2 ring-offset-1 ring-gray-400 dark:border-white' // Selected state with better contrast
              : 'border-transparent hover:border-gray-400' // Default/hover state
          }`}
          aria-label={`Select ${variation.colorName} color`}
          title={variation.colorName} // Tooltip for color name
        />
      ))}
    </div>
  );
};

export default ColorSelector;