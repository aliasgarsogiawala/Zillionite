"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bookings, setBookings] = useState<any[]>([]);
  const [error, setError] = useState("");
  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    const adminLoggedIn = localStorage.getItem("zillionite_admin_logged_in");
    if (adminLoggedIn === "true") {
      setIsLoggedIn(true);
      loadBookings();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication - in a real app, use proper authentication
    if (username === "admin" && password === "zillionite2023") {
      setIsLoggedIn(true);
      localStorage.setItem("zillionite_admin_logged_in", "true");
      loadBookings();
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("zillionite_admin_logged_in");
  };

  const loadBookings = () => {
    // In a real application, you would fetch this from an API
    // For now, we'll just get bookings from localStorage
    const allBookings = [];
    
    // Try to get the current booking
    const currentBooking = localStorage.getItem("zillionite_booking");
    if (currentBooking) {
      allBookings.push(JSON.parse(currentBooking));
    }
    
    setBookings(allBookings);
  };

  const updateBookingStatus = (bookingId: string, status: string) => {
    const updatedBookings = bookings.map(booking => {
      if (booking.id === bookingId) {
        booking.status = status;
        // If this is the current booking, update localStorage
        if (localStorage.getItem("zillionite_booking")) {
          const currentBooking = JSON.parse(localStorage.getItem("zillionite_booking") || "{}");
          if (currentBooking.id === bookingId) {
            localStorage.setItem("zillionite_booking", JSON.stringify({...currentBooking, status}));
          }
        }
      }
      return booking;
    });
    
    setBookings(updatedBookings);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12">
        <div className="container mx-auto px-6 max-w-md">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 bg-[#663399] text-white">
              <h1 className="text-3xl font-bold tracking-tight">Admin Login</h1>
              <p className="mt-2 opacity-90 font-light">
                Please login to access the admin panel
              </p>
            </div>
            
            <div className="p-8">
              {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Login
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <Link href="/" className="text-purple-600 hover:text-purple-800">
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 bg-[#663399] text-white flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
              <p className="mt-2 opacity-90 font-light">
                Manage bookings and settings
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-white text-purple-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Logout
            </button>
          </div>
          
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Bookings</h2>
            
            {bookings.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No bookings found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100 border-b">
                      <th className="py-3 px-4 text-left">Booking ID</th>
                      <th className="py-3 px-4 text-left">Name</th>
                      <th className="py-3 px-4 text-left">Date</th>
                      <th className="py-3 px-4 text-left">Time</th>
                      <th className="py-3 px-4 text-left">Amount</th>
                      <th className="py-3 px-4 text-left">Status</th>
                      <th className="py-3 px-4 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{booking.id}</td>
                        <td className="py-3 px-4">{booking.name}</td>
                        <td className="py-3 px-4">
                          {new Date(booking.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </td>
                        <td className="py-3 px-4">{booking.timeSlot}</td>
                        <td className="py-3 px-4">₹{booking.amount}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              booking.status === "confirmed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {booking.status === "confirmed" ? "Confirmed" : "Pending"}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          {booking.status === "pending" ? (
                            <button
                              onClick={() => updateBookingStatus(booking.id, "confirmed")}
                              className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                            >
                              Confirm
                            </button>
                          ) : (
                            <button
                              onClick={() => updateBookingStatus(booking.id, "pending")}
                              className="px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700"
                            >
                              Mark as Pending
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}