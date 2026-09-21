'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const timeSlots = [
  '8:00 AM', '8:05 AM', '8:10 AM', '8:15 AM', '8:20 AM', '8:25 AM', '8:30 AM',
  '10:00 AM', '10:05 AM', '10:10 AM', '10:15 AM', '10:20 AM', '10:25 AM', '10:30 AM',
  '11:05 AM', '11:10 AM', '11:15 AM', '11:20 AM', '11:25 AM', '11:30 AM', '11:35 AM',
];

const days = [
  { day: 'Friday', date: 'Apr 17', label: 'TOMORROW' },
  { day: 'Saturday', date: 'Apr 18', label: 'THIS WEEK' },
  { day: 'Sunday', date: 'Apr 19', label: 'NEXT WEEK' },
  { day: 'Monday', date: 'Apr 20', label: 'NEXT WEEK' },
  { day: 'Tuesday', date: 'Apr 21', label: 'NEXT WEEK' },
];

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedDay, setSelectedDay] = useState(days[0].date);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#F0F0F0] text-[#333] font-sans pt-10 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-6 px-4 mb-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Link href="/" className="flex items-center gap-2 mb-4 group">
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium uppercase tracking-wider">Select Appointment</span>
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-black tracking-tighter mb-1">414</h1>
            <p className="text-[10px] font-bold tracking-[0.4em] text-accent-teal uppercase">CAR DETAILING</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4">
        {/* Step Indicator */}
        <div className="flex justify-center mb-8 gap-8">
          <div className={cn("flex items-center gap-2", step === 1 ? "text-accent-teal" : "text-gray-400")}>
            <div className={cn("w-8 h-8 rounded-full flex items-center justify-center font-bold border-2", step === 1 ? "border-accent-teal" : "border-gray-300")}>1</div>
            <span className="font-bold uppercase text-xs tracking-widest">Date & Time</span>
          </div>
          <div className={cn("flex items-center gap-2", step === 2 ? "text-accent-teal" : "text-gray-400")}>
            <div className={cn("w-8 h-8 rounded-full flex items-center justify-center font-bold border-2", step === 2 ? "border-accent-teal" : "border-gray-300")}>2</div>
            <span className="font-bold uppercase text-xs tracking-widest">Information</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              {/* Service Summary Card */}
              <div className="bg-[#D1D5DB] p-8 rounded-lg relative">
                <button className="absolute top-4 right-4 text-gray-600 hover:text-black">×</button>
                <h3 className="text-lg font-bold mb-1">Exterior Detail</h3>
                <p className="text-sm text-gray-700 mb-4">1 hour @ CA$80.00</p>
                <p className="text-xs text-gray-600 leading-relaxed max-w-2xl">
                  Thorough hand wash and clay bar treatment to remove stubborn contaminants. Wheels are deep-cleaned, tires dressed for protection and shine, and a high-quality wax is applied to the paint for lasting gloss and protection.
                </p>
              </div>

              {/* Add-ons */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">Add to Appointment</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'Engine Bay washing', time: '30 minutes', price: 'CA$50.00' },
                    { name: 'Headlight Restoration', time: '45 minutes', price: 'CA$140.00' }
                  ].map((addon) => (
                    <div key={addon.name} className="bg-[#D1D5DB] p-6 rounded-lg flex items-start gap-4">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-400 text-accent-teal focus:ring-accent-teal" />
                      <div>
                        <p className="font-bold text-sm">{addon.name}</p>
                        <p className="text-xs text-gray-600">+{addon.time} @ {addon.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-center mb-8">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Time Zone: Eastern Time - Toronto (GMT-04:00)</p>
                </div>

                <div className="grid grid-cols-5 gap-4">
                  {days.map((d) => (
                    <div key={d.date} className="text-center">
                      <p className="text-[10px] font-bold text-gray-400 mb-1">{d.label}</p>
                      <p className="font-bold text-sm">{d.day}</p>
                      <p className="text-xs text-gray-500 mb-6">{d.date}</p>
                      
                      <div className="space-y-2">
                        {timeSlots.slice(0, 7).map((time) => (
                          <button
                            key={time}
                            onClick={() => {
                              setSelectedTime(time);
                              setSelectedDay(d.date);
                              setStep(2);
                            }}
                            className={cn(
                              "w-full py-3 border border-gray-200 rounded text-sm font-medium transition-all",
                              selectedTime === time && selectedDay === d.date
                                ? "bg-accent-teal text-white border-accent-teal"
                                : "hover:bg-[#E0F5F5] hover:border-accent-teal/30"
                            )}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-8">Your Information</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">First Name *</label>
                      <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-accent-teal outline-none transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Last Name *</label>
                      <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-accent-teal outline-none transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone *</label>
                    <div className="flex items-center gap-2 border-b border-gray-300 py-2">
                      <span className="text-lg">🇨🇦</span>
                      <span className="text-gray-500 text-sm">+1</span>
                      <input type="tel" className="w-full focus:border-accent-teal outline-none transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email *</label>
                    <input type="email" className="w-full border-b border-gray-300 py-2 focus:border-accent-teal outline-none transition-colors" />
                  </div>
                </form>
              </div>

              {/* Booking Summary */}
              <div className="bg-[#E5E7EB] p-8 rounded-lg">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-bold">Exterior Detail</h4>
                    <p className="text-sm text-gray-600">Friday, April 17, 2026 at {selectedTime}</p>
                    <p className="text-xs text-gray-500">1 hour @ CA$80.00</p>
                  </div>
                  <CheckCircle className="text-accent-teal" size={24} />
                </div>
                <button 
                  onClick={() => alert('Esto es una demostración: no se guardó ninguna reserva ni ningún dato. Este proyecto no acepta reservas.')}
                  className="w-full bg-accent-teal text-white font-bold py-4 rounded shadow-lg shadow-accent-teal/20 hover:brightness-105 transition-all"
                >
                  Complete Appointment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default BookingPage;