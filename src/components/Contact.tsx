import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageSquare, Mail, Instagram, Facebook, Clock, UserCheck } from 'lucide-react';

const workingHours = [
  { day: 'Monday', hours: '24 Hours' },
  { day: 'Tuesday', hours: '24 Hours' },
  { day: 'Wednesday', hours: '24 Hours' },
  { day: 'Thursday', hours: '24 Hours' },
  { day: 'Friday', hours: '24 Hours' },
  { day: 'Saturday', hours: '24 Hours' },
  { day: 'Sunday', hours: '24 Hours' },
];

export default function Contact() {
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-blue-600 font-bold uppercase tracking-widest mb-4 text-xs"
            >
              Get in Touch
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mb-8 leading-tight"
            >
              Conveniently Located <br />
              at Oasis Square
            </motion.h2>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl h-fit">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Our Address</h4>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs italic underline decoration-blue-100 decoration-4 underline-offset-4">
                    Unit D-G-05, Block D, Oasis Square, <br />
                    No. 2, Jalan PJU 1A/7A, Ara Damansara, <br />
                    47301 Petaling Jaya, Selangor.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl h-fit">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Contact Numbers</h4>
                  <p className="text-slate-500 text-sm italic">Phone: +60 3-7734 2424</p>
                  <p className="text-slate-500 text-sm italic">WhatsApp: +60 1x-xxx xxxx</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden shrink-0">
                <img 
                  src="https://i.pravatar.cc/150?u=doc2" 
                  alt="Doctor" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <UserCheck size={16} className="text-blue-600" />
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Expert Note</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic mb-2">
                  "At Klinik Oasis, we understand that emergencies don't wait for business hours. 
                  That's why we stay open all night to serve the Ara Damansara community."
                </p>
                <p className="text-[10px] font-bold text-slate-800">— Dr. Ahmad Fauzi, CM</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8 rounded-[2.5rem] relative overflow-hidden">
              <div className="flex items-center gap-3 mb-8">
                <Clock className="text-blue-600" />
                <h3 className="text-xl font-bold text-blue-900 font-serif">Working Hours</h3>
              </div>
              
              <div className="space-y-4">
                {workingHours.map((item) => (
                  <div 
                    key={item.day}
                    className={`flex justify-between items-center p-3 rounded-2xl transition-all ${
                      currentDay === item.day 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                        : 'bg-white border border-slate-100 text-slate-600'
                    }`}
                  >
                    <span className="font-bold text-sm tracking-tight">{item.day}</span>
                    <div className="flex items-center gap-2">
                      {currentDay === item.day && <span className="text-[8px] font-black bg-white text-blue-600 px-1.5 py-0.5 rounded uppercase tracking-tighter">Today</span>}
                      <span className={`font-medium ${currentDay === item.day ? 'text-white' : 'text-slate-400'} italic`}>{item.hours}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-64 rounded-[2.5rem] overflow-hidden border-2 border-white shadow-xl relative grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15935.532321453242!2d101.56450090000001!3d3.11181585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc495e865f148b%3A0x64cf4f67c3b9c7b6!2sOasis%20Square!5e0!3m2!1sen!2smy!4v1714150000000!5m2!1sen!2smy" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-4 left-4 pointer-events-none">
                <div className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm text-[10px] font-bold text-slate-800 flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                  Oasis Square Location
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
               <span className="font-serif font-bold">O</span>
             </div>
             <p className="text-xs text-slate-500 font-medium">© 2026 Klinik Oasis Ara Damansara. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="p-3 bg-slate-100 text-slate-400 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-sm"><Facebook size={18} /></a>
            <a href="#" className="p-3 bg-slate-100 text-slate-400 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-sm"><Instagram size={18} /></a>
            <a href="#" className="p-3 bg-slate-100 text-slate-400 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-sm"><MessageSquare size={18} /></a>
          </div>
          
          <div className="flex gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Career</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Medical Disclosure</a>
          </div>
        </div>
      </div>
    </section>
  );
}
