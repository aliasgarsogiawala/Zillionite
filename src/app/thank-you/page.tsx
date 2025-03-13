"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

// Define a proper interface for the booking object
interface Booking {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  timeSlot?: string;
  sessionType: string;
  amount: number;
  status: 'pending' | 'confirmed';
  paymentId?: string;
}

// Create a client component that uses useSearchParams
function ThankYouClient() {
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('booking');
  const paymentId = searchParams.get('payment_id');
  const paymentStatus = searchParams.get('payment_status');

  useEffect(() => {
    const storedBooking = localStorage.getItem('zillionite_booking');
    
    if (storedBooking) {
      const bookingData = JSON.parse(storedBooking);
      
      if (paymentId || (bookingId && bookingId === bookingData.id)) {
        bookingData.status = paymentStatus === 'Credit' ? 'confirmed' : 'pending';
        bookingData.paymentId = paymentId || 'manual_confirmation';
        localStorage.setItem('zillionite_booking', JSON.stringify(bookingData));
      }
      
      setBooking(bookingData);
    } else if (paymentId) {
      setBooking({
        id: bookingId || 'unknown',
        status: paymentStatus === 'Credit' ? 'confirmed' : 'pending',
        paymentId: paymentId,
        amount: 1700,
        sessionType: 'Leadership Consultation'
      });
    }
    
    setLoading(false);
  }, [bookingId, paymentId, paymentStatus]);

  // If we're redirected from Instamojo but don't have payment confirmation,
  // show a checking payment status message
  if (bookingId && !paymentId && !loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-6"></div>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Verifying Payment</h1>
          <p className="text-gray-600 mb-8">Please wait while we confirm your payment status...</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">No Booking Found</h1>
          <p className="text-gray-600 mb-8">We couldn&apos;t find any booking information.</p>
          <Link href="/booking" className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
            Book a Session
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 bg-[#663399] text-white">
            <h1 className="text-3xl font-bold tracking-tight">
              {booking.status === 'confirmed' ? 'Payment Confirmed!' : 'Thank You for Booking'}
            </h1>
            <p className="mt-2 opacity-90 font-light">
              {booking.status === 'confirmed' 
                ? 'Your payment has been successfully processed.' 
                : 'Your booking is pending payment confirmation.'}
            </p>
          </div>
          
          <div className="p-8">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-6">
                {booking.status === 'confirmed' ? (
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                )}
              </div>
              
              <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
                Booking Details
              </h2>
              
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 mb-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Booking ID:</span>
                    <span className="font-medium">{booking.id}</span>
                  </div>
                  {booking.name && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-medium">{booking.name}</span>
                    </div>
                  )}
                  {booking.date && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">
                        {new Date(booking.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  )}
                  {booking.timeSlot && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium">{booking.timeSlot}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Session Type:</span>
                    <span className="font-medium">{booking.sessionType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount Paid:</span>
                    <span className="font-medium">₹{booking.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className={`font-medium ${booking.status === 'confirmed' ? 'text-green-600' : 'text-yellow-600'}`}>
                      {booking.status === 'confirmed' ? 'Payment Confirmed' : 'Pending Payment'}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Payment actions section */}
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  {booking.status === 'confirmed' 
                    ? 'We have sent a confirmation email with all the details to your registered email address.' 
                    : 'Please complete the payment to confirm your booking.'}
                </p>
                
                {booking.status !== 'confirmed' && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-3">
                      Already completed payment? Click below to confirm:
                    </p>
                    <button 
                      onClick={() => {
                        const updatedBooking = {...booking, status: 'confirmed'};
                        localStorage.setItem('zillionite_booking', JSON.stringify(updatedBooking));
                        setBooking(updatedBooking as Booking);
                      }}
                      className="px-6 py-3 mb-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                      I&apos;ve Completed Payment
                    </button>
                  </div>
                )}
                
                <Link href="/" className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main component with Suspense boundary
export default function ThankYou() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    }>
      <ThankYouClient />
    </Suspense>
  );
}