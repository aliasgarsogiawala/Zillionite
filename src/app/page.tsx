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

  

  const nextslide = () => {
    setCurrentSlideTwo((prev) => (prev + 1) % slides2.length);
  };

  

  const nexttest = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-purple-50 pt-0 pb-6 font-sans">
      
      <HeroSection/>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-2 text-center bg-white py-12 rounded-2xl shadow-lg border border-purple-100 max-w-[90%]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-500 text-left">Business Leadership Books</h2>
        <div className="relative w-full max-w-4xl mx-auto mt-6 flex items-center">
          <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-8">
            <Link href={slides[currentSlide].link} className="w-full md:w-auto">
              <Image 
                src={slides[currentSlide].image} 
                alt="Book Image" 
                width={500} 
                height={500} 
                className="rounded-xl shadow-xl cursor-pointer border-none w-full max-w-[300px] mx-auto md:max-w-none transform hover:scale-105 transition-transform duration-500" 
              />
            </Link>
            <div className="flex flex-col items-center md:items-start gap-6 mt-6 md:mt-0">
              <p className="text-2xl md:text-3xl font-bold text-[#663399]">{slides[currentSlide].text}</p>
              <Link 
                href={slides[currentSlide].link} 
                className="px-10 py-4 bg-gradient-to-r from-[#663399] to-purple-600 text-white text-xl font-bold rounded-xl shadow-xl hover:shadow-purple-300/50 transition-all duration-300 transform hover:translate-y-[-2px] w-full md:w-auto text-center"
              >
                Lead
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-12 text-center bg-white py-12 rounded-2xl shadow-lg border border-purple-100 max-w-[90%]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-500 text-left">Self Leadership Books</h2>
        <div className="relative w-full max-w-4xl mx-auto mt-6 flex items-center">
          <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-8">
            <Link href={slides2[currentSlideTwo].link} className="w-full md:w-auto">
              <Image 
                src={slides2[currentSlideTwo].image} 
                alt="Book Image" 
                width={500} 
                height={500} 
                className="rounded-xl shadow-xl cursor-pointer w-full max-w-[300px] mx-auto md:max-w-none transform hover:scale-105 transition-transform duration-500" 
              />
            </Link>
            <div className="flex flex-col items-center md:items-start gap-6 mt-6 md:mt-0">
              <p className="text-2xl md:text-3xl font-bold text-[#663399]">{slides2[currentSlideTwo].text}</p>
              <Link 
                href={slides2[currentSlideTwo].link} 
                className="px-10 py-4 bg-gradient-to-r from-[#663399] to-purple-600 text-white text-xl font-bold rounded-xl shadow-xl hover:shadow-purple-300/50 transition-all duration-300 transform hover:translate-y-[-2px] w-full md:w-auto text-center"
              >
                Lead
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-12 flex flex-col md:flex-row items-center gap-10 bg-white py-12 rounded-2xl shadow-lg border border-purple-100 max-w-[90%]">
        <div className="text-left w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-500">Thought Leadership - Finance Wisdom</h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Design Wealth Map for each Financial Milestones<br></br>
            Know how to create Wealth - Money, Vision, Time and Impact- All of it!
          </p>
          <div className="pt-6">
            <Link href="/thoughtleadership" className="inline-block px-10 py-4 bg-gradient-to-r from-[#663399] to-purple-600 text-white text-xl font-bold rounded-xl shadow-xl hover:shadow-purple-300/50 transition-all duration-300 transform hover:translate-y-[-2px]">Lead</Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/pexels-crazy-motions-80195021-12198525.jpg" alt="Thought Leadership" width={450} height={300} className="rounded-xl shadow-xl max-w-[350px] w-full transform hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-12 mb-12 text-center py-12 rounded-2xl shadow-lg border border-purple-100 bg-white max-w-[90%]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-500 mb-8">Client Diaries</h2>
        <div className="relative w-full max-w-4xl mx-auto mt-6 flex items-center justify-center">
          
          <div className="relative flex items-center justify-center w-full h-[350px] md:h-[500px] overflow-visible">
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
         
        </div>
      </div>

    </div>
  );
}