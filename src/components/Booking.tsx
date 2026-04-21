import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Clock, 
  MessageSquare, 
  ChevronLeft, 
  ChevronRight,
  Info
} from 'lucide-react';

const timeSlots = [
  '09:00', '10:30', '11:15',
  '14:00', '15:30', '16:45',
  '18:00', '19:30', '20:15'
];

const daysInMonth = [
  null, null, null, 1, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18,
  19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30
];

export default function Booking() {
  const [selectedDay, setSelectedDay] = useState<number | null>(22);
  const [selectedTime, setSelectedTime] = useState<string>('18:00');

  const handleWhatsAppBooking = () => {
    const dateStr = `April ${selectedDay}, 2026`;
    const message = `Hello Klinik Oasis! 👋\n\nI'd like to book an appointment.\n\n📅 Date: ${dateStr}\n⏰ Time: ${selectedTime}\n\nPlease confirm if this slot is available. Thank you!`;
    window.open(`https://wa.me/60377342424?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl font-bold text-blue-900 mb-4"
          >
            Live Appointment Scheduler
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm">
            Choose a date to see available time slots. Green dots indicate high availability days.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Calendar Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-blue-900/5"
            >
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h3 className="text-4xl font-serif font-bold text-blue-900">April</h3>
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mt-1">2026 Availability</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-3 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-100 transition-all"><ChevronLeft size={20} /></button>
                  <button className="p-3 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-100 transition-all"><ChevronRight size={20} /></button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-y-6 text-center text-xs">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                  <span key={day} className="font-bold text-slate-300 uppercase tracking-widest mb-4">{day}</span>
                ))}
                
                {daysInMonth.map((day, idx) => (
                  <div key={idx} className="flex justify-center">
                    {day !== null ? (
                      <button
                        onClick={() => setSelectedDay(day)}
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex flex-col items-center justify-center transition-all relative ${
                          selectedDay === day 
                            ? 'bg-blue-600 text-white shadow-2xl shadow-blue-400 scale-110 z-10' 
                            : 'hover:bg-blue-50 text-slate-400 font-semibold'
                        }`}
                      >
                        <span className="text-base md:text-lg">{day}</span>
                        {selectedDay !== day && (
                          <div className={`w-1 h-1 rounded-full absolute bottom-2 ${day % 3 === 0 ? 'bg-red-400' : 'bg-emerald-400'}`} />
                        )}
                        {selectedDay === day && (
                           <div className="w-1.5 h-1.5 bg-white rounded-full absolute bottom-2" />
                        )}
                      </button>
                    ) : (
                      <div className="w-12 h-12 md:w-14 md:h-14" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Time Slots Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-blue-900/5 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">Select Time</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Limited Slots Today</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-10">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-4 rounded-xl text-sm font-bold transition-all border ${
                      selectedTime === time 
                        ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-200 scale-105' 
                        : 'bg-white border-slate-100 text-slate-500 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              <div className="mt-auto space-y-8">
                <div className="bg-slate-50/50 rounded-3xl p-6 border border-slate-100 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-400">Selected Date</span>
                    <span className="font-bold text-slate-800 tracking-tight text-sm">
                      {selectedDay ? `Wed, ${selectedDay}nd Apr` : 'Pick a date'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-400">Preferred Time</span>
                    <span className="font-bold text-blue-600 text-sm">{selectedTime}</span>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full py-6 bg-blue-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-2xl shadow-blue-400/40 hover:bg-blue-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageSquare size={24} /> Book via WhatsApp
                </button>
                
                <div className="text-center">
                  <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em] flex items-center justify-center gap-2 mb-2">
                    <Info size={12} /> No upfront payment required
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
