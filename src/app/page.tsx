"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {FaYoutube , FaLinkedin , FaEnvelope} from "react-icons/fa";
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
    }
  ]
  const slides = [
    {
      image: "/Developing-leaders.png",
      text: "Developing Leaders"
    },
    {
      image: "/Leading-Development.png",
      text: "Leading Development"
    }
  ];
  const slides2 = [
    {
      image: "/Leadership-mindset.png",
      text: "Leadership Mindset"
    },
    {
      image: "/Leadership-Vibes.jpg",
      text: "Leadership Vibes"
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
    const interval = setInterval(nexttest, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      
      <HeroSection/>
      <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-6 flex flex-col md:flex-row items-center gap-8">
        <div className="text-left w-full md:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#663399]">Hey, I am Shweta - Zillionite of Multiverses (:</h1>
          <p className="mt-4 text-lg text-gray-600">
            Gamed to Level Up Financial Leadership!<br></br>
            Definitive Winning Strategies to build Wealth for YOU.<br></br>
            So, what is your Leadership Challenge?
          </p>
          <input type="text" placeholder="Enter your Leadership Challenge" className="mt-4 px-4 py-2 w-full border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 transition" /><br></br>
          <Link href="/shweta" className="mt-6 px-6 py-3 bg-[#663399] text-white rounded-lg shadow-lg hover:bg-purple-700 transition">
            Lead
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/main.jpg" alt="Zillionite Preview" width={500} height={70} className="rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-12 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#663399] text-left">Business Leadership Books</h2>
        <div className="relative w-full max-w-4xl mx-auto mt-6 flex items-center">
          <button onClick={prevSlide} className="absolute -left-12 bg-gray-300 p-2 rounded-full">⬅</button>
          <div className="w-full flex flex-row items-center gap-6">
            <Image src={slides[currentSlide].image} alt="Book Image" width={500} height={500} className="rounded-lg shadow-lg" />
            <div className="flex flex-col items-start gap-4">
              <p className="text-3xl font-bold text-[#663399]">{slides[currentSlide].text}</p>
              <button className="px-6 py-3 bg-[#663399] text-white rounded-lg shadow-lg hover:bg-purple-700 transition">Lead</button>
            </div>
          </div>
          <button onClick={nextSlide} className="absolute -right-12 bg-gray-300 p-2 rounded-full">➡</button>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-12 mb-12 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#663399] text-left">Self Leadership Books</h2>
        <div className="relative w-full max-w-4xl mx-auto mt-6 flex items-center">
          <button onClick={prevslide} className="absolute -left-12 bg-gray-300 p-2 rounded-full">⬅</button>
          <div className="w-full flex flex-row items-center gap-6">
            <Image src={slides2[currentSlideTwo].image} alt="Book Image" width={500} height={500} className="rounded-lg shadow-lg" />
            <div className="flex flex-col items-start gap-4">
              <p className="text-3xl font-bold text-[#663399]">{slides2[currentSlideTwo].text}</p>
              <button className="px-6 py-3 bg-[#663399] text-white rounded-lg shadow-lg hover:bg-purple-700 transition">Lead</button>
            </div>
          </div>
          <button onClick={nextslide} className="absolute -right-12 bg-gray-300 p-2 rounded-full">➡</button>
        </div>
    </div>

    <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-6 flex flex-col md:flex-row items-center gap-8">
        <div className="text-left w-full md:w-1/2">
          <h1 className="text-4xl lg:text-4xl font-bold text-[#663399]">Thought Leadership - Finance Wisdom</h1>
          <p className="mt-4 text-lg text-gray-600">
          Design Wealth Map for each Financial Milestones<br></br>
          Know how to create Wealth - Money, Vision, Time and Impact- All of it!
          </p>
          <button className="mt-6 px-6 py-3 bg-[#663399] text-white rounded-lg shadow-lg hover:bg-purple-700 transition">
            Lead
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/pexels-crazy-motions-80195021-12198525.jpg" alt="Thought Leadership" width={350} height={30} className="rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-12 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#663399]">Client Diaries</h2>
        <div className="relative w-full max-w-4xl mx-auto mt-6 flex items-center justify-center">
          <button onClick={prevtest} className="absolute left-0 bg-gray-300 p-2 rounded-full z-10">⬅</button>
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
                  <Image
                    src={testimonial.image}
                    alt="Testimonial"
                    width={400}
                    height={500}
                    className="rounded-lg bg-white p-4"
                  />
                </motion.div>
              );
            })}
          </div>
          <button onClick={nexttest} className="absolute right-0 bg-gray-300 p-2 rounded-full z-10">➡</button>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 mt-6 flex flex-col md:flex-row items-center gap-8">
        <div className="text-left w-full md:w-1/2">
          <h1 className="text-4xl lg:text-4xl font-bold text-[#663399]">Lead To Last</h1>
          <p className="mt-4 text-lg text-gray-600">
          Build Leadership Skills with Experiential Leadership          
          </p>
          <button className="mt-6 px-6 py-3 bg-[#663399] text-white rounded-lg shadow-lg hover:bg-purple-700 transition">
            Lead
          </button>
        </div>
      </div>


      
    </div>
  );
}