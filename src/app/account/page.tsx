'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function AccountPage() {
  const { themeBgClass, themeButtonClass } = useTheme();

  // Placeholder data - replace with actual user data later
  const user = {
    name: 'Alex Runner',
    email: 'alex.runner@example.com',
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-8 pt-24 transition-colors duration-500 ease-in-out ${themeBgClass}`}
    >
      <div className="container mx-auto max-w-4xl bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl border border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">My Account</h1>

        {/* Profile Section */}
        <section className="mb-10 border-b border-gray-300 pb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">Profile Information</h2>
          <div className="space-y-3 text-lg text-gray-600">
            <p><span className="font-medium text-gray-800">Name:</span> {user.name}</p>
            <p><span className="font-medium text-gray-800">Email:</span> {user.email}</p>
          </div>
          <button className={`mt-4 px-4 py-2 rounded text-white transition duration-300 ${themeButtonClass}`}>
            Edit Profile
          </button>
        </section>

        {/* Order History Section */}
        <section className="mb-10 border-b border-gray-300 pb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">Order History</h2>
          <p className="text-lg text-gray-600 italic">
            You have no recent orders. (Placeholder)
          </p>
          <button className={`mt-4 px-4 py-2 rounded text-white transition duration-300 ${themeButtonClass}`}>
            View All Orders
          </button>
        </section>

        {/* Settings Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">Account Settings</h2>
          <button className={`mt-4 px-4 py-2 rounded text-white transition duration-300 ${themeButtonClass}`}>
            Change Password
          </button>
        </section>
      </div>
    </main>
  );
}