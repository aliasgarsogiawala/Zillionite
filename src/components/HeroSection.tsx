"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-screen flex items-center justify-center md:justify-start bg-gradient-to-b from-[#D1B3FF] to-[#663399] text-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero-section.jpg"
          alt="Background"
          fill
          className="object-contain md:object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-16 flex justify-center md:justify-start">
        <div className="backdrop-blur-sm  p-4 md:p-8 rounded-2xl border border-white/10 w-full md:max-w-2xl text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight"
          >
            SHIELD <span className="text-[#663399]">BUILD LEAD</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-white/90"
          >
            Developing Leaders ... Leading Development
          </motion.p>
        </div>
      </div>
    </section>
  );
}
