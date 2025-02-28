import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <nav className="w-full bg-[#00000] text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold cursor-pointer">
            <Image src="/Circular-Logo.png" alt="Zillionite Logo" width={70} height={70} className="inline-block" />
          </Link>
          <div className="flex justify-center space-x-6">
            <Link href="/" className="bg-[#663399] text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#4B0082]">Lead</Link>
            <Link href="/zillionite" className="bg-[#663399] text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#4B0082]">Zillionite</Link>
            <Link href="/books" className="bg-[#663399] text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#4B0082]">Books</Link>
            <Link href="/connect" className="bg-[#663399] text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#4B0082]">Connect</Link>
          </div>
          
        </div>
        
      </nav>

      <main className="flex-grow">{children}</main>

      <footer className="w-full bg-[white] text-gray-800 py-2 mt-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-20">
            <div className="w-[240px] h-[120px] relative overflow-hidden rounded-lg shadow-md">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-contain bg-gray-50"
              >
                <source src="/footer-video.mp4" type="video/mp4" />
              </video>
            </div>
            
            <div className="flex-1 flex flex-col items-center mr-[240px]">
              <p className="text-sm font-medium">Copyright © All rights reserved.</p>
              <div className="flex space-x-6 mt-1">
                <Link href="https://www.youtube.com/channel/UCZ9xEshbhWnyI7MgsfIKexA" target="_blank" className="text-gray-700 hover:text-[#663399] text-xl transition-colors">
                  <FaYoutube />
                </Link>
                <Link href="https://www.linkedin.com/company/zillionite/posts/" target="_blank" className="text-gray-700 hover:text-[#663399] text-xl transition-colors">
                  <FaLinkedin />
                </Link>
                <Link href="mailto:lead@zillionite.com" className="text-gray-700 hover:text-[#663399] text-xl transition-colors">
                  <FaEnvelope />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
