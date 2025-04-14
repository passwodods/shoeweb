'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function PolicyPage() {
  const { themeBgClass } = useTheme();

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-8 pt-24 transition-colors duration-500 ease-in-out ${themeBgClass}`}
    >
      <div className="container mx-auto max-w-4xl bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl border border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-700">Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            At Runner's Delight, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you visit our website or make a purchase.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-700">Information We Collect</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Personal information you provide (name, email, address, etc.)</li>
            <li>Order and payment details</li>
            <li>Usage data (pages visited, time spent, etc.)</li>
            <li>Cookies and tracking technologies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-700">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>To process and fulfill your orders</li>
            <li>To communicate with you about your account or orders</li>
            <li>To improve our website and services</li>
            <li>To send promotional offers (with your consent)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-700">Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-700">Your Rights</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Access, update, or delete your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of your data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-700">Contact Us</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about this policy, please contact us at <a href="mailto:support@runnersdelight.com" className="underline hover:text-gray-800">support@runnersdelight.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}