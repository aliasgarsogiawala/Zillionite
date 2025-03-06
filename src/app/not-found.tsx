'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

// Remove dynamic and fetchCache exports, set revalidate to a number
export const revalidate = 0;

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-[#663399] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you are looking for does not exist or has been moved.</p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#663399] to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-300/50 transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}