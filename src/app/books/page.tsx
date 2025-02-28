'use client';
import Image from 'next/image';
import  Link  from 'next/link';

export default function Books() {
    const books = [
        {
            category: "Leadership Collection",
            items: [
                {
                    title: "Developing Leaders",
                    author: "Shweta Vora",
                    image: "/Developing-leaders.png",
                    description: "Master the art of leadership development"
                },
                {
                    title: "Leadership Mindset",
                    author: "Shweta Vora",
                    image: "/Leadership-mindset.png",
                    description: "Transform your perspective on leadership"
                },
                {
                    title: "Leadership Vibes",
                    author: "Shweta Vora",
                    image: "/Leadership-Vibes.jpg",
                    description: "Connect with the essence of true leadership"
                },
                {
                    title: "Leading Development",
                    author: "Shweta Vora",
                    image: "/Leading-Development.png",
                    description: "Guide the path of growth and progress"
                }
            ]
        }
    ];

    return (
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12">
            <h1 className="text-4xl font-bold text-[#663399] text-center mb-16">
                Leadership Excellence Series
            </h1>

            {books.map((category, index) => (
                <div key={index} className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {category.items.map((book, bookIndex) => (
                            <div 
                                key={bookIndex} 
                                className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform hover:scale-105 flex flex-col md:flex-row"
                            >
                                <div className="w-full md:w-1/2 relative min-h-[300px]">
                                    <Image
                                        src={book.image}
                                        alt={book.title}
                                        fill
                                        className="object-contain p-4"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                </div>
                                <div className="p-6 w-full md:w-1/2 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-[#663399] mb-3">
                                        {book.title}
                                    </h3>
                                    <p className="text-gray-600 mb-3">
                                        by {book.author}
                                    </p>
                                    <p className="text-gray-700">
                                        {book.description}
                                    </p>
                                    <Link href="developing-leaders" className="mt-4 px-6 py-2 bg-[#663399] text-white rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300 text-sm font-semibold">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            
        </div>
    );
}