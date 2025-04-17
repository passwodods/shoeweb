'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function AboutPage() {
  const { themeBgClass } = useTheme();

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-8 pt-24 transition-colors duration-500 ease-in-out ${themeBgClass}`}
    >
      <div className="container mx-auto max-w-4xl bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl border border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">About Runner&apos;s Delight</h1>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Founded by passionate runners, Runner&apos;s Delight started with a simple mission: to create the perfect running shoe. We spent years researching materials, biomechanics, and design aesthetics to craft footwear that not only performs exceptionally but also looks great. We believe that the right shoe can elevate your run, boost your confidence, and make every mile enjoyable.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            From humble beginnings in a small workshop, we&apos;ve grown into a dedicated team committed to innovation and quality. Every pair of Runner&apos;s Delight shoes is a testament to our dedication to the running community.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission is to empower runners of all levels by providing high-quality, comfortable, and stylish footwear. We strive to innovate continuously, ensuring our products meet the evolving needs of athletes while maintaining sustainable and ethical practices. We aim to be more than just a shoe company; we want to be a trusted partner in your running journey.
          </p>
        </section>
      </div>
    </main>
  );
}