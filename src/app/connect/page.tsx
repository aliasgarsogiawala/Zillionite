"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Connect() {  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    entity: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-[#663399] mb-2">Connect</h1>
        <p className="text-gray-600 mb-6">
          Ready to unlock Wealth?<br />
          Lets Connect
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-1">Phone No *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="entity" className="block text-gray-700 mb-1">Entity *</label>
            <input
              type="text"
              id="entity"
              name="entity"
              required
              value={formData.entity}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="notes" className="block text-gray-700 mb-1">Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-24"
              placeholder="Mention the details of payment for product or service"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#663399] text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
          >
            LEAD
          </button>
        </form>

        <div className="mt-8 flex justify-center space-x-4">
          <Link href="https://www.youtube.com/channel/UCZ9xEshbhWnyI7MgsfIKexA" target="_blank" className="text-gray-600 hover:text-[#663399]">Youtube</Link>
          <Link href="https://www.linkedin.com/company/zillionite/posts/" target="_blank" className="text-gray-600 hover:text-[#663399]">LinkedIn</Link>
          <Link href="#" className="text-gray-600 hover:text-[#663399]">Profile</Link>
        </div>
      </div>
    </div>
  );
}