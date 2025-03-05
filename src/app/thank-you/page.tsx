"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

import { useIsClient } from '../utils/client';

export default function ThankYou() {
  const isClient = useIsClient();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {isClient ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-[#663399] text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mx-auto h-24 w-24 bg-purple-100 rounded-full flex items-center justify-center mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#663399]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          
          {/* Rest of your motion components */}
        </motion.div>
      ) : (
        // Static fallback for server-side rendering
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-[#663399] text-center">
          <div className="mx-auto h-24 w-24 bg-purple-100 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#663399]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-500 mb-4">
            Thank You!
          </h1>
          
          <p className="text-gray-600 text-lg mb-8">
            We&apos;ve received your information and will be in touch soon. We&apos;re excited to embark on this leadership journey with you!
          </p>
          
          <div>
            <Link href="/" className="inline-block px-8 py-3 bg-gradient-to-r from-[#663399] to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-300/50 transition-all duration-300 transform hover:translate-y-[-2px]">
              Back to Home
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-gray-500">
            Feel free to explore more of our services while you wait to hear from us.
          </p>
        </div>
      )}
    </div>
  );
}