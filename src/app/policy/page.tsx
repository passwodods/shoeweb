'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

// Simple SVG Icons
const IntroIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CollectIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
const UseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const SecurityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const RightsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>;
const ContactIconPolicy = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;


export default function PolicyPage() {
  const { themeBgClass } = useTheme();

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-4 md:p-8 pt-24 transition-colors duration-500 ease-in-out ${themeBgClass}`}
    >
      <div className="container mx-auto max-w-4xl bg-white/90 backdrop-blur-sm p-6 md:p-12 rounded-lg shadow-xl border border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-800">Privacy Policy</h1>

        <section className="mb-10">
          <h2 className="flex items-center text-2xl font-semibold mb-4 text-gray-700">
            <IntroIcon /> Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed pl-8">
            At Runner&apos;s Delight, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you visit our website or make a purchase.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="flex items-center text-2xl font-semibold mb-4 text-gray-700">
            <CollectIcon /> Information We Collect
          </h2>
          <ul className="list-disc pl-12 text-gray-600 space-y-2 leading-relaxed">
            <li>Personal information you provide (name, email, address, etc.)</li>
            <li>Order and payment details</li>
            <li>Usage data (pages visited, time spent, etc.)</li>
            <li>Cookies and tracking technologies</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="flex items-center text-2xl font-semibold mb-4 text-gray-700">
            <UseIcon /> How We Use Your Information
          </h2>
          <ul className="list-disc pl-12 text-gray-600 space-y-2 leading-relaxed">
            <li>To process and fulfill your orders</li>
            <li>To communicate with you about your account or orders</li>
            <li>To improve our website and services</li>
            <li>To send promotional offers (with your consent)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="flex items-center text-2xl font-semibold mb-4 text-gray-700">
            <SecurityIcon /> Data Security
          </h2>
          <p className="text-gray-600 leading-relaxed pl-8">
            We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="flex items-center text-2xl font-semibold mb-4 text-gray-700">
            <RightsIcon /> Your Rights
          </h2>
          <ul className="list-disc pl-12 text-gray-600 space-y-2 leading-relaxed">
            <li>Access, update, or delete your personal information</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of your data</li>
          </ul>
        </section>

        <section>
          <h2 className="flex items-center text-2xl font-semibold mb-4 text-gray-700">
            <ContactIconPolicy /> Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed pl-8">
            If you have any questions about this policy, please contact us at <a href="mailto:support@runnersdelight.com" className="font-medium underline hover:text-gray-800">support@runnersdelight.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}