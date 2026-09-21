'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Calendar } from 'lucide-react';
import Link from 'next/link';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-[9999] w-12 h-12 rounded-full bg-bg-card/80 backdrop-blur-md border border-white/10 text-accent-teal flex items-center justify-center shadow-2xl hover:bg-accent-teal hover:text-bg-primary transition-all duration-300 group"
          >
            <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Book Online */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        className="fixed bottom-6 right-6 z-[9999]"
      >
        <Link
          href="/booking"
          className="w-[72px] h-[72px] rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-accent-teal text-bg-primary flex flex-col items-center justify-center text-center shadow-[0_8px_25px_rgba(45,212,191,0.4)] transition-all group hover:shadow-[0_0_40px_rgba(54,149,181,0.8)]"
        >
          <Calendar size={20} className="mb-1 group-hover:rotate-12 transition-transform" />
          <span className="text-[10px] font-black uppercase leading-tight">
            Book <br /> Online
          </span>
        </Link>
      </motion.div>
    </>
  );
};

export default FloatingButtons;