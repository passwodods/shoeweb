export interface ProductVariation {
  id: string;
  colorName: string;
  colorValue: string; // For the swatch itself (e.g., bg-red-600)
  imagePath: string;
  price: number;
  themeBgClass: string; // Tailwind class for background accents/theme
  themeButtonClass: string; // Tailwind class for buttons
  themeTextClass: string; // Tailwind class for accent text (optional)
  isDefault?: boolean; // Add optional flag for the default variation
}

export interface Product {
  id: string; // Add an ID for the overall product concept
  name: string;
  description: string;
  variations: ProductVariation[];
}

// Define theme classes for Orange
const orangeTheme = {
  themeBgClass: 'bg-orange-100',
  themeButtonClass: 'bg-orange-600 hover:bg-orange-700 focus:ring-orange-500',
  themeTextClass: 'text-orange-700', // Adjusted for contrast
};

export const productVariations: ProductVariation[] = [
  {
    id: 'shoe-red',
    colorName: 'Crimson Red',
    colorValue: 'bg-red-600',
    imagePath: '/product-images/red/main.png',
    price: 120.00,
    themeBgClass: 'bg-red-100',
    themeButtonClass: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
    themeTextClass: 'text-red-600',
    isDefault: true, // Mark red as default
  },
  {
    id: 'shoe-blue',
    colorName: 'Ocean Blue',
    colorValue: 'bg-blue-600',
    imagePath: '/product-images/blue/main.png',
    price: 125.00,
    themeBgClass: 'bg-blue-100',
    themeButtonClass: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    themeTextClass: 'text-blue-600',
  },
  {
    id: 'shoe-green',
    colorName: 'Forest Green',
    colorValue: 'bg-green-600',
    imagePath: '/product-images/green/main.png',
    price: 115.00,
    themeBgClass: 'bg-green-100',
    themeButtonClass: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
    themeTextClass: 'text-green-600',
  },
  // Changed Black to Orange
  {
    id: 'shoe-orange', // Changed ID
    colorName: 'Sunset Orange', // Changed Name
    colorValue: 'bg-orange-500', // Changed Swatch Color
    imagePath: '/product-images/orange/main.png', // Changed Image Path
    price: 122.00, // Example price
    themeBgClass: orangeTheme.themeBgClass,
    themeButtonClass: orangeTheme.themeButtonClass,
    themeTextClass: orangeTheme.themeTextClass,
  },
];

export const defaultProduct: Product = { // Add type Product
    id: 'runners-delight-shoe', // Assign a unique ID
    name: "The Runner's Delight",
    description: "Experience unparalleled comfort and style with the Runner's Delight. Perfect for your daily runs or casual wear.",
    variations: productVariations // Combine variations here
}