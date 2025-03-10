"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-start bg-white text-[#663399]">
      {/* Hero Image */}
      <div className="w-full relative h-[50vh] md:h-screen border-b-2 border-[#663399]">
        <Image
          src="/hero-section.jpg"
          alt="Leadership Hero"
          fill
          className="object-contain md:object-cover"
          priority
          unoptimized
        />
      </div>

      {/* MOBILE SECTION */}
      <div className="block md:hidden w-full border-x-2 border-b-2 border-[#663399] rounded-b-md bg-white relative z-10 px-4 py-6 -mt-[2px]">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-extrabold leading-tight text-center"
        >
          <span className="text-[#663399]">SHIELD</span>{" "}
          <span className="text-[#663399]">BUILD LEAD</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-3 text-base text-gray-800 text-center"
        >
          Developing Leaders ... Leading Development
        </motion.p>
      </div>

      {/* DESKTOP SECTION */}
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
