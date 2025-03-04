"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-500 mb-4"
        >
          Thank You!
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-gray-600 text-lg mb-8"
        >
          We've received your information and will be in touch soon. We're excited to embark on this leadership journey with you!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <Link href="/" className="inline-block px-8 py-3 bg-gradient-to-r from-[#663399] to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-300/50 transition-all duration-300 transform hover:translate-y-[-2px]">
            Back to Home
          </Link>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mt-6 text-sm text-gray-500"
        >
          Feel free to explore more of our services while you wait to hear from us.
        </motion.p>
      </motion.div>
    </div>
  );
}