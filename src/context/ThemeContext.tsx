'use client';

import React, { createContext, useState, useMemo, useContext, ReactNode } from 'react';
import { productVariations, ProductVariation } from '@/data/productData';

interface ThemeContextProps {
  selectedVariationId: string;
  setSelectedVariationId: React.Dispatch<React.SetStateAction<string>>;
  selectedVariation: ProductVariation | undefined;
  themeBgClass: string;
  themeTextClass: string;
  themeButtonClass: string;
}

// Create the context with a default value (can be undefined or initial state)
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Create a provider component
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // State for the selected variation ID now lives here
  const [selectedVariationId, setSelectedVariationId] = useState<string>(
    productVariations[0]?.id || '' // Default to the first variation
  );

  // Find the full selected variation object based on ID
  const selectedVariation = useMemo<ProductVariation | undefined>(() => {
    return productVariations.find((v) => v.id === selectedVariationId);
  }, [selectedVariationId]);

  // Determine current theme classes based on the selected variation
  const themeBgClass = selectedVariation?.themeBgClass || 'bg-gray-100';
  const themeButtonClass = selectedVariation?.themeButtonClass || 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500';
  const themeTextClass = selectedVariation?.themeTextClass || 'text-gray-600';

  // Value provided by the context
  const value = {
    selectedVariationId,
    setSelectedVariationId,
    selectedVariation,
    themeBgClass,
    themeTextClass,
    themeButtonClass,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// Custom hook to use the ThemeContext
export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};