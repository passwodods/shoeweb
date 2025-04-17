'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const features = [
  {
    title: 'Lightweight Design',
    description: 'Engineered for speed and comfort, reducing fatigue on long runs.',
    icon: '🌬️', // Example icon
  },
  {
    title: 'Responsive Cushioning',
    description: 'Advanced foam technology provides optimal energy return with every stride.',
    icon: '⚡', // Example icon
  },
  {
    title: 'Durable Outsole',
    description: 'High-abrasion rubber ensures long-lasting grip and performance.',
    icon: '🛡️', // Example icon
  },
  {
    title: 'Breathable Upper',
    description: 'Mesh construction keeps your feet cool and dry, even during intense workouts.',
    icon: '💨', // Example icon
  },
];

const KeyFeatures: React.FC = () => {
  const { themeTextClass } = useTheme();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${themeTextClass}`}>Why Runner&apos;s Delight?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;