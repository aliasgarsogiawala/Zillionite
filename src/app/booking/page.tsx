'use client';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Booking() {
    const [date, setDate] = useState<Date | null>(null);
    const [timeSlot, setTimeSlot] = useState('');
    
    const timeSlots = [
        '10:00 AM', '11:00 AM', '2:00 PM', 
        '3:00 PM', '4:00 PM', '5:00 PM'
    ];
    
    useEffect(() => {
        setDate(new Date());
    }, []);

    const handleDateChange = (selectedDate: Date) => {
        setDate(selectedDate);
        setTimeSlot('');
    };

    if (!date) {
        return <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>;
    }

    return (
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12">
            <h1 className="text-4xl font-bold text-[#663399] text-center mb-8">
                Book a Call with Shweta
            </h1>
            <p className="text-gray-600 text-center mb-12">
                Select a date and time for your leadership consultation
            </p>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-xl">
                    <Calendar 
                        onChange={handleDateChange} 
                        value={date}
                        minDate={new Date()}
                        className="mx-auto"
                        locale="en-US" 
                    />
                </div>

                <div className="bg-white p-6 rounded-lg shadow-xl">
                    <h2 className="text-2xl font-bold text-[#663399] mb-4">
                        Available Time Slots
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        {timeSlots.map((slot) => (
                            <button
                                key={slot}
                                onClick={() => setTimeSlot(slot)}
                                className={`p-3 rounded-lg transition-all duration-300 ${
                                    timeSlot === slot
                                        ? 'bg-[#663399] text-white'
                                        : 'bg-gray-100 hover:bg-purple-100'
                                }`}
                            >
                                {slot}
                            </button>
                        ))}
                    </div>

                    {timeSlot && (
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Selected Schedule:
                            </h3>
                            <p className="text-gray-600">
                                Date: {date.toLocaleDateString()}
                            </p>
                            <p className="text-gray-600 mb-6">
                                Time: {timeSlot}
                            </p>
                            <button className="w-full px-6 py-3 bg-[#663399] text-white rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300">
                                Confirm Booking
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}