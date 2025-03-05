"use client";

import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const dynamic = "force-dynamic"; // Ensures Next.js renders this page dynamically

export default function Booking() {
  const [isClient, setIsClient] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [timeSlot, setTimeSlot] = useState("");

  useEffect(() => {
    setIsClient(true);
    setDate(new Date());
  }, []);

  const timeSlots = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"];

  const handleDateChange = (selectedDate: Date | Date[]) => {
    if (selectedDate instanceof Date) {
      setDate(selectedDate);
    } else if (Array.isArray(selectedDate) && selectedDate.length > 0) {
      setDate(selectedDate[0]);
    }
    setTimeSlot("");
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
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#663399] to-purple-500 text-center mb-4">
          Book a Call with Shweta
        </h1>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Select a date and time for your leadership consultation
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-[#663399] transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-[#663399] mb-6">
              Available Days: Wednesdays & Fridays
            </h2>

            <Calendar
              onChange={(value) => handleDateChange(value as Date | Date[])}
              value={date}
              minDate={new Date()}
              className="mx-auto"
              locale="en-US"
              tileDisabled={tileDisabled}
            />
          </div>

          {/* Time Slot Section */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-[#663399] transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-[#663399] mb-6">
              Available Time Slots
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setTimeSlot(slot)}
                  className={`p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    timeSlot === slot
                      ? "bg-[#663399] text-white font-bold shadow-lg"
                      : "bg-purple-50 hover:bg-purple-100 text-[#663399] border border-purple-200"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>

            {/* Confirmation Section */}
            {timeSlot && (
              <div className="mt-8 bg-purple-50 p-6 rounded-xl border border-purple-200 animate-fade-in">
                <h3 className="text-xl font-semibold text-[#663399] mb-4">Your Selected Schedule</h3>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center">
                    <p className="text-gray-700 font-medium">
                      {date.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-gray-700 font-medium">{timeSlot}</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg border-2 border-purple-300 shadow-inner">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-gray-700">Consultation Fee:</p>
                    <p className="text-2xl font-bold text-[#663399]">₹1,700 INR</p>
                  </div>
                </div>

                <button className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-[#663399] to-purple-600 text-white text-lg font-bold rounded-lg shadow-lg hover:shadow-purple-300/50 transition-all duration-300 transform hover:translate-y-[-2px]">
                  Confirm Booking
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
