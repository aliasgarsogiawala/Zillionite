"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-[#D1B3FF] to-[#663399] text-white">
      <div className="absolute inset-0">
        <Image
          src="/HeroSection.JPG"
          alt="Background"
          fill
          className="opacity-90 object-cover"
          priority
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          SHIELD  <span className="text-[#663399]">BUILD LEAD</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-lg md:text-xl text-white/80"
        >
         Developing Leaders ... Leading Development
        </motion.p>

        {/* Call-to-Action Button */}
        
      </div>
    </section>
  );
}
