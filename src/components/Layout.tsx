"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaYoutube, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="w-full bg-white text-black py-6 px-6 shadow-md md:py-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold cursor-pointer">
            <Image
              src="/Circular-Logo.png"
              alt="Zillionite Logo"
              width={80} // Original size
              height={80}
              className="inline-block"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="bg-[#663399] text-white px-6 py-3 rounded-md text-lg transition-all duration-300 hover:bg-[#4B0082]"
            >
              Lead
            </Link>
            <Link
              href="/zillionite"
              className="bg-[#663399] text-white px-6 py-3 rounded-md text-lg transition-all duration-300 hover:bg-[#4B0082]"
            >
              Zillionite
            </Link>
            <Link
              href="/books"
              className="bg-[#663399] text-white px-6 py-3 rounded-md text-lg transition-all duration-300 hover:bg-[#4B0082]"
            >
              Books
            </Link>
            <Link
              href="/connect"
              className="bg-[#663399] text-white px-6 py-3 rounded-md text-lg transition-all duration-300 hover:bg-[#4B0082]"
            >
              Connect
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center space-y-4">
            <Link
              href="/"
              onClick={toggleMenu}
              className="bg-[#663399] text-white w-full text-center px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#4B0082]"
            >
              Lead
            </Link>
            <Link
              href="/zillionite"
              onClick={toggleMenu}
              className="bg-[#663399] text-white w-full text-center px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#4B0082]"
            >
              Zillionite
            </Link>
            <Link
              href="/books"
              onClick={toggleMenu}
              className="bg-[#663399] text-white w-full text-center px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#4B0082]"
            >
              Books
            </Link>
            <Link
              href="/connect"
              onClick={toggleMenu}
              className="bg-[#663399] text-white w-full text-center px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#4B0082]"
            >
              Connect
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="w-full bg-white text-gray-800 py-6 mt-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between gap-8">
          {/* Video Section */}
          <div className="w-full md:w-[240px] h-[120px] relative overflow-hidden rounded-lg shadow-md">
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

          {/* Footer Links */}
          <div className="flex flex-col items-center md:items-start flex-1">
            <p className="text-sm font-medium mb-2">
              Copyright © All rights reserved.
            </p>

            <div className="flex space-x-6">
              <Link
                href="https://www.youtube.com/channel/UCZ9xEshbhWnyI7MgsfIKexA"
                target="_blank"
                className="text-gray-700 hover:text-[#663399] text-xl transition-colors"
              >
                <FaYoutube />
              </Link>
              <Link
                href="https://www.linkedin.com/company/zillionite/posts/"
                target="_blank"
                className="text-gray-700 hover:text-[#663399] text-xl transition-colors"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="mailto:lead@zillionite.com"
                className="text-gray-700 hover:text-[#663399] text-xl transition-colors"
              >
                <FaEnvelope />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
