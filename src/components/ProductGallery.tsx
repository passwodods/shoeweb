'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { ProductVariation, defaultProduct } from '@/data/productData';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // Re-add navigation styles
import 'swiper/css/pagination'; // Re-add pagination styles
// import required modules
import { Navigation, Pagination } from 'swiper/modules'; // Re-add Navigation and Pagination

// Import Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// Optional: Import lightbox plugins if needed (e.g., Zoom)
// import Zoom from "yet-another-react-lightbox/plugins/zoom";

interface ProductGalleryProps {
  selectedVariation: ProductVariation | undefined;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ selectedVariation }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const { allImagePaths, lightboxSlides } = useMemo(() => {
    if (!selectedVariation) {
      return { allImagePaths: [], lightboxSlides: [] };
    }

    const galleryImageCount = 4;
    const imageBaseName = selectedVariation.colorName.split(' ')[1]?.toLowerCase();
    if (!imageBaseName) return { allImagePaths: [], lightboxSlides: [] };

    const galleryImagePaths = Array.from({ length: galleryImageCount }, (_, i) =>
      `/product-images/${imageBaseName}/${imageBaseName}${i + 2}.png`
    );
    const paths = [selectedVariation.imagePath, ...galleryImagePaths];
    const slides = paths.map(src => ({ src }));

    return { allImagePaths: paths, lightboxSlides: slides };
  }, [selectedVariation]);


  if (!selectedVariation) {
    return null;
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-12 px-4"> {/* Using wider max-width for multi-slide view */}
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">More Views</h2>

      {/* Swiper Carousel - Manual Navigation */}
      <Swiper
        modules={[Navigation, Pagination]} // Use Navigation and Pagination
        spaceBetween={10}
        slidesPerView={3} // Default slides per view
        navigation // Enable navigation arrows
        pagination={{ clickable: true }} // Enable clickable pagination dots
        className="product-gallery-swiper mb-8"
        breakpoints={{
          640: { slidesPerView: 4, spaceBetween: 15 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
        key={selectedVariation.id} // Re-initialize swiper on variation change
      >
        {allImagePaths.map((path, index) => (
          <SwiperSlide key={`${path}-${index}`} onClick={() => openLightbox(index)} className="cursor-pointer">
            {/* Removed background, kept hover effect */}
            <div
              className="aspect-square overflow-hidden rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Image
                src={path}
                alt={`${selectedVariation.colorName} view ${index + 1}`}
                width={300}
                height={300}
                className="object-contain w-full h-full" // Ensure image fits container
                onError={(e) => {
                    const slideElement = e.currentTarget.closest('.swiper-slide');
                    if (slideElement) (slideElement as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

       {/* Product Description */}
       <div className="text-center text-gray-600 mt-6 px-4">
         <p>{defaultProduct.description}</p>
       </div>

      {/* Lightbox Component */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxIndex}
        // plugins={[Zoom]}
      />
       {/* Removed custom zoom CSS */}
    </div>
  );
};

export default ProductGallery;