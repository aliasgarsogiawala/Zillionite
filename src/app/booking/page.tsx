"use client";

import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useIsClient } from "../utils/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Add Razorpay type declaration
declare global {
  interface Window {
    Razorpay: any;
  }
}

export const dynamic = "force-dynamic"; // Ensures Next.js renders this page dynamically

export default function Booking() {
  const isClient = useIsClient();
  const [date, setDate] = useState<Date | null>(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [step, setStep] = useState(1); // 1: Date selection, 2: Time selection, 3: Confirmation
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (isClient) {
      setDate(new Date());
      
      // Load Razorpay script
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isClient]);

  const timeSlots = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM"];

  const handleDateChange = (selectedDate: Date | Date[]) => {
    if (selectedDate instanceof Date) {
      setDate(selectedDate);
      setStep(2); 
    } else if (Array.isArray(selectedDate) && selectedDate.length > 0) {
      setDate(selectedDate[0]);
      setStep(2);
    }
    setTimeSlot("");
  };

  const handleTimeSelection = (slot: string) => {
    setTimeSlot(slot);
    setStep(3); 
  };
  // Move these functions here, before the return statement
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = () => {
    if (!customerDetails.name || !customerDetails.email || !customerDetails.phone) {
      alert("Please fill in all required fields");
      return;
    }
    
    setLoading(true);
    
    try {
      // In a real implementation, you would make an API call to your backend
      // to create an order and get an order ID from Razorpay
      
      // For demo purposes, we'll use direct checkout
      const options = {
        key: "rzp_test_YOUR_KEY_ID", // Replace with your Razorpay key
        amount: 170000, // Amount in paise (₹1,700)
        currency: "INR",
        name: "Zillionite",
        description: "Leadership Consultation",
        image: "/Circular-Logo.png",
        handler: function(response: any) {
          // Handle successful payment
          console.log("Payment successful", response);
          router.push('/thank-you');
        },
        prefill: {
          name: customerDetails.name,
          email: customerDetails.email,
          contact: customerDetails.phone
        },
        notes: {
          booking_date: date?.toISOString(),
          time_slot: timeSlot
        },
        theme: {
          color: "#663399"
        }
      };
      
      const razorpay = new window.Razorpay(options);
      razorpay.open();
      setLoading(false);
    } catch (error) {
      console.error("Payment error:", error);
      setLoading(false);
      alert("Payment initialization failed. Please try again.");
    }
  };

  const isWednesdayOrFriday = ({ date }: { date: Date }) => {
    const day = date.getDay();
    return day === 3 || day === 5;
  };

  const tileDisabled = ({ date }: { date: Date }) => !isWednesdayOrFriday({ date });

  if (!isClient || !date) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-10">
            <div className="flex items-center justify-center mb-6">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                    step >= s ? "bg-[#663399] text-white" : "bg-gray-200 text-gray-500"
                  }`}>
                    {s}
                  </div>
                  {s < 3 && (
                    <div className={`w-24 h-1 ${step > s ? "bg-[#663399]" : "bg-gray-200"}`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between px-4">
              <span className="text-sm font-medium text-gray-600">Select Date</span>
              <span className="text-sm font-medium text-gray-600">Choose Time</span>
              <span className="text-sm font-medium text-gray-600">Confirm</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 bg-[#663399] text-white">
              <h1 className="text-3xl font-bold tracking-tight">Book a Leadership Consultation</h1>
              <p className="mt-2 opacity-90 font-light">Schedule a one-on-one session with Shweta Vora</p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Expert Profile */}
                <div className="md:col-span-1">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-purple-100 shadow-lg">
                      <Image 
                        src="/Shweta-Zillionite.jpeg" 
                        alt="Shweta Vora" 
                        width={128} 
                        height={128}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/128?text=SV";
                        }}
                      />
                    </div>
                    <h2 className="mt-4 text-xl font-bold text-gray-800">Shweta Vora</h2>
                    <p className="text-purple-600 font-medium text-sm">Leadership Coach</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2 text-base">About the Session</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <span className="mr-2">⏱️</span>
                        <span>30 minutes</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">💼</span>
                        <span>Leadership assessment & guidance</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🌐</span>
                        <span>Online via Zoom</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">💰</span>
                        <span>₹1,700 INR</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="md:col-span-2">
                  {/* Step 1: Date Selection */}
                  {step === 1 && (
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Select a Date
                      </h2>
                      <p className="text-gray-600 mb-6 text-sm">
                        Shweta is available on Wednesdays and Fridays
                      </p>
                      
                      <div className="custom-calendar">
                        <Calendar
                          onChange={(value) => handleDateChange(value as Date | Date[])}
                          value={date}
                          minDate={new Date()}
                          className="mx-auto rounded-lg shadow-md"
                          locale="en-US"
                          tileDisabled={tileDisabled}
                          tileClassName={({ date, view }) => 
                            isWednesdayOrFriday({ date }) ? 'available-date' : ''
                          }
                        />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <div className="flex items-center mb-6">
                        <button 
                          onClick={() => setStep(1)} 
                          className="text-purple-600 hover:text-purple-800 mr-2"
                        >
                          ← Back
                        </button>
                        <h2 className="text-xl font-semibold text-gray-800">
                          Select a Time Slot
                        </h2>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm">
                        Selected Date: {date.toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => handleTimeSelection(slot)}
                            className="p-4 rounded-lg border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-md text-center"
                          >
                            <span className="block text-gray-800 font-medium text-base">{slot}</span>
                            <span className="text-xs text-gray-500">30 min</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Confirmation */}
                  {step === 3 && (
                    <div>
                      <div className="flex items-center mb-6">
                        <button 
                          onClick={() => setStep(2)} 
                          className="text-purple-600 hover:text-purple-800 mr-2"
                        >
                          ← Back
                        </button>
                        <h2 className="text-xl font-semibold text-gray-800">
                          Confirm Your Booking
                        </h2>
                      </div>
                      
                      <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 mb-6">
                        <h3 className="font-semibold text-gray-700 mb-4 text-base">Booking Details</h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Date:</span>
                            <span className="font-medium">{date.toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Time:</span>
                            <span className="font-medium">{timeSlot}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Duration:</span>
                            <span className="font-medium">30 minutes</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Session Type:</span>
                            <span className="font-medium">Leadership Consultation</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Customer Information Form */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-gray-700 mb-4 text-base">Your Information</h3>
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={customerDetails.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={customerDetails.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="john@example.com"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={customerDetails.phone}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="+91 98765 43210"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg border-2 border-purple-200 p-4 mb-8">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-gray-600">Consultation Fee</p>
                            <p className="text-xs text-gray-500">(Includes GST)</p>
                          </div>
                          <p className="text-2xl font-bold text-[#663399]">₹1,700</p>
                        </div>
                      </div>
                      
                      <button 
                        onClick={handlePayment}
                        disabled={loading}
                        className={`w-full py-4 bg-gradient-to-r from-[#663399] to-purple-600 text-white text-lg font-bold rounded-lg shadow-lg transition-all duration-300 ${
                          loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-purple-300/50'
                        }`}
                      >
                        {loading ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          "Proceed to Payment"
                        )}
                      </button>
                      
                      <p className="text-xs text-gray-500 text-center mt-4">
                        By proceeding, you agree to our Terms of Service and Privacy Policy
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .react-calendar {
          width: 100%;
          border: none;
          font-family: inherit;
          line-height: 1.5;
        }
        .react-calendar__tile {
          padding: 1em 0.5em;
          height: 60px;
          font-size: 0.9rem;
        }
        .react-calendar__month-view__weekdays {
          font-size: 0.85rem;
          font-weight: 600;
        }
        .react-calendar__tile--active {
          background: #663399;
          color: white;
        }
        .react-calendar__tile--active:enabled:hover,
        .react-calendar__tile--active:enabled:focus {
          background: #5a2d8a;
        }
        .react-calendar__tile:disabled {
          background-color: #f5f5f5;
          color: #ccc;
        }
        .available-date:not(.react-calendar__tile--active) {
          background-color: #f0e6ff;
          color: #663399;
        }
        .react-calendar__navigation button {
          color: #663399;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
