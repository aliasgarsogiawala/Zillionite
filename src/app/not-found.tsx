import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-[#663399] text-center">
        <div className="mb-6">
          <Image 
            src="/Circular-Logo.png" 
            alt="Zillionite Logo" 
            width={80} 
            height={80} 
            className="mx-auto"
          />
        </div>
        
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-500 mb-4">
          Page Not Found
        </h1>
        
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          href="/" 
          className="inline-block px-8 py-3 bg-gradient-to-r from-[#663399] to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-300/50 transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}