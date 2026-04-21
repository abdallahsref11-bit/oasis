import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Lin Wei Teck',
    rating: 5,
    text: 'Friendly nurses and very clean environment. The doctor was very patient in explaining my condition. Highly recommended!',
    date: '2 weeks ago'
  },
  {
    name: 'Siti Aminah',
    rating: 5,
    text: 'Came here at 3 AM for a minor emergency. Service was fast and efficient. Very grateful for a 24-hour clinic nearby.',
    date: '1 month ago'
  },
  {
    name: 'Rajendran M.',
    rating: 4,
    text: 'Experienced doctor and affordable pricing for the Ara Damansara area. Easy to find parking in Oasis Square too.',
    date: '3 days ago'
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-10 text-[10rem] font-serif font-black select-none">TRUST</div>
        <div className="absolute bottom-0 right-10 text-[10rem] font-serif font-black select-none">CARE</div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex p-3 bg-blue-500/30 text-white rounded-2xl mb-4"
          >
            <Star size={24} fill="white" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4"
          >
            What Our Patients Say
          </motion.h2>
          <p className="text-blue-100 font-medium tracking-wide">Actual feedback from our Ara Damansara community</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] flex flex-col justify-between hover:bg-white/20 transition-all cursor-default"
            >
              <div>
                <Quote className="text-blue-300 mb-6 opacity-50" size={32} />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-white/20"} 
                    />
                  ))}
                </div>
                <p className="text-white text-sm leading-relaxed mb-8 italic">
                  "{review.text}"
                </p>
              </div>
              
              <div className="flex justify-between items-center pt-6 border-t border-white/10">
                <div>
                  <p className="text-white font-bold text-sm tracking-tight">{review.name}</p>
                  <p className="text-[10px] text-blue-200 uppercase font-black tracking-widest">Verified Patient</p>
                </div>
                <span className="text-[10px] text-white/40 font-bold">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
