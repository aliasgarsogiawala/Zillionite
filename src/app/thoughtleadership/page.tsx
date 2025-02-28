'use client';
import { useState } from 'react';

export default function thoughtleadership() {
    const [email, setEmail] = useState('');

    return (
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12">
            <h1 className="text-4xl font-bold text-[#663399] text-center mb-8">
                Thought Leadership
            </h1>

            <div className="max-w-4xl mx-auto space-y-12">
                <section className="bg-white rounded-lg shadow-xl p-8">
                    <h2 className="text-2xl font-bold text-[#663399] mb-6">
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
                </section>

                <section className="bg-white rounded-lg shadow-xl p-8">
                    <h2 className="text-2xl font-bold text-[#663399] mb-6">
                        Thought Leadership by Zillionite to build your dominating thought
                    </h2>
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">To create True WEALTH?</p>
                        <p className="text-gray-700 leading-relaxed">To have amplified WEALTH from wealth created?</p>
                        <p className="text-gray-700 leading-relaxed">To ensure that your Amplified Wealth is protected till Zillionite?</p>
                        <p className="text-gray-700 leading-relaxed">To enjoy the money made which is Regal, Fun, Recurring and Zillionite Streams of WEALTH</p>
                    </div>
                </section>

                <section className="bg-white rounded-lg shadow-xl p-8 text-center">
                    <p className="text-xl text-[#663399] font-semibold mb-6">
                        Lead with Divine Thoughts on the boulevards of Wealth!
                    </p>
                    <div className="max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
                        />
                        <button className="w-full px-6 py-3 bg-[#663399] text-white rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300">
                            LEAD
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}