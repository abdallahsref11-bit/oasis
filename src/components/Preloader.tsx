import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Stethoscope } from 'lucide-react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-blue-600 mb-6"
          >
            <Stethoscope size={80} strokeWidth={1.5} />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h1 className="font-serif text-2xl md:text-4xl text-blue-900 font-bold mb-2">
              Oasis Klinik Ara Damansara
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1 }}
              className="h-1 bg-blue-500 mx-auto"
            />
            <p className="text-blue-600 mt-4 font-medium tracking-wide">
              Your Health, Our Priority
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
