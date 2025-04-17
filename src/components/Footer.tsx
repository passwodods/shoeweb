import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Shoe Store</h3>
            <p className="text-sm">
              Your destination for the latest and greatest running shoes. Comfort, style, and performance delivered.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
            </ul>
          </div>

          {/* Contact Info (Placeholder) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
            <p className="text-sm mb-1">Email: <a href="mailto:support@runnersdelight.com" className="hover:text-white transition-colors">support@runnersdelight.com</a></p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            {/* Add Social Media Links here later if needed */}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {currentYear} Shoe Store. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;