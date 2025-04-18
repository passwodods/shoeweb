'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

// Simple SVG Icons
const ProfileIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const OrdersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>;
const SettingsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;


export default function AccountPage() {
  const { themeBgClass, themeButtonClass } = useTheme();

  // Placeholder data - replace with actual user data later
  const user = {
    name: 'Alex Runner',
    email: 'alex.runner@example.com',
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-4 md:p-8 pt-24 transition-colors duration-500 ease-in-out ${themeBgClass}`}
    >
      <div className="container mx-auto max-w-4xl bg-white/90 backdrop-blur-sm p-6 md:p-12 rounded-lg shadow-xl border border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-800">My Account</h1>

        {/* Profile Section */}
        <section className="mb-10 border-b border-gray-200 pb-8">
          <h2 className="flex items-center text-2xl md:text-3xl font-semibold mb-5 text-gray-700">
            <ProfileIcon /> Profile Information
          </h2>
          <div className="space-y-3 text-lg text-gray-600 pl-8">
            <p><span className="font-medium text-gray-800 w-20 inline-block">Name:</span> {user.name}</p>
            <p><span className="font-medium text-gray-800 w-20 inline-block">Email:</span> {user.email}</p>
          </div>
          <button
            onClick={() => alert('Edit Profile clicked (Placeholder)')}
            className={`mt-6 ml-8 px-5 py-2 rounded-md text-white text-sm font-medium transition duration-300 shadow-sm hover:shadow-md ${themeButtonClass}`}
          >
            Edit Profile
          </button>
        </section>

        {/* Order History Section */}
        <section className="mb-10 border-b border-gray-200 pb-8">
          <h2 className="flex items-center text-2xl md:text-3xl font-semibold mb-5 text-gray-700">
            <OrdersIcon /> Order History
          </h2>
          <div className="pl-8">
            <p className="text-lg text-gray-600 italic mb-4">
              You have no recent orders. (Placeholder)
            </p>
            <button
              onClick={() => alert('View All Orders clicked (Placeholder)')}
              className={`px-5 py-2 rounded-md text-white text-sm font-medium transition duration-300 shadow-sm hover:shadow-md ${themeButtonClass}`}
            >
              View All Orders
            </button>
          </div>
        </section>

        {/* Settings Section */}
        <section>
          <h2 className="flex items-center text-2xl md:text-3xl font-semibold mb-5 text-gray-700">
            <SettingsIcon /> Account Settings
          </h2>
          <div className="pl-8">
            <button
              onClick={() => alert('Change Password clicked (Placeholder)')}
              className={`px-5 py-2 rounded-md text-white text-sm font-medium transition duration-300 shadow-sm hover:shadow-md ${themeButtonClass}`}
            >
              Change Password
            </button>
            {/* Add more settings options here later */}
          </div>
        </section>
      </div>
    </main>
  );
}