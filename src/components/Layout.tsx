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
          
        </div>
      </nav>

      <main className="flex-grow">{children}</main>

      
      <footer className="w-full bg-[#D1B3FF] text-black py-6 mt-12">
      <div className="flex justify-center space-x-6">
            <Link href="/" className="bg-[#663399] text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#4B0082]">Lead</Link>
            <Link href="/zillionite" className="bg-[#663399] text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#4B0082]">Zillionite</Link>
            <Link href="/books" className="bg-[#663399] text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#4B0082]">Books</Link>
            <Link href="#" className="bg-[#663399] text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#4B0082]">Connect</Link>
          </div>
        <div className="container mx-auto text-center">
          <p>Copyright © All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="https://www.youtube.com/channel/UCZ9xEshbhWnyI7MgsfIKexA" target="_blank" className="text-black-400 hover:text-white text-2xl">
              <FaYoutube />
            </Link>
            <Link href="https://www.linkedin.com/company/zillionite/posts/" target="_blank" className="text-black-400 hover:text-white text-2xl">
              <FaLinkedin />
            </Link>
            <Link href="mailto:lead@zillionite.com" className="text-black-400 hover:text-white text-2xl">
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
