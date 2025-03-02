"use client";
import { motion } from "framer-motion";

export default function LeadingDevelopment() {
  const questions = [
    "Which is the right path to choose the succession for YOUR business?",
    "How to create a loyal team which takes ownership like the owner?",
    "What is the best way to deal with crisis with minimal issues?",
    "Define the secrets of Building Business with Legacy?",
    "Can your business proclaim to have a sturdy sustainability?",
    "Are all the three P's of your business- People, Planet and Profits aligned?",
    "Can you LEAD the industry waves by being a bellweather of your field?",
    "Is there a strategy to synchronise the mergers and acquisitions of business?"
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
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-600 mb-4 tracking-tight leading-tight relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-24 after:h-1 after:bg-gradient-to-r after:from-[#663399] after:to-purple-400">
                Leading Development
              </h1>
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
              <p className="italic text-lg font-medium text-gray-800">Making your growing business capable to find answers in the VUCA World</p>
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
                  <p className="text-gray-800 font-medium text-lg">Secret Sauces to take the business to NEXT Level</p>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="h-3 w-3 rounded-full bg-purple-500 group-hover:bg-purple-600"></div>
                  <p className="text-gray-800 font-medium text-lg">Curated Content from Experiences with industry veterans and leaders</p>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="h-3 w-3 rounded-full bg-purple-500 group-hover:bg-purple-600"></div>
                  <p className="text-gray-800 font-medium text-lg">Sharp Global Business Leadership</p>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="h-3 w-3 rounded-full bg-purple-500 group-hover:bg-purple-600"></div>
                  <p className="text-gray-800 font-medium text-lg">Spirtual, Academic, Business and Sports Case Studies</p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-6">
                <p className="text-purple-900 font-bold text-xl text-center mb-4">
                  170/- Ebook | Combo Offer
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
                src="https://www.youtube.com/embed/q3hLq4VJwYs"
                title="Leading Development"
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