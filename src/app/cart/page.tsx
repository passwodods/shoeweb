'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link'; // For linking back to products or checkout

export default function CartPage() {
  const { themeBgClass, themeButtonClass } = useTheme(); // Get theme classes

  // Placeholder for cart items - replace with actual cart state later
  const cartItems: any[] = []; // Empty cart for now
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cartItems.length > 0 ? 5.00 : 0; // Example shipping cost
  const total = subtotal + shipping;

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-8 pt-24 transition-colors duration-500 ease-in-out ${themeBgClass}`}
    >
      <div className="container mx-auto max-w-4xl bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl border border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600 mb-4">Your cart is currently empty.</p>
            <Link href="/" className={`px-6 py-2 rounded text-white transition duration-300 ${themeButtonClass}`}>
                Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart Items List (Left/Main Column) */}
            <div className="md:col-span-2 space-y-4">
              {/* Placeholder for cart item component loop */}
              {/* Example structure for one item: */}
              {/* <div className="flex items-center justify-between border-b pb-4"> */}
              {/*   <div className="flex items-center space-x-4"> */}
              {/*     <Image src="/path/to/image.png" alt="Product" width={80} height={80} className="rounded" /> */}
              {/*     <div> */}
              {/*       <h3 className="font-semibold">Product Name</h3> */}
              {/*       <p className="text-sm text-gray-500">Color: Red</p> */}
              {/*       <button className="text-red-500 text-sm hover:underline">Remove</button> */}
              {/*     </div> */}
              {/*   </div> */}
              {/*   <div className="flex items-center space-x-3"> */}
              {/*     <input type="number" value="1" className="w-16 border rounded px-2 py-1 text-center" /> */}
              {/*     <p className="font-semibold">$120.00</p> */}
              {/*   </div> */}
              {/* </div> */}
              <p className="text-center italic text-gray-500">(Cart item display area)</p>
            </div>

            {/* Cart Summary (Right Column) */}
            <div className="md:col-span-1 bg-gray-50 p-6 rounded-lg shadow-inner border">
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Summary</h2>
              <div className="space-y-2 text-lg mb-6">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-xl border-t pt-2 mt-2">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button className={`w-full px-6 py-3 rounded text-white font-bold transition duration-300 ${themeButtonClass}`}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}