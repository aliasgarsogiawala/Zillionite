"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface FloatingLogo {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Connect() {
  const router = useRouter();
  // Define a type for the form data
  interface FormData {
    name: string;
    phone: string;
    email: string;
    entity: string;
    notes: string;
    [key: string]: string; 
  }
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    entity: "",
    notes: "",
  });
  
  const [floatingLogos, setFloatingLogos] = useState<FloatingLogo[]>([]);
  
  useEffect(() => {
    const logos: FloatingLogo[] = [];
    for (let i = 0; i < 15; i++) {
      logos.push({
        id: i, 
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 50 + 20, // 20px - 40px
        duration: Math.random() * 20 + 10, // 10-30s
        delay: Math.random() * 5, // 0-5s
      });
    }
    setFloatingLogos(logos);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    router.push('/thank-you');
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12 relative overflow-hidden">
      {/* Floating Logos Animation - Only render when logos are available */}
      {floatingLogos.length > 0 && floatingLogos.map((logo) => (
        <motion.div
          key={logo.id}
          className="absolute opacity-10 pointer-events-none"
          style={{
            left: `${logo.x}%`,
            top: `${logo.y}%`,
            width: `${logo.size}px`,
            height: `${logo.size}px`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: logo.duration,
            delay: logo.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Image src="/Circular-Logo.png" alt="Zillionite Logo" width={logo.size} height={logo.size} className="w-full h-full object-contain" />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 py-8 relative z-10"
      >
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-[#663399] backdrop-blur-sm bg-white/90">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-500 mb-2">
              Connect With Us
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Ready to unlock Wealth?<br />
              Let&apos;s Connect and Transform Your Leadership Journey
            </p>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "phone", "email", "entity"].map((field) => (
              <div key={field} className="group">
                <label htmlFor={field} className="block text-gray-700 mb-2 font-medium capitalize">
                  {field} *
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder={`Your ${field}`}
                />
              </div>
            ))}

            <div className="group">
              <label htmlFor="notes" className="block text-gray-700 mb-2 font-medium">Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md h-32"
                placeholder="Mention the details of payment for product or service"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-[#663399] to-purple-600 text-white py-3 px-6 rounded-lg font-bold text-lg shadow-lg hover:shadow-purple-200 transition-all duration-300"
            >
              LEAD
            </motion.button>
          </form>

          {/* Social Links */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-4">Connect with us on social media</p>
            <div className="flex justify-center space-x-8">
              <Link href="https://www.youtube.com/channel/UCZ9xEshbhWnyI7MgsfIKexA" target="_blank" className="text-gray-600 hover:text-[#663399] transition-colors duration-300 text-lg font-medium">
                YouTube
              </Link>
              <Link href="https://www.linkedin.com/company/zillionite/posts/" target="_blank" className="text-gray-600 hover:text-[#663399] transition-colors duration-300 text-lg font-medium">
                LinkedIn
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#663399] transition-colors duration-300 text-lg font-medium">
                Profile
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
