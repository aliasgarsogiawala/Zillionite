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
      
      <div className="container mx-auto px-4 md:px-12 lg:px-16 mt-4 md:mt-8 text-center bg-gray-50 py-8 md:py-12 rounded-lg border-none">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#663399] text-left">Business Leadership Books</h2>
        <div className="relative w-full max-w-4xl mx-auto mt-4 md:mt-6 flex items-center">
          <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6">
            <Link href={slides[currentSlide].link} className="w-full md:w-auto">
              <Image 
                src={slides[currentSlide].image} 
                alt="Book Image" 
                width={500} 
                height={500} 
                className="rounded-lg shadow-lg cursor-pointer border-none w-full max-w-[300px] mx-auto md:max-w-none" 
              />
            </Link>
            <div className="flex flex-col items-center md:items-start gap-4 mt-4 md:mt-0">
              <p className="text-2xl md:text-3xl font-bold text-[#663399]">{slides[currentSlide].text}</p>
              <Link 
                href={slides[currentSlide].link} 
                className="px-6 md:px-8 py-3 md:py-4 bg-[#663399] text-white text-lg md:text-xl font-bold rounded-lg shadow-lg hover:bg-purple-700 transition w-full md:w-auto text-center"
              >
                Lead
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 lg:px-16 mt-4 md:mt-8 text-center bg-white py-8 md:py-12 rounded-lg shadow-sm">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#663399] text-left">Self Leadership Books</h2>
        <div className="relative w-full max-w-4xl mx-auto mt-4 md:mt-6 flex items-center">
          <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6">
            <Link href={slides2[currentSlideTwo].link} className="w-full md:w-auto">
              <Image 
                src={slides2[currentSlideTwo].image} 
                alt="Book Image" 
                width={500} 
                height={500} 
                className="rounded-lg shadow-lg cursor-pointer w-full max-w-[300px] mx-auto md:max-w-none" 
              />
            </Link>
            <div className="flex flex-col items-center md:items-start gap-4 mt-4 md:mt-0">
              <p className="text-2xl md:text-3xl font-bold text-[#663399]">{slides2[currentSlideTwo].text}</p>
              <Link 
                href={slides2[currentSlideTwo].link} 
                className="px-6 md:px-8 py-3 md:py-4 bg-[#663399] text-white text-lg md:text-xl font-bold rounded-lg shadow-lg hover:bg-purple-700 transition w-full md:w-auto text-center"
              >
                Lead
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 lg:px-16 mt-4 md:mt-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-gray-50 py-8 md:py-12 rounded-lg">
        <div className="text-center md:text-left w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#663399]">Thought Leadership - Finance Wisdom</h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-600">
            Design Wealth Map for each Financial Milestones<br></br>
            Know how to create Wealth - Money, Vision, Time and Impact- All of it!
          </p>
          <Link href="/thought-leadership" className="mt-4 md:mt-6 inline-block px-6 md:px-8 py-3 md:py-4 bg-[#663399] text-white text-lg md:text-xl font-bold rounded-lg shadow-lg hover:bg-purple-700 transition">Lead</Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image src="/pexels-crazy-motions-80195021-12198525.jpg" alt="Thought Leadership" width={350} height={30} className="rounded-lg shadow-lg max-w-[300px] md:max-w-[350px] w-full" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 lg:px-16 mt-4 md:mt-8 mb-8 md:mb-16 text-center py-8 md:py-12 rounded-lg">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-600 mb-4 md:mb-8">Client Diaries</h2>
        <div className="relative w-full max-w-4xl mx-auto mt-4 md:mt-6 flex items-center justify-center">
          <button onClick={prevtest} className="absolute left-0 bg-white p-2 md:p-3 rounded-full z-10 shadow-md hover:shadow-lg text-purple-600 transition-all">⬅</button>
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
          <button onClick={nexttest} className="absolute right-0 bg-white p-2 md:p-3 rounded-full z-10 shadow-md hover:shadow-lg text-purple-600 transition-all">➡</button>
        </div>
      </div>

    </div>
  );
}