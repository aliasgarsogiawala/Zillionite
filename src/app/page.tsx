"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlideTwo , setCurrentSlideTwo] = useState(0);
  const[currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      image: "/T1.png",
    },
    {
      image: "/T2.png",
    },
    {
      image: "/T3.png",
    },
    {
      image: "/T4.png",
    },
    {
      image: "/T5.png",
    },
    {
      image: "/T6.png",
    },
    {
      image: "/T7.png",
    },
    {
      image: "/T8.png",
    },
    {
      image: "/T9.png",
    },
    {
      image: "/T10.png",
    },
    {
      image: "/T11.png",
    },
    {
      image: "/T12.png",
    },
    {
      image: "/T13.png",
    },
    {
      image: "/T14.png",
    },
    {
      image: "/T15.png",
    }
  ]
  const slides = [
    {
      image: "/Developing-leaders.png",
      text: "Developing Leaders",
      link: "/developing-leaders"
    },
    {
      image: "/Leading-Development.png",
      text: "Leading Development",
      link: "/leading-development"
    }
  ];

  const slides2 = [
    {
      image: "/Leadership-mindset.png",
      text: "Leadership Mindset",
      link: "/leadership-mindset"
    },
    {
      image: "/Leadership-Vibes.jpg",
      text: "Leadership Vibes",
      link: "/leadership-vibes"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextslide = () => {
    setCurrentSlideTwo((prev) => (prev + 1) % slides2.length);
  };

  const prevslide = () => {
    setCurrentSlideTwo((prev) => (prev - 1 + slides2.length) % slides2.length);
  };

  const nexttest = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevtest = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextslide, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(nexttest, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      
      <HeroSection/>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-8 text-center bg-gray-50 py-12 rounded-lg border-none">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#663399] text-left">Business Leadership Books</h2>
        <div className="relative w-full max-w-4xl mx-auto mt-6 flex items-center">
          <button onClick={prevSlide} className="absolute -left-12 bg-gray-300 p-2 rounded-full">⬅</button>
          <div className="w-full flex flex-row items-center gap-6">
            <Link href={slides[currentSlide].link}>
              <Image 
                src={slides[currentSlide].image} 
                alt="Book Image" 
                width={500} 
                height={500} 
                className="rounded-lg shadow-lg cursor-pointer border-none" 
              />
            </Link>
            <div className="flex flex-col items-start gap-4">
              <p className="text-3xl font-bold text-[#663399]">{slides[currentSlide].text}</p>
              <Link 
                href={slides[currentSlide].link} 
                className="px-8 py-4 bg-[#663399] text-white text-xl font-bold rounded-lg shadow-lg hover:bg-purple-700 transition"
              >
                Lead
              </Link>
            </div>
          </div>
          <button onClick={nextSlide} className="absolute -right-12 bg-gray-300 p-2 rounded-full">➡</button>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-8 text-center bg-white py-12 rounded-lg shadow-sm">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#663399] text-left">Self Leadership Books</h2>
        <div className="relative w-full max-w-4xl mx-auto mt-6 flex items-center">
          <button onClick={prevslide} className="absolute -left-12 bg-gray-300 p-2 rounded-full">⬅</button>
          <div className="w-full flex flex-row items-center gap-6">
            <Link href={slides2[currentSlideTwo].link}>
              <Image 
                src={slides2[currentSlideTwo].image} 
                alt="Book Image" 
                width={500} 
                height={500} 
                className="rounded-lg shadow-lg cursor-pointer" 
              />
            </Link>
            <div className="flex flex-col items-start gap-4">
              <p className="text-3xl font-bold text-[#663399]">{slides2[currentSlideTwo].text}</p>
              <Link 
                href={slides2[currentSlideTwo].link} 
                className="px-8 py-4 bg-[#663399] text-white text-xl font-bold rounded-lg shadow-lg hover:bg-purple-700 transition"
              >
                Lead
              </Link>
            </div>
          </div>
          <button onClick={nextslide} className="absolute -right-12 bg-gray-300 p-2 rounded-full">➡</button>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-8 flex flex-col md:flex-row items-center gap-8 bg-gray-50 py-12 rounded-lg">
        <div className="text-left w-full md:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#663399]">Thought Leadership - Finance Wisdom</h1>
          <p className="mt-4 text-lg text-gray-600">
            Design Wealth Map for each Financial Milestones<br></br>
            Know how to create Wealth - Money, Vision, Time and Impact- All of it!
          </p>
          <Link href="/thought-leadership" className="mt-6 inline-block px-8 py-4 bg-[#663399] text-white text-xl font-bold rounded-lg shadow-lg hover:bg-purple-700 transition">Lead</Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/pexels-crazy-motions-80195021-12198525.jpg" alt="Thought Leadership" width={350} height={30} className="rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-8 mb-16 text-center py-12 rounded-lg">
        <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-600 mb-8">Client Diaries</h2>
        <div className="relative w-full max-w-4xl mx-auto mt-6 flex items-center justify-center">
          <button onClick={prevtest} className="absolute left-0 bg-white p-3 rounded-full z-10 shadow-md hover:shadow-lg text-purple-600 transition-all">⬅</button>
          <div className="relative flex items-center justify-center w-full h-[500px] overflow-visible">
            {testimonials.map((testimonial, index) => {
              const position = (index - currentTestimonial + testimonials.length) % testimonials.length;
              let scale = 1;
              let opacity = 1;
              let xOffset = 0;
              let zIndex = 1;
      
              if (position === 0) {
                scale = 1.2;
                opacity = 1;
                xOffset = 0;
                zIndex = 10;
              } else if (position === 1 || position === testimonials.length - 1) {
                scale = 1;
                opacity = 0.6;
                xOffset = position === 1 ? -150 : 150;
                zIndex = 5;
              } else {
                opacity = 0;
                zIndex = 1;
              }
      
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity, scale, x: xOffset, zIndex }}
                  transition={{ duration: 0.5 }}
                  className="absolute"
                >
                  <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-xl p-4 border-2 border-purple-100">
                    <Image
                      src={testimonial.image}
                      alt="Testimonial"
                      width={400}
                      height={500}
                      className="rounded-lg"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
          <button onClick={nexttest} className="absolute right-0 bg-white p-3 rounded-full z-10 shadow-md hover:shadow-lg text-purple-600 transition-all">➡</button>
        </div>
      </div>

      
      

      <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-8 flex flex-col md:flex-row items-center gap-8 bg-gray-50 py-12 rounded-lg">
        <div className="text-left w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#663399]">Lead To Last</h1>
          <p className="text-lg text-gray-600">
            Build Leadership Skills with Experiential Leadership<br />
            Learn with Fun with experience and Impact
          </p>
          
          <div className="pt-4">
            <Link href="/leadtolast" className="inline-block px-8 py-4 bg-[#663399] text-white text-xl font-bold rounded-lg shadow-lg hover:bg-purple-700 transition">
              Lead
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/leadtolast.png" alt="Zillionite Preview" width={400} height={70} className="rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-8 flex flex-col md:flex-row items-center gap-8 bg-gray-50 py-12 rounded-lg">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/ztz.jpg" alt="Zillionite Preview" width={400} height={70} className="rounded-lg shadow-lg" />
        </div>
        
        <div className="text-left w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#663399]">Connect With Us</h1>
          <div className="grid grid-cols-1 gap-3 bg-white p-5 rounded-lg shadow-sm">
            <p className="text-purple-700 font-semibold text-lg hover:text-purple-900 transition-colors">For cool careers</p>
            <p className="text-purple-700 font-semibold text-lg hover:text-purple-900 transition-colors">To unlock growth</p>
            <p className="text-purple-700 font-semibold text-lg hover:text-purple-900 transition-colors">Lean in business collaborations</p>
            <p className="text-purple-700 font-semibold text-lg hover:text-purple-900 transition-colors">To go places with Key Note Speaker Shweta</p>
            <p className="text-purple-700 font-semibold text-lg hover:text-purple-900 transition-colors">For Leading with Zillionite</p>
            <p className="text-purple-700 font-semibold text-lg hover:text-purple-900 transition-colors">If you want Organisation Development</p>
            <p className="text-purple-700 font-semibold text-lg hover:text-purple-900 transition-colors">So Immersive Learning takes place</p>
          </div>
          
          <div className="pt-4">
            <Link href="/connect" className="inline-block px-8 py-4 bg-[#663399] text-white text-xl font-bold rounded-lg shadow-lg hover:bg-purple-700 transition">
              Lead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}