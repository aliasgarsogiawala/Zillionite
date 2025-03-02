"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LeadershipVibes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-8"
          >
            <div>
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-600 mb-4 tracking-tight leading-tight relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-24 after:h-1 after:bg-gradient-to-r after:from-[#663399] after:to-purple-400">
                Leadership Vibes
              </h1>
              <h2 className="text-2xl text-purple-800 mb-8 font-bold">Connect with the essence of true leadership</h2>
            </div>
            
            <div className="space-y-8 bg-white/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="space-y-3">
                <p className="text-gray-800 font-semibold text-lg">Winnings are so deadly important. Every time.</p>
                <p className="text-gray-800 font-semibold text-lg">If you fail multitude times, your Courage should win each time.</p>
                <p className="text-gray-800 font-semibold text-lg">Even if losing the biggest battle, your Values should win.</p>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-800 font-semibold text-lg">By being written off in materialism, your Character should win.</p>
                <p className="text-gray-800 font-semibold text-lg">In the middle of chaos, your leading Serenity should win.</p>
                <p className="text-gray-800 font-semibold text-lg">In heated argument, intact Respect should win.</p>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-800 font-semibold text-lg">Do not chase illusions!</p>
                <p className="text-gray-800 font-semibold text-lg">Win everytime...with Leadership Vibes</p>
              </div>
              
              <div>
                <p className="text-gray-800 font-semibold text-lg">Leadership Vibes Deep Dive</p>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-800 font-semibold text-lg">Vibe Type</p>
                <p className="text-gray-800 font-semibold text-lg">Channelize your energies</p>
                <p className="text-gray-800 font-semibold text-lg">Stack up your Benchmarks</p>
                <p className="text-gray-800 font-semibold text-lg">Build Divine Self</p>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 space-y-4 bg-purple-50/50 p-6 rounded-xl">
              <p className="italic text-lg font-medium text-gray-800">Elevate your leadership presence through authentic vibes.</p>
              <p className="font-bold text-xl text-purple-700">&ldquo;Leadership Vibes&rdquo; helps you win in every situation with integrity</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-12 bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-200 hover:border-purple-300 transition-all"
            >
              <h3 className="text-3xl font-extrabold text-[#663399] mb-8">Key Benefits</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="h-3 w-3 rounded-full bg-purple-500 group-hover:bg-purple-600"></div>
                  <p className="text-gray-800 font-medium text-lg">Develop authentic leadership presence</p>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="h-3 w-3 rounded-full bg-purple-500 group-hover:bg-purple-600"></div>
                  <p className="text-gray-800 font-medium text-lg">Maintain values and character in challenging situations</p>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="h-3 w-3 rounded-full bg-purple-500 group-hover:bg-purple-600"></div>
                  <p className="text-gray-800 font-medium text-lg">Channel your energy effectively for maximum impact</p>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="h-3 w-3 rounded-full bg-purple-500 group-hover:bg-purple-600"></div>
                  <p className="text-gray-800 font-medium text-lg">Build a divine self that inspires others</p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-6">
                <p className="text-purple-900 font-bold text-xl text-center mb-4">
                  Pay as you like (PAL)
                </p>
                <div className="flex justify-center">
                  <button className="bg-[#663399] text-white px-10 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg">
                    LEAD
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 sticky top-24"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl max-w-md mx-auto">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/Leadership-Vibes.jpg"
                  alt="Leadership Vibes"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}