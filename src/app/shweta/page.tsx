'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Shweta() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    
    const slides = [
        {
            title: "Leadership Skills",
            text: "A design mechanism for Leadership Skills",
            image: "/slide1.jpg"
        },
        {
            title: "Leadership Mindset",
            text: "A prayer for debt free peace of mind",
            image: "/Slide2.jpg"
        },
        {
            title: "Money Decisions",
            text: "A therapy for Wise Money Decisions",
            image: "/Slide3.jpg"
        },
        {
            title: "Income Streams",
            text: "A push to move the mountains of Income Streams",
            image: "/slide4.jpg"
        },
        {
            title: "Revolutionary Wealth",
            text: "A lil stack up for Revolutionary Wealth",
            image: "/slide5.jpg"
        },
        {
            title: "Cash Inflows",
            text: "Valuable Strategies for strong Cash Inflows",
            image: "/slide7.jpg"
        },
        {
            title: "BREAKTHROUGH",
            text: "BREAKTHROUGH to LEAD an ENRICHED life!",
            image: "/slide8.jpg"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
    const handleSubmit = (e: React.MouseEvent) => {
        if (!email) {
            e.preventDefault();
            setError('Please enter your email');
            return;
        }
        setError('');
    };
    return (
        <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-6">

<div className="container mx-auto px-6 md:px-12 lg:px-16 mt-4 flex flex-col md:flex-row items-center gap-8 bg-white py-12 rounded-lg shadow-sm">
        <div className="text-left w-full md:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#663399]">Hey, I am Shweta - Leading Zillionite till Zillionite</h1>
          <p className="mt-4 text-lg text-gray-600">
            Gamed to Level Up Financial Leadership!<br></br>
            Definitive Winning Strategies to build Wealth for YOU.<br></br>
            So, what is your Leadership Challenge?
          </p>
         
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/Shweta-Zillionite.jpeg" alt="Zillionite Preview" width={450} height={70} className="rounded-lg shadow-lg" />
        </div>
      </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center mb-16"
            >
                <h1 className="text-3xl lg:text-4xl font-bold text-[#663399]">
                    Zillion Dollar Answer to Your Leadership Challenge….
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Crack the Code of Experiential Leadership with Shweta!
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto relative">
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.7 }}
                            className="absolute w-full h-full"
                        >
                            <Image
                            
                                src={slides[currentSlide].image}
                                alt={slides[currentSlide].title}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                            <motion.div 
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6 backdrop-blur-sm"
                            >
                                <h2 className="text-2xl font-bold mb-2">
                                    {slides[currentSlide].title}
                                </h2>
                                <p className="text-lg">
                                    {slides[currentSlide].text}
                                </p>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                
                <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 1)" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-purple-600 p-2 rounded-full shadow-lg"
                >
                    ←
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 1)" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-purple-600 p-2 rounded-full shadow-lg"
                >
                    →
                </motion.button>

                <div className="flex justify-center mt-4 gap-2">
                    {slides.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            className={`w-3 h-3 rounded-full ${
                                index === currentSlide ? 'bg-purple-600' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
            <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-6 flex flex-col md:flex-row items-center gap-8">
            <div className="container mx-auto max-w-6xl mt-20 mb-16">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 space-y-6">
                        <h1 className="text-3xl lg:text-4xl font-bold text-[#663399]">Shweta Vora</h1>
                        <div className="space-y-3 text-lg text-gray-600">
                            <p className="flex items-center">
                                <span className="font-semibold text-[#663399] w-24">Educator-</span>
                                <span>Developing Leaders….Leading Development</span>
                            </p>
                            <p className="flex items-center">
                                <span className="font-semibold text-[#663399] w-24">Facilitator-</span>
                                <span>Student of Finance and Life</span>
                            </p>
                            <p className="flex items-center">
                                <span className="font-semibold text-[#663399] w-24">Creator-</span>
                                <span>Leadership Vibes for Buddh Mind</span>
                            </p>
                            <p className="flex items-center">
                                <span className="font-semibold text-[#663399] w-24">Speaker-</span>
                                <span>Connecting the Dots Charmingly</span>
                            </p>
                            <p className="flex items-center">
                                <span className="font-semibold text-[#663399] w-24">Strategist-</span>
                                <span>Impacting Businesses so Businesses are Impactful</span>
                            </p>
                            <p className="flex items-center">
                                <span className="font-semibold text-[#663399] w-24">Leader-</span>
                                <span>To LEAD...kindly light</span>
                            </p>
                            <p className="flex items-center">
                                <span className="font-semibold text-[#663399] w-24">Learner-</span>
                                <span>To Match the Matchless</span>
                            </p>
                        </div>
                        
                        <div className="space-y-4 mt-8">
                            <p className="text-lg text-gray-700 font-medium">Shield your Calibre<br></br>Build Fortune for Self<br></br>Lead with Shweta!</p>
                        
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError('');
                                }}
                                placeholder="Enter your email"
                                className={`w-full px-4 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                            />
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                        </div>
                        
                        <div className="pt-4">
                            <Link 
                                href="/booking" 
                                onClick={handleSubmit}
                                className="inline-block px-8 py-3 bg-[#663399] text-white rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300 text-lg font-semibold"
                            >
                                Lead
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative">
                            <Image 
                                src="/profilepic.jpeg" 
                                alt="Shweta Vora" 
                                width={350} 
                                height={350} 
                                className="rounded-lg shadow-xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
      </div>
        </div>
    );
}