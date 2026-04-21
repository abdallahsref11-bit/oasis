import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, Users, ArrowRight, MousePointer2 } from 'lucide-react';

export default function Hero() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-MY', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-MY', { weekday: 'long', day: 'numeric', month: 'long' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-20 flex items-center overflow-hidden mesh-gradient">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-12 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open Now — 24 Hours Service
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold text-blue-900 leading-[1.1] mb-6">
              Trusted Medical <br />
              Care <span className="text-blue-600 italic">24 Hours</span> <br />
              a Day.
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Oasis Klinik Ara Damansara provides premium, affordable, and professional healthcare 
              for your whole family. Located in the heart of Oasis Square.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="#booking"
                className="group px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-2"
              >
                Book Appointment <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/60377342424"
                className="px-8 py-4 bg-white text-slate-800 font-bold rounded-2xl hover:bg-slate-50 transition-all border border-slate-200 shadow-sm flex items-center gap-2"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="flex items-center gap-8 text-slate-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?u=${i}`}
                    alt="Patient"
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 tracking-tight">15k+ Satisfied Patients</p>
                <p className="text-xs">Highly rated on Google</p>
              </div>
            </div>
          </motion.div>

          {/* Real-time Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-[2.5rem] relative z-20">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <p className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-widest">{formatDate(time)}</p>
                  <h2 className="text-4xl font-serif font-bold text-blue-900">{formatTime(time)}</h2>
                </div>
                <div className="text-right">
                  <div className="inline-block p-3 bg-emerald-100 text-emerald-600 rounded-2xl mb-2">
                    <Clock size={24} />
                  </div>
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Always Open</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-blue-500" />
                      <span className="text-sm font-bold text-slate-700">Peak Hours Analysis</span>
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Live Data</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "45%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="h-full bg-blue-500 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <p className="text-xs text-slate-500 font-medium italic">Moderate Traffic</p>
                    <p className="text-xs font-bold text-slate-700">45% Capacity</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <p className="text-[10px] text-emerald-600 font-bold uppercase mb-1">Queue Time</p>
                    <p className="text-xl font-bold text-emerald-700 underline decoration-2 decoration-emerald-200">~15 Min</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <p className="text-[10px] text-blue-600 font-bold uppercase mb-1">Available Staff</p>
                    <p className="text-xl font-bold text-blue-700 underline decoration-2 decoration-blue-200">Active</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <MousePointer2 size={18} className="text-slate-400" />
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Visit us now for faster service. Our emergency care is prioritizing critical cases.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Shapes */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-100 rounded-full border-4 border-white shadow-lg -z-10 animate-bounce" style={{ animationDuration: '4s' }} />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-[2rem] border-4 border-white shadow-xl -z-10 rotate-12" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
