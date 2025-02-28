"use client";
import { motion } from "framer-motion";

export default function DevelopingLeaders() {
  const questions = [
    "What makes a business survive for 100 years?",
    "Do you believe a Brand can be created at absolutely no cost?",
    "How to make business sturdy for the growth journey?",
    "Wondering how your money can make more money?",
    "Are you looking to outdo the competitors of Today and Tomorrow?",
    "Have you designed the right path chart towards your Vision?",
    "Can the business shield, build and lead its loyal customer base?",
    "Is your business capable to find answers to uncertainty and volatility?"
  ];

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
              <h1 className="text-5xl font-extrabold text-[#663399] mb-4 tracking-tight">Developing Leaders</h1>
              <h2 className="text-2xl text-purple-800 mb-8 font-bold">Game Changing Business Leadership</h2>
            </div>
            <div className="space-y-6 bg-white/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              {questions.map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 group hover:bg-purple-50 p-3 rounded-lg transition-all">
                  <span className="text-purple-600 font-bold text-lg">Q.{index + 1}</span>
                  <p className="text-gray-800 font-semibold text-lg group-hover:text-purple-900 transition-colors">{question}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 space-y-4 bg-purple-50/50 p-6 rounded-xl">
              <p className="italic text-lg font-medium text-gray-800">If you are struggling with these Lingering Questions to build the biz of your dreams.</p>
              <p className="font-bold text-xl text-purple-700">"Developing Leaders" is the Strategic Force for your business</p>
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
                  <p className="text-gray-800 font-medium text-lg">Build Your Business from 0 to 1 Methodically</p>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="h-3 w-3 rounded-full bg-purple-500 group-hover:bg-purple-600"></div>
                  <p className="text-gray-800 font-medium text-lg">Worksheets for Customised Answers for your Business</p>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="h-3 w-3 rounded-full bg-purple-500 group-hover:bg-purple-600"></div>
                  <p className="text-gray-800 font-medium text-lg">Encompassing all domains of Business</p>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="h-3 w-3 rounded-full bg-purple-500 group-hover:bg-purple-600"></div>
                  <p className="text-gray-800 font-medium text-lg">Step by Step Approach to Design Your Business Idea</p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-6">
                <p className="text-purple-900 font-bold text-xl text-center mb-4">
                  Get First Chapter Glimpse of Developing Leaders - PAL! (Pay as you Like)
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
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HtFQDs8H8uY"
                title="Business Leadership"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}