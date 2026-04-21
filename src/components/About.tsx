import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Trophy, Heart } from 'lucide-react';

const stats = [
  { icon: <Sparkles size={24} />, label: 'Modern Equipment', count: '100%' },
  { icon: <Trophy size={24} />, label: 'Years of Experience', count: '15+' },
  { icon: <Heart size={24} />, label: 'Patient Satisfaction', count: '98%' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src="https://picsum.photos/seed/clinic1/600/800" 
                  alt="Clinic Interior" 
                  referrerPolicy="no-referrer"
                  className="rounded-[2.5rem] shadow-2xl h-80 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
                <img 
                  src="https://picsum.photos/seed/clinic2/600/400" 
                  alt="Waiting Area" 
                  referrerPolicy="no-referrer"
                  className="rounded-[2.5rem] shadow-2xl h-48 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://picsum.photos/seed/clinic3/600/400" 
                  alt="Consultation Room" 
                  referrerPolicy="no-referrer"
                  className="rounded-[2.5rem] shadow-2xl h-56 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
                <img 
                  src="https://picsum.photos/seed/clinic4/600/800" 
                  alt="Modern Lab" 
                  referrerPolicy="no-referrer"
                  className="rounded-[2.5rem] shadow-2xl h-96 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>
            </div>
            
            {/* Visual Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white p-6 text-center shadow-2xl shadow-blue-500/50 z-10">
               <p className="font-serif font-bold text-3xl">24/7</p>
               <p className="text-[10px] font-bold uppercase tracking-widest leading-tight">Emergency Ready</p>
            </div>
          </motion.div>

          <div>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-bold uppercase tracking-widest mb-4 text-xs"
            >
              Our Story
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mb-8 leading-tight"
            >
              Reimagining Modern <br />
              Healthcare in Malaysia
            </motion.h2>
            
            <p className="text-slate-600 mb-8 leading-relaxed italic">
              Klinik Oasis isn't just a medical center; it's a sanctuary for health. 
              Our recently renovated facility combines cutting-edge medical technology 
              with the warmth of a family-centered environment.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-xl transition-all">
                  <div className="text-blue-600 mb-4">{stat.icon}</div>
                  <p className="text-2xl font-bold text-slate-800 mb-1">{stat.count}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Heart size={20} />
                </div>
                <p className="text-sm font-semibold text-slate-700">High-quality, affordable family medicine</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Sparkles size={20} />
                </div>
                <p className="text-sm font-semibold text-slate-700">Digital-first experience and modern diagnostics</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
