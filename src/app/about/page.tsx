'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

// Simple SVG Icons (replace with better ones if desired)
const StoryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const MissionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;


export default function AboutPage() {
  const { themeBgClass } = useTheme();

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-4 md:p-8 pt-24 transition-colors duration-500 ease-in-out ${themeBgClass}`}
    >
      <div className="container mx-auto max-w-4xl bg-white/90 backdrop-blur-sm p-6 md:p-12 rounded-lg shadow-xl border border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-800">About Runner&apos;s Delight</h1>

        <section className="mb-12">
          <h2 className="flex items-center text-2xl md:text-3xl font-semibold mb-5 text-gray-700">
            <StoryIcon /> Our Story
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4 pl-8">
            Founded by passionate runners, Runner&apos;s Delight started with a simple mission: to create the perfect running shoe. We spent years researching materials, biomechanics, and design aesthetics to craft footwear that not only performs exceptionally but also looks great. We believe that the right shoe can elevate your run, boost your confidence, and make every mile enjoyable.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed pl-8">
            From humble beginnings in a small workshop, we&apos;ve grown into a dedicated team committed to innovation and quality. Every pair of Runner&apos;s Delight shoes is a testament to our dedication to the running community.
          </p>
        </section>

        <section>
          <h2 className="flex items-center text-2xl md:text-3xl font-semibold mb-5 text-gray-700">
             <MissionIcon /> Our Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed pl-8">
            Our mission is to empower runners of all levels by providing high-quality, comfortable, and stylish footwear. We strive to innovate continuously, ensuring our products meet the evolving needs of athletes while maintaining sustainable and ethical practices. We aim to be more than just a shoe company; we want to be a trusted partner in your running journey.
          </p>
        </section>

        {/* Blog Section Placeholder */}
        <section className="mt-12 border-t pt-10">
           <h2 className="flex items-center text-2xl md:text-3xl font-semibold mb-5 text-gray-700">
             {/* Placeholder Icon */}
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
             From the Blog
           </h2>
           <div className="space-y-4 pl-8">
             <div className="border-l-4 border-gray-300 pl-4 mb-4">
                <h3 className="text-xl font-medium text-gray-800 hover:text-gray-600 cursor-pointer">Choosing the Right Running Shoe for Your Gait</h3>
                <p className="text-sm text-gray-500 mb-1">April 15, 2025</p>
                <p className="text-gray-600 text-sm">Understanding pronation and supination is key... (Placeholder content)</p>
             </div>
              <div className="border-l-4 border-gray-300 pl-4 mb-4">
                <h3 className="text-xl font-medium text-gray-800 hover:text-gray-600 cursor-pointer">5 Tips for Preventing Running Injuries</h3>
                <p className="text-sm text-gray-500 mb-1">April 1, 2025</p>
                <p className="text-gray-600 text-sm">Proper warm-ups, stretching, and listening to your body are crucial... (Placeholder content)</p>
             </div>
              <div className="border-l-4 border-gray-300 pl-4 mb-4">
                <h3 className="text-xl font-medium text-gray-800 hover:text-gray-600 cursor-pointer">Fueling Your Run: Pre- and Post-Workout Nutrition</h3>
                <p className="text-sm text-gray-500 mb-1">March 20, 2025</p>
                <p className="text-gray-600 text-sm">Learn what to eat before and after your runs for optimal performance and recovery... (Placeholder content)</p>
             </div>
             {/* Add more placeholder posts or a link to a full blog page */}
           </div>
        </section>
      </div>
    </main>
  );
}