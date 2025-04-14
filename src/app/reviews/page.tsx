'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

// Placeholder review data
const reviews = [
  {
    id: 1,
    author: 'Sarah K.',
    rating: 5,
    title: 'Best Running Shoes Ever!',
    text: 'These shoes are incredibly comfortable and responsive. I feel like I\'m running on clouds! Highly recommend.',
    date: 'April 10, 2025',
  },
  {
    id: 2,
    author: 'Mike R.',
    rating: 4,
    title: 'Great Shoe, Very Stylish',
    text: 'Love the look and feel. They provide good support for my daily runs. Only downside is they run slightly narrow.',
    date: 'April 5, 2025',
  },
  {
    id: 3,
    author: 'Jessica L.',
    rating: 5,
    title: 'Amazing Comfort and Performance',
    text: 'Perfect fit right out of the box. The cushioning is fantastic, and they look sharp too. Worth every penny.',
    date: 'March 28, 2025',
  },
];

export default function ReviewsPage() {
  const { themeBgClass } = useTheme();

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-8 pt-24 transition-colors duration-500 ease-in-out ${themeBgClass}`}
    >
      <div className="container mx-auto max-w-4xl bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl border border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">Customer Reviews</h1>

        <div className="space-y-8">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-300 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{review.title}</h3>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <div className="flex items-center mb-2">
                  {/* Simple Star Rating Placeholder */}
                  <span className="text-yellow-500 mr-1">{'★'.repeat(review.rating)}</span>
                  <span className="text-gray-400">{'★'.repeat(5 - review.rating)}</span>
                  <span className="ml-3 font-medium text-gray-700">{review.author}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{review.text}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-lg text-gray-600 italic">No reviews yet. Be the first!</p>
          )}
        </div>

        {/* Optional: Add a "Write a Review" button/form later */}

      </div>
    </main>
  );
}