'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { useCart, CartItem } from '@/context/CartContext'; // Import useCart and CartItem

export default function CartPage() {
  const { themeBgClass, themeButtonClass } = useTheme();
  // Get cart state and actions from CartContext
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  // Placeholder for shipping cost - could be dynamic later
  const shipping = cartItems.length > 0 ? 5.00 : 0;
  const finalTotal = totalPrice + shipping;

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-4 md:p-8 pt-24 transition-colors duration-500 ease-in-out ${themeBgClass}`}
    >
      <div className="container mx-auto max-w-4xl bg-white/90 backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-xl border border-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600 mb-6">Your cart is currently empty.</p>
            <Link href="/" className={`px-6 py-3 rounded-lg text-white font-semibold transition duration-300 ${themeButtonClass} shadow-md hover:shadow-lg transform hover:scale-105`}>
                Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items List (Left/Main Column) */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 border-b pb-4 last:border-b-0">
                  <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={item.imagePath}
                      alt={item.colorName}
                      fill
                      sizes="80px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800">The Runner&apos;s Delight</h3>
                    <p className="text-sm text-gray-500">{item.colorName}</p>
                    <p className="text-md font-medium text-gray-900">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-100"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-100"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700 transition-colors"
                    aria-label="Remove item"
                  >
                    ✕
                  </button>
                </div>
              ))}
               <button
                  onClick={clearCart}
                  className="mt-4 text-sm text-gray-500 hover:text-red-600 transition-colors underline"
                >
                  Clear Cart
                </button>
            </div>

            {/* Cart Summary (Right Column) */}
            <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow-inner border h-fit sticky top-24">
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-800">Summary</h2>
              <div className="space-y-2 text-lg mb-6 text-gray-700">
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
              {/* Link to a future checkout page */}
              <Link href="/checkout" className={`block w-full text-center px-6 py-3 rounded-lg text-white font-bold transition duration-300 ${themeButtonClass} shadow-md hover:shadow-lg transform hover:scale-105`}>
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}