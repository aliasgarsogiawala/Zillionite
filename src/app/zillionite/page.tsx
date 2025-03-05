"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Zillionite(){
    const [logos, setLogos] = useState<Array<{id: number, x: number, y: number, size: number, speed: number, direction: number}>>([]);
    
    useEffect(() => {
        const newLogos = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100, // random x position (0-100%)
            y: Math.random() * 100, // random y position (0-100%)
            size: Math.random() * 30 + 20, // random size (20-50px)
            speed: Math.random() * 0.5 + 0.2, // random speed
            direction: Math.random() > 0.5 ? 1 : -1 // random direction
        }));
        
        setLogos(newLogos);
        
        // Animation loop for floating effect
        const interval = setInterval(() => {
            setLogos(prevLogos => 
                prevLogos.map(logo => ({
                    ...logo,
                    x: (logo.x + logo.speed * logo.direction + 100) % 100,
                    y: (logo.y + Math.sin(Date.now() / 2000) * 0.2 + 100) % 100
                }))
            );
        }, 50);
        
        return () => clearInterval(interval);
    }, []);

    return(
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-purple-50 py-12 font-sans relative overflow-hidden">
            {/* Floating logos in background */}
            {logos.map(logo => (
                <div 
                    key={logo.id}
                    className="absolute opacity-5 pointer-events-none"
                    style={{
                        left: `${logo.x}%`,
                        top: `${logo.y}%`,
                        width: `${logo.size}px`,
                        height: `${logo.size}px`,
                        transform: `rotate(${logo.x * 3.6}deg)`,
                        transition: 'all 3s ease-in-out'
                    }}
                >
                    <Image 
                        src="/Circular-Logo.png" 
                        alt="Zillionite Logo" 
                        width={100} 
                        height={100} 
                        className="w-full h-full object-contain"
                    />
                </div>
            ))}
            
            <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-8 flex flex-col items-center gap-8 bg-white py-12 rounded-2xl shadow-lg border border-purple-100 max-w-6xl relative z-10">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-500 text-center">
                    Our Brand Story
                </h1>
                <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mb-8 leading-relaxed">
                  Discover how Zillionite is transforming leadership development through experiential learning and a passion for growth.
                </p>
                
                <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-purple-100">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/ckvZ6klsDcU" 
                    title="Zillionite Brand Story" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-2xl font-semibold text-[#663399] italic">
                    Empowering leaders to make a lasting impact
                  </p>
                </div>
            </div>
            
            <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-12 flex flex-col md:flex-row items-center gap-10 bg-white py-12 rounded-2xl shadow-lg border border-purple-100 max-w-6xl relative z-10">
                <div className="text-left w-full md:w-1/2 space-y-6">
                  <h1 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-500">
                    Lead To Last
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    Build Leadership Skills with Experiential Leadership<br />
                    Learn with Fun with experience and Impact
                  </p>
                  
                  <div className="pt-6">
                    <Link href="/leadtolast" className="inline-block px-10 py-4 bg-gradient-to-r from-[#663399] to-purple-600 text-white text-xl font-bold rounded-xl shadow-xl hover:shadow-purple-300/50 transition-all duration-300 transform hover:translate-y-[-2px]">
                      Lead
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <Image src="/leadtolast.png" alt="Zillionite Preview" width={450} height={300} className="rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500" />
                </div>
            </div>
            
            <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-12 flex flex-col md:flex-row items-center gap-10 bg-white py-12 rounded-2xl shadow-lg border border-purple-100 max-w-6xl relative z-10">
                <div className="text-left w-full md:w-1/2 space-y-6">
                  <h1 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-500">
                    Careers
                  </h1>
                  <div className="space-y-4">
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">Especially with friendly bosses and flexibility.</p>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">Yet, we are passionate about your learning curve.</p>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">At Zillionite we aim for learning curve to be infinite.</p>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">How much do you want to grow in your career?</p>
                    
                    <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 my-8 transform hover:scale-105 transition-transform duration-300">
                      <p className="text-2xl font-bold text-[#663399] text-center italic">
                        &ldquo;Higher your Learning curve, Bigger your Earning curve.&rdquo;
                      </p>
                    </div>
                    
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">Are you excited to be a Zillionite?</p>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">Cool spaces are great.</p>
                  </div>
                  
                  <div className="pt-6">
                    <Link href="/careers" className="inline-block px-10 py-4 bg-gradient-to-r from-[#663399] to-purple-600 text-white text-xl font-bold rounded-xl shadow-xl hover:shadow-purple-300/50 transition-all duration-300 transform hover:translate-y-[-2px]">
                      Lead
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <Image src="/careers.jpg" alt="Zillionite Careers" width={450} height={300} className="rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500" />
                </div>
            </div>
            
            <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-12 flex flex-col md:flex-row items-center gap-10 bg-white py-12 rounded-2xl shadow-lg border border-purple-100 mb-12 max-w-6xl relative z-10">
                <div className="w-full md:w-1/2 flex justify-center">
                  <Image src="/ztz.jpg" alt="Zillionite Preview" width={450} height={300} className="rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500" />
                </div>
                
                <div className="text-left w-full md:w-1/2 space-y-6">
                  <h1 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-500">
                    Connect With Us
                  </h1>
                  <div className="grid grid-cols-1 gap-4 bg-purple-50 p-6 rounded-xl shadow-inner border-2 border-purple-100">
                    <p className="text-purple-700 font-semibold text-lg md:text-xl hover:text-purple-900 transition-colors flex items-center">
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      For cool careers
                    </p>
                    <p className="text-purple-700 font-semibold text-lg md:text-xl hover:text-purple-900 transition-colors flex items-center">
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      To unlock growth
                    </p>
                    <p className="text-purple-700 font-semibold text-lg md:text-xl hover:text-purple-900 transition-colors flex items-center">
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      Lean in business collaborations
                    </p>
                    <p className="text-purple-700 font-semibold text-lg md:text-xl hover:text-purple-900 transition-colors flex items-center">
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      To go places with Key Note Speaker Shweta
                    </p>
                    <p className="text-purple-700 font-semibold text-lg md:text-xl hover:text-purple-900 transition-colors flex items-center">
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      For Leading with Zillionite
                    </p>
                    <p className="text-purple-700 font-semibold text-lg md:text-xl hover:text-purple-900 transition-colors flex items-center">
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      If you want Organisation Development
                    </p>
                    <p className="text-purple-700 font-semibold text-lg md:text-xl hover:text-purple-900 transition-colors flex items-center">
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      So Immersive Learning takes place
                    </p>
                  </div>
                  
                  <div className="pt-6">
                    <Link href="/connect" className="inline-block px-10 py-4 bg-gradient-to-r from-[#663399] to-purple-600 text-white text-xl font-bold rounded-xl shadow-xl hover:shadow-purple-300/50 transition-all duration-300 transform hover:translate-y-[-2px]">
                      Lead
                    </Link>
                  </div>
                </div>
            </div>
        </div>
    );
}