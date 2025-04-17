'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

// Simple SVG Icons
const ReviewsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>;
const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 inline-block ${filled ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Placeholder Review Data
const reviews = [
  { id: 1, name: 'Sarah K.', rating: 5, comment: "Absolutely love these shoes! So comfortable and stylish. Perfect for my morning runs.", date: "April 10, 2025" },
  { id: 2, name: 'Mike R.', rating: 4, comment: "Great support and cushioning. They feel light on my feet. Only downside is they run slightly narrow.", date: "April 5, 2025" },
  { id: 3, name: 'Jessica L.', rating: 5, comment: "Best running shoes I've ever owned. The color options are fantastic too!", date: "March 28, 2025" },
];

export default function ReviewsPage() {
  const { themeBgClass, themeButtonClass } = useTheme();

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-4 md:p-8 pt-24 transition-colors duration-500 ease-in-out ${themeBgClass}`}
    >
      <div className="container mx-auto max-w-4xl bg-white/90 backdrop-blur-sm p-6 md:p-12 rounded-lg shadow-xl border border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-800 flex items-center justify-center">
          <ReviewsIcon /> Customer Reviews
        </h1>

        {/* Review List */}
        <div className="space-y-8 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
              <div className="flex items-center mb-2">
                <div className="flex mr-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < review.rating} />
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
              </div>
              <p className="text-gray-600 italic mb-3">&quot;{review.comment}&quot;</p>
              <p className="text-xs text-gray-400 text-right">Posted on {review.date}</p>
            </div>
          ))}
        </div>

        {/* Leave a Review Section */}
        <div className="text-center border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Share Your Experience!</h2>
          <p className="text-gray-600 mb-6">We&apos;d love to hear what you think about the Runner&apos;s Delight shoes.</p>
          {/* Link to contact page as a placeholder for a review form */}
          <Link href="/contact" className={`inline-block px-6 py-3 rounded-lg text-white font-semibold transition duration-300 ${themeButtonClass} shadow-md hover:shadow-lg transform hover:scale-105`}>
            Leave a Review
          </Link>
        </div>
      </div>
    </main>
  );
}