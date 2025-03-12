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
        }, 5000);
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
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
            {/* Hero Section */}
            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-16">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#663399] leading-tight">
                        Zillion Dollar Answer to Your Leadership Challenge….
                    </h1>
                    <p className="mt-6 text-xl text-gray-600">
                        Crack the Code of Experiential Leadership with Shweta!
                    </p>
                </motion.div>

                {/* Introduction Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl p-10 mb-20 max-w-5xl mx-auto border border-purple-100"
                >
                    <div className="text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#663399] mb-6">
                            Hey, I am Shweta - Leading Zillionite till Zillionite
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Gamed to Level Up Financial Leadership!<br />
                            Definitive Winning Strategies to build Wealth for YOU.
                        </p>
                    </div>
                </motion.div>

                {/* Carousel Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-5xl mx-auto relative mb-24"
                >
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 300, 
                                    damping: 30 
                                }}
                                className="absolute w-full h-full"
                            >
                                <Image
                                    src={slides[currentSlide].image}
                                    alt={slides[currentSlide].title}
                                    width={1200}
                                    height={675}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                                <motion.div 
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-8 backdrop-blur-sm"
                                >
                                    <h2 className="text-3xl font-bold mb-3">
                                        {slides[currentSlide].title}
                                    </h2>
                                    <p className="text-xl">
                                        {slides[currentSlide].text}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    
                    <motion.button
                        whileHover={{ scale: 1.2, backgroundColor: "rgba(255, 255, 255, 1)" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-purple-600 p-3 rounded-full shadow-lg z-10 w-12 h-12 flex items-center justify-center text-xl"
                    >
                        ←
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.2, backgroundColor: "rgba(255, 255, 255, 1)" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-purple-600 p-3 rounded-full shadow-lg z-10 w-12 h-12 flex items-center justify-center text-xl"
                    >
                        →
                    </motion.button>

                    <div className="flex justify-center mt-6 gap-3">
                        {slides.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                whileHover={{ scale: 1.3 }}
                                whileTap={{ scale: 0.8 }}
                                animate={{ 
                                    scale: index === currentSlide ? 1.2 : 1,
                                    backgroundColor: index === currentSlide ? '#663399' : '#d1d5db'
                                }}
                                className="w-4 h-4 rounded-full"
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Profile Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-6xl mx-auto mb-20"
                >
                    <div className="flex flex-col md:flex-row items-center gap-16 bg-white p-12 rounded-2xl shadow-xl border border-purple-100">
                        <div className="w-full md:w-1/2 space-y-8">
                            <h1 className="text-4xl font-bold text-[#663399] mb-8">Shweta Vora</h1>
                            
                            <div className="space-y-5">
                                {[
                                    { role: "Educator", desc: "Developing Leaders….Leading Development" },
                                    { role: "Facilitator", desc: "Student of Finance and Life" },
                                    { role: "Creator", desc: "Leadership Vibes for Buddh Mind" },
                                    { role: "Speaker", desc: "Connecting the Dots Charmingly" },
                                    { role: "Strategist", desc: "Impacting Businesses so Businesses are Impactful" },
                                    { role: "Leader", desc: "To LEAD...kindly light" },
                                    { role: "Learner", desc: "To Match the Matchless" }
                                ].map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="flex items-start gap-4"
                                    >
                                        <span className="font-semibold text-[#663399] text-xl min-w-28">{item.role}</span>
                                        <span className="text-gray-700 border-l-2 border-purple-200 pl-4">{item.desc}</span>
                                    </motion.div>
                                ))}
                            </div>
                            
                            <motion.div 
                                className="mt-12 bg-purple-50 p-8 rounded-xl shadow-sm"
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <p className="text-xl text-[#663399] font-medium leading-relaxed mb-6">
                                    Shield your Calibre<br />
                                    Build Fortune for Self<br />
                                    Lead with Shweta!
                                </p>
                            
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setError('');
                                    }}
                                    placeholder="Enter your email"
                                    className={`w-full px-5 py-4 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm text-lg`}
                                />
                                {error && <p className="text-red-500 mt-2">{error}</p>}
                            
                                <motion.div className="mt-6">
                                    <Link 
                                        href="/booking" 
                                        onClick={handleSubmit}
                                        className="inline-block px-10 py-4 bg-gradient-to-r from-[#663399] to-purple-600 text-white rounded-lg shadow-lg hover:shadow-purple-300/50 transition-all duration-300 text-lg font-semibold"
                                    >
                                        <motion.span
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-block"
                                        >
                                            Lead with Shweta
                                        </motion.span>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                        
                        <div className="w-full md:w-1/2 flex justify-center">
                            <motion.div 
                                className="relative"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-purple-300 to-purple-100 rounded-2xl blur-lg opacity-70 -z-10"></div>
                                <Image 
                                    src="/profilepic.jpeg" 
                                    alt="Shweta Vora" 
                                    width={450} 
                                    height={450} 
                                    className="rounded-2xl shadow-2xl object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}