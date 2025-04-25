'use client';

import React, { useState } from 'react'; // Import useState
import { useTheme } from '@/context/ThemeContext';

// Simple SVG Icons
const ContactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" /></svg>;
const MessageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;


export default function ContactPage() {
  const { themeBgClass, themeButtonClass } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setStatusMessage(result.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus('error');
        setStatusMessage(result.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatus('error');
      setStatusMessage('A network error occurred. Please try again.');
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-4 md:p-8 pt-24 transition-colors duration-500 ease-in-out ${themeBgClass}`}
    >
      <div className="container mx-auto max-w-2xl bg-white/90 backdrop-blur-sm p-6 md:p-12 rounded-lg shadow-xl border border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center">
          <ContactIcon /> Contact Us
        </h1>

        <p className="text-lg text-center text-gray-600 mb-10">
          Have questions or feedback? Fill out the form below, and we&apos;ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
               <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                 <UserIcon />
               </div>
               <input
                 type="text"
                 id="name"
                 name="name"
                 required
                 value={formData.name} // Bind value
                 onChange={handleInputChange} // Add onChange
                 className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2"
                 placeholder="Your Name"
               />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
             <div className="relative mt-1 rounded-md shadow-sm">
               <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                 <EmailIcon />
               </div>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email} // Bind value
                onChange={handleInputChange} // Add onChange
                className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
             <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute top-3 left-0 flex items-center pl-3">
                 <MessageIcon />
               </div>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message} // Bind value
                onChange={handleInputChange} // Add onChange
                className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2"
                placeholder="Your message..."
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className={`w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white transition duration-300 ${themeButtonClass} focus:outline-none focus:ring-2 focus:ring-offset-2 ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={status === 'loading'} // Disable button when loading
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>

        {/* Status Message Display */}
        {statusMessage && (
          <div className={`mt-4 text-center p-3 rounded-md ${status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {statusMessage}
          </div>
        )}

        <div className="mt-12 text-center text-gray-600 border-t pt-6">
            <p>Or email us directly at: <a href="mailto:support@runnersdelight.com" className="font-medium underline hover:text-gray-800">support@runnersdelight.com</a></p>
        </div>
      </div>
    </main>
  );
}