'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Import both Product and ProductVariation
import { Product, ProductVariation } from '@/data/productData';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Find the default variation (or the first one if none is marked default)
  // Add type ProductVariation to 'v'
  const defaultVariation = product.variations.find((v: ProductVariation) => v.isDefault) || product.variations[0];

  if (!defaultVariation) {
    return <div className="text-red-500">Error: No product variation found.</div>;
  }

  return (
    <Link href={`/product/${product.id}`} className="group block border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          // Use imagePath instead of images.main
          src={defaultVariation.imagePath}
          alt={`${product.name} - ${defaultVariation.colorName}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{defaultVariation.colorName}</p>
        <p className="text-xl font-bold text-gray-900">${defaultVariation.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;