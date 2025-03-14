"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-start bg-white text-[#663399]">
      <div className="w-full relative h-[80vh] md:h-screen border-b-2 border-[#663399]">
        <Image
          src="/hero-section.jpg"
          alt="Leadership Hero"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        
        {/* Mobile overlay */}
        <div className="absolute inset-0 flex items-center justify-center md:hidden">
          <div className="backdrop-blur-md bg-white/30 p-6 rounded-2xl border border-white/10 max-w-[90%]">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-extrabold leading-tight text-center"
            >
              <span className="text-white">SHIELD</span>{" "}
              <span className="text-[#663399]">BUILD LEAD</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-4 text-lg text-gray-800 text-center"
            >
              Developing Leaders ... Leading Development
            </motion.p>
          </div>
        </div>
      </div>

      {/* Desktop overlay */}
      <div className="hidden md:block absolute top-1/2 left-16 -translate-y-1/2 max-w-xl z-10">
        <div className="backdrop-blur-md bg-white/20 p-8 rounded-2xl border border-white/10">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-extrabold leading-tight"
          >
            <span className="text-white">SHIELD</span>{" "}
            <span className="text-[#663399]">BUILD LEAD</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-6 text-xl text-gray-800"
          >
            Developing Leaders ... Leading Development
          </motion.p>
        </div>
      </div>
    </section>
  );
}
