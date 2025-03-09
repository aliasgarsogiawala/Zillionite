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
      <nav className="w-full bg-white text-black py-6 px-6 shadow-md md:py-8 relative z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Circular-Logo.png"
              alt="Zillionite Logo"
              width={80}
              height={80}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["/", "/zillionite", "/books", "/connect"].map((path, idx) => (
              <Link
                key={idx}
                href={path}
                className="bg-[#663399] text-white px-6 py-3 rounded-md text-lg transition-all duration-300 hover:bg-[#4B0082]"
              >
                {["Lead", "Zillionite", "Books", "Connect"][idx]}
              </Link>
            ))}
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden z-50">
            {!menuOpen && (
              <button onClick={toggleMenu} aria-label="Open Menu">
                <FaBars size={28} />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } z-40 flex flex-col p-6`}
        >
          <button
            className="self-end text-gray-800 hover:text-[#663399] transition"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <FaTimes size={28} />
          </button>

          <div className="flex flex-col mt-12 space-y-6">
            {["/", "/zillionite", "/books", "/connect"].map((path, idx) => (
              <Link
                key={idx}
                href={path}
                onClick={toggleMenu}
                className="bg-[#663399] text-white text-lg font-semibold py-3 rounded-md text-center hover:bg-[#4B0082] transition-all duration-300 shadow"
              >
                {["Lead", "Zillionite", "Books", "Connect"][idx]}
              </Link>
            ))}
          </div>
        </div>

        {/* Backdrop */}
        {menuOpen && (
          <div
            onClick={toggleMenu}
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-30"
          />
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="w-full bg-white text-gray-800 py-6 border-t border-gray-200 mt-auto">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Video Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/Circular-Logo.png"
                alt="Zillionite Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Footer Video */}
            <div className="w-full md:w-[280px] h-[140px] relative overflow-hidden rounded-lg shadow-md">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover bg-gray-50"
              >
                <source src="/footer-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Copyright & Socials */}
          <div className="flex flex-col items-center md:items-end w-full md:w-auto">
            <p className="text-sm font-medium text-center md:text-right mb-2 md:mb-0">
              © {new Date().getFullYear()} Zillionite. All rights reserved.
            </p>

            <div className="flex justify-center space-x-6">
              <Link href="https://www.youtube.com/channel/UCZ9xEshbhWnyI7MgsfIKexA" target="_blank">
                <FaYoutube className="text-gray-700 hover:text-[#663399] text-xl transition-colors" />
              </Link>
              <Link href="https://www.linkedin.com/company/zillionite/posts/" target="_blank">
                <FaLinkedin className="text-gray-700 hover:text-[#663399] text-xl transition-colors" />
              </Link>
              <Link href="mailto:lead@zillionite.com">
                <FaEnvelope className="text-gray-700 hover:text-[#663399] text-xl transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
