"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export const dynamic = "force-dynamic"; // Ensures Next.js renders this page dynamically

export default function Books() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const books = [
    {
      items: [
        {
          title: "Developing Leaders",
          author: "Shweta Vora",
          image: "/Developing-leaders.png",
          description: "Master the art of leadership development",
          link: "/developing-leaders",
        },
        {
          title: "Leadership Mindset",
          author: "Shweta Vora",
          image: "/Leadership-mindset.png",
          description: "Transform your perspective on leadership",
          link: "/leadership-mindset",
        },
        {
          title: "Leadership Vibes",
          author: "Shweta Vora",
          image: "/Leadership-Vibes.jpg",
          description: "Connect with the essence of true leadership",
          link: "/leadership-vibes",
        },
        {
          title: "Leading Development",
          author: "Shweta Vora",
          image: "/Leading-Development.png",
          description: "Guide the path of growth and progress",
          link: "/leading-development",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {books.map((category, index) => (
          <div key={index} className="mb-16">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {category.items.map((book, bookIndex) => (
                <motion.div
                  key={bookIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: bookIndex * 0.1 }}
                >
                  {isClient && (
                    <CardContainer className="w-full">
                      <CardBody className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 border-2 border-purple-100 p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="w-full md:w-1/2 relative min-h-[300px] bg-gradient-to-br from-purple-50 to-white">
                            <CardItem translateZ="50" className="w-full h-full relative">
                              <Image
                                src={book.image}
                                alt={book.title}
                                width={300}
                                height={300}
                                className="object-contain p-6"
                                priority
                              />
                            </CardItem>
                          </div>
                          <div className="p-8 w-full md:w-1/2 flex flex-col justify-center space-y-4">
                            <CardItem translateZ="60" className="text-2xl font-bold text-[#663399]">
                              {book.title}
                            </CardItem>
                            <CardItem translateZ="50" className="text-purple-600 font-medium">
                              by {book.author}
                            </CardItem>
                            <CardItem translateZ="40" className="text-gray-700 leading-relaxed">
                              {book.description}
                            </CardItem>
                            <CardItem translateZ="70">
                              <Link
                                href={book.link}
                                className="inline-block mt-4 px-8 py-3 bg-[#663399] text-white rounded-lg shadow-lg hover:bg-purple-700 hover:shadow-xl transition-all duration-300 text-base font-semibold text-center transform hover:-translate-y-1"
                              >
                                Explore Book
                              </Link>
                            </CardItem>
                          </div>
                        </div>
                      </CardBody>
                    </CardContainer>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
