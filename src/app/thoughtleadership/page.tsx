'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useIsClient } from '../utils/client';

export default function ThoughtLeadership() {  
    const [email, setEmail] = useState('');
    const isClient = useIsClient();

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                {isClient ? (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-600 text-center mb-12">
                            Thought Leadership
                        </h1>

                        <div className="max-w-4xl mx-auto space-y-12">
                            <motion.section 
                                className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#663399]"
                                variants={fadeIn}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-600 mb-6">
                                    One Leading thought disrupts mediocre thoughts
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-gray-700 leading-relaxed">One Single Thought - How much money you have made?</p>
                                    <p className="text-gray-700 leading-relaxed">This is how the world will think of you as rich or multi millionaire!</p>
                                    <p className="text-gray-700 leading-relaxed">No other thought crosses their mind while sizing up about making the money by hardwork, smart work, cheat work, no work or only luck works!</p>
                                    <p className="text-gray-700 leading-relaxed">That is what the world thinks...should not be your business</p>
                                    <p className="text-gray-700 leading-relaxed">Your Leading Thought on Your Own Success --- That is your Business!</p>
                                    <p className="text-gray-700 leading-relaxed">What is YOUR Thought Right Now?</p>
                                    <p className="text-gray-700 leading-relaxed">A thought to break every rule there is ever written.</p>
                                    <p className="text-gray-700 leading-relaxed">A thought to stare at the steps or step up the stairs!</p>
                                    <p className="text-gray-700 leading-relaxed">A thought to wait and watch or go and get it?</p>
                                    <p className="text-gray-700 leading-relaxed">A thought to clear your throat or let silence speak volumes.</p>
                                    <p className="text-gray-700 leading-relaxed">A thought paving way towards changing all aspects...</p>
                                    <p className="text-gray-700 leading-relaxed">A thought which is overthought begetting multitude thoughts</p>
                                    <p className="text-gray-700 leading-relaxed">A thought to streamline all thoughts!</p>
                                    <p className="text-gray-700 leading-relaxed">A meditative thought for all negative thoughts.</p>
                                    <p className="text-gray-700 leading-relaxed">A thought to make money which is ethical, royal, regal and fun</p>
                                </div>
                            </motion.section>

                            <motion.section 
                                className="bg-white rounded-2xl shadow-xl p-8 border-r-4 border-[#663399]"
                                variants={fadeIn}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-600 mb-6">
                                    Thought Leadership by Zillionite to build your dominating thought
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-gray-700 leading-relaxed">To create True WEALTH?</p>
                                    <p className="text-gray-700 leading-relaxed">To have amplified WEALTH from wealth created?</p>
                                    <p className="text-gray-700 leading-relaxed">To ensure that your Amplified Wealth is protected till Zillionite?</p>
                                    <p className="text-gray-700 leading-relaxed">To enjoy the money made which is Regal, Fun, Recurring and Zillionite Streams of WEALTH</p>
                                </div>
                            </motion.section>

                            <motion.section 
                                className="bg-gradient-to-r from-[#663399] to-purple-600 rounded-2xl shadow-xl p-10 text-center"
                                variants={fadeIn}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                <p className="text-2xl text-white font-bold mb-8">
                                    Lead with Divine Thoughts on the boulevards of Wealth!
                                </p>
                                <div className="max-w-md mx-auto">
                                    <div className="bg-white p-6 rounded-xl shadow-inner">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 shadow-sm"
                                        />
                                        <motion.button 
                                            className="w-full px-6 py-3 bg-gradient-to-r from-[#663399] to-purple-600 text-white rounded-lg shadow-lg hover:shadow-purple-300/50 transition-all duration-300 font-bold text-lg"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            LEAD
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.section>
                        </div>
                    </motion.div>
                ) : (
                    // Static version for server-side rendering
                    <div>
                        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-600 text-center mb-12">
                            Thought Leadership
                        </h1>

                        <div className="max-w-4xl mx-auto space-y-12">
                            <section className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#663399]">
                                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-600 mb-6">
                                    One Leading thought disrupts mediocre thoughts
                                </h2>
                                {/* Content */}
                            </section>

                            <section className="bg-white rounded-2xl shadow-xl p-8 border-r-4 border-[#663399]">
                                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-600 mb-6">
                                    Thought Leadership by Zillionite to build your dominating thought
                                </h2>
                                {/* Content */}
                            </section>

                            <section className="bg-gradient-to-r from-[#663399] to-purple-600 rounded-2xl shadow-xl p-10 text-center">
                                <p className="text-2xl text-white font-bold mb-8">
                                    Lead with Divine Thoughts on the boulevards of Wealth!
                                </p>
                                {/* Form */}
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}