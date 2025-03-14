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
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-purple-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#663399] mb-2 text-center">Enroll Now</h2>
          <p className="text-gray-600 text-center mb-8">Join our leadership development program</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone No. *</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                id="email"
                required
                className="block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea
                id="address"
                rows={3}
                className="block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors resize-none"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Your complete address"
              />
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
              <textarea
                id="notes"
                rows={3}
                className="block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors resize-none"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Any additional information you'd like to share"
              />
            </div>

            <div className="flex justify-center pt-6">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-gradient-to-r from-[#663399] to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-300/50 transition-all duration-300"
              >
                Submit Application
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}