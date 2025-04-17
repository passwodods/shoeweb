import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { ProductVariation } from '@/data/productData'; // Import ProductVariation type

interface TechnologySectionProps {
  selectedVariation: ProductVariation | undefined; // Add prop for selected variation
}

const TechnologySection: React.FC<TechnologySectionProps> = ({ selectedVariation }) => {
  const { themeTextClass } = useTheme();

  return (
    <section className="py-16 md:py-24 bg-white"> {/* White or light gray background */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${themeTextClass}`}>
              Engineered for Performance
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              The Runner&apos;s Delight features our revolutionary <strong className="text-gray-800">CloudStep™</strong> cushioning technology. This proprietary foam blend provides exceptional energy return while remaining incredibly lightweight, reducing impact and fatigue mile after mile.
            </p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              The upper is crafted from <strong className="text-gray-800">AeroMesh™</strong>, a highly breathable and adaptive material that conforms to your foot shape for a sock-like fit, ensuring maximum ventilation and comfort during intense runs.
            </p>
             <p className="text-lg text-gray-600 leading-relaxed">
              Our durable <strong className="text-gray-800">GripMax™</strong> outsole uses a multi-directional lug pattern, offering superior traction and stability on various surfaces, wet or dry.
            </p>
          </div>

          {/* Image (Optional Placeholder) */}
          <div className="order-1 md:order-2 relative aspect-video md:aspect-square rounded-lg overflow-hidden shadow-lg">
            {/* Use image from selected variation */}
            <Image
              // Use optional chaining in case selectedVariation is undefined initially
              src={selectedVariation?.imagePath || "/product-images/red/main.png"} // Fallback to red if undefined
              alt={`Runner's Delight Shoe Technology - ${selectedVariation?.colorName || 'Default'}`} // Dynamic alt text
              fill
              style={{ objectFit: 'cover' }}
              className="bg-gray-100" // Lighter background while loading
            />
             {/* Optional: Remove the overlay text if the image is sufficient */}
             {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <span className="text-white text-xl font-semibold">(Technology Image Placeholder)</span>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologySection;