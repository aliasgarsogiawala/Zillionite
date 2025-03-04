'use client';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Booking() {
    const [date, setDate] = useState<Date | null>(null);
    const [timeSlot, setTimeSlot] = useState('');
    
    const timeSlots = [
        '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM'
    ];
    
    useEffect(() => {
        setDate(new Date());
    }, []);

    const handleDateChange = (selectedDate: Date | Date[]) => {
        if (selectedDate instanceof Date) {
            setDate(selectedDate);
        } else if (Array.isArray(selectedDate) && selectedDate.length > 0) {
            setDate(selectedDate[0]);
        }
        setTimeSlot('');
    };

    const isWednesdayOrFriday = ({ date }: { date: Date }) => {
        const day = date.getDay();
        return day === 3 || day === 5;
    };

    const tileDisabled = ({ date }: { date: Date }) => {
        return !isWednesdayOrFriday({ date });
    };

    if (!date) {
        return <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>;
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
                    <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-[#663399] transform transition-all duration-300 hover:shadow-2xl">
                        <h2 className="text-xl font-semibold text-[#663399] mb-6 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Available Days: Wednesdays & Fridays
                        </h2>
                        
                        <style jsx global>{`
                            .react-calendar {
                                border: none;
                                border-radius: 0.5rem;
                                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                                font-family: system-ui, -apple-system, sans-serif;
                                width: 100%;
                            }
                            .react-calendar__tile {
                                padding: 1em 0.5em;
                                border-radius: 0.5rem;
                                transition: all 0.2s;
                            }
                            .react-calendar__tile:enabled:hover,
                            .react-calendar__tile:enabled:focus {
                                background-color: #f3e8ff;
                            }
                            .react-calendar__tile--active {
                                background: #663399 !important;
                                color: white;
                            }
                            .react-calendar__tile--now {
                                background: #f3e8ff;
                            }
                            .react-calendar__navigation button:enabled:hover,
                            .react-calendar__navigation button:enabled:focus {
                                background-color: #f3e8ff;
                            }
                            .react-calendar__month-view__days__day--weekend {
                                color: #663399;
                            }
                            .react-calendar__month-view__days__day--neighboringMonth {
                                color: #d1d5db;
                            }
                        `}</style>
                        
                        <Calendar 
                            onChange={(value) => handleDateChange(value as Date | Date[])} 
                            value={date}
                            minDate={new Date()}
                            className="mx-auto"
                            locale="en-US"
                            tileDisabled={tileDisabled}
                        />
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-[#663399] transform transition-all duration-300 hover:shadow-2xl">
                        <h2 className="text-xl font-semibold text-[#663399] mb-6 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Available Time Slots
                        </h2>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {timeSlots.map((slot) => (
                                <button
                                    key={slot}
                                    onClick={() => setTimeSlot(slot)}
                                    className={`p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                                        timeSlot === slot
                                            ? 'bg-[#663399] text-white font-bold shadow-lg'
                                            : 'bg-purple-50 hover:bg-purple-100 text-[#663399] border border-purple-200'
                                    }`}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>

                        {timeSlot && (
                            <div className="mt-8 bg-purple-50 p-6 rounded-xl border border-purple-200 animate-fade-in">
                                <h3 className="text-xl font-semibold text-[#663399] mb-4 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Your Selected Schedule
                                </h3>
                                <div className="flex flex-col space-y-3">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <p className="text-gray-700 font-medium">
                                            {date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
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