'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { useCart } from '@/context/CartContext';

// Simple SVG Icons
const LockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v2H4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2h-2V6a4 4 0 00-4-4zm-2 6V6a2 2 0 114 0v2H8z" clipRule="evenodd" /></svg>;
const InfoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>;


export default function CheckoutPage() {
  const { themeBgClass, themeButtonClass } = useTheme();
  const { cartItems, totalPrice } = useCart();
  const [sameAsShipping, setSameAsShipping] = useState(true);

  // Placeholder shipping cost
  const shipping = cartItems.length > 0 ? 5.00 : 0;
  const finalTotal = totalPrice + shipping;

  const handlePlaceOrder = (event: React.FormEvent) => {
    event.preventDefault();
    // Placeholder for actual order submission logic
    alert('Order Placed (Placeholder)! Thank you for your purchase.');
    // Ideally, clear cart and redirect to a confirmation page here
  };

  if (cartItems.length === 0) {
    return (
      <main className={`flex min-h-screen flex-col items-center justify-center p-4 md:p-8 pt-24 ${themeBgClass}`}>
        <div className="text-center bg-white/90 p-10 rounded-lg shadow-xl border">
          <h1 className="text-2xl font-semibold mb-4 text-gray-700">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-6">You need items in your cart to proceed to checkout.</p>
          <Link href="/" className={`px-6 py-3 rounded-lg text-white font-semibold transition duration-300 ${themeButtonClass} shadow-md hover:shadow-lg`}>
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-4 md:p-8 pt-24 transition-colors duration-500 ease-in-out ${themeBgClass}`}
    >
      <div className="container mx-auto max-w-4xl bg-white/90 backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-xl border border-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Checkout</h1>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Left Column: Shipping & Billing */}
          <div className="md:col-span-2 space-y-8">
            {/* Shipping Address */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2 text-gray-700">Shipping Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5"> {/* Adjusted gaps */}
                {/* Form fields - simplified */}
                <div><label className="block text-sm font-medium text-gray-600">Full Name</label><input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" /></div>
                <div><label className="block text-sm font-medium text-gray-600">Email</label><input type="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" /></div>
                <div className="sm:col-span-2"><label className="block text-sm font-medium text-gray-600">Address</label><input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" /></div>
                <div><label className="block text-sm font-medium text-gray-600">City</label><input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" /></div>
                <div><label className="block text-sm font-medium text-gray-600">Postal Code</label><input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" /></div>
              </div>
            </section>

            {/* Billing Address */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2 text-gray-700">Billing Address</h2>
              <div className="flex items-center mb-4">
                <input
                  id="same-as-shipping"
                  type="checkbox"
                  checked={sameAsShipping}
                  onChange={(e) => setSameAsShipping(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="same-as-shipping" className="ml-2 block text-sm text-gray-900">Same as shipping address</label>
              </div>
              {!sameAsShipping && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5 p-4 border rounded-md bg-gray-50"> {/* Adjusted gaps */}
                  {/* Billing form fields - shown only if checkbox is unchecked */}
                   <div><label className="block text-sm font-medium text-gray-600">Full Name</label><input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" /></div>
                   <div className="sm:col-span-2"><label className="block text-sm font-medium text-gray-600">Address</label><input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" /></div>
                   <div><label className="block text-sm font-medium text-gray-600">City</label><input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" /></div>
                   <div><label className="block text-sm font-medium text-gray-600">Postal Code</label><input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" /></div>
                </div>
              )}
            </section>

             {/* Payment Details */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2 text-gray-700">Payment Details</h2>
               <p className="text-sm text-gray-500 mb-4 flex items-center"><InfoIcon /> This is a placeholder. No real payment will be processed.</p>
              <div className="space-y-5"> {/* Increased spacing */}
                 {/* Placeholder for Credit Card fields */}
                 <div><label className="block text-sm font-medium text-gray-600">Card Number</label><input type="text" placeholder="**** **** **** ****" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" /></div>
                 <div className="grid grid-cols-2 gap-x-4 gap-y-5"> {/* Adjusted gaps */}
                    <div><label className="block text-sm font-medium text-gray-600">Expiry Date (MM/YY)</label><input type="text" placeholder="MM/YY" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" /></div>
                    <div><label className="block text-sm font-medium text-gray-600">CVC</label><input type="text" placeholder="***" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" /></div>
                 </div>
              </div>
            </section>
          </div>

          {/* Right Column: Order Summary */}
          <div className="md:col-span-1 bg-gray-50 p-6 rounded-lg shadow-inner border h-fit sticky top-24"> {/* Make summary sticky */}
            <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Order Summary</h2>
            <div className="space-y-3 mb-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">{item.colorName} (x{item.quantity})</span>
                  <span className="font-medium text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
             <div className="space-y-2 text-lg mb-6 text-gray-700 border-t pt-4">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-xl border-t pt-3 mt-3 text-gray-900">
                  <span>Total:</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            <button
              type="submit"
              className={`w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white transition duration-300 ${themeButtonClass} focus:outline-none focus:ring-2 focus:ring-offset-2`}
            >
              <LockIcon /> Place Order (Placeholder)
            </button>
          </div>

        </form>
      </div>
    </main>
  );
}