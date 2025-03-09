"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] min-h-screen flex items-center justify-start bg-gradient-to-b from-[#D1B3FF] to-[#663399] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero-section.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full px-6 md:px-16">
        <div className="backdrop-blur-sm bg-black/20 p-6 md:p-8 rounded-2xl border border-white/10 w-full md:max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-left"
          >
            SHIELD <span className="text-[#663399]">BUILD LEAD</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-white/90 text-left"
          >
            Developing Leaders ... Leading Development
          </motion.p>
        </div>
      </div>
    </section>
  );
}
