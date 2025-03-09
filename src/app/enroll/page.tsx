'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function EnrollPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100"
        >
          <h2 className="text-3xl font-bold text-[#663399] mb-8 text-center">Enroll</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone No. *</label>
              <input
                type="tel"
                id="phone"
                required
                className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                id="address"
                rows={3}
                className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
              <textarea
                id="notes"
                rows={3}
                className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-[#663399] to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-300/50 transition-all duration-300"
              >
                Lead
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}