'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 w-full"
    >
      {/* Background Image with "Cortinita" Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/hero-bj.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Gradient Overlay for Ultra-Pro Dark Look */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-primary/70 to-bg-primary z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/20 via-transparent to-accent-blue/10 mix-blend-overlay z-10" />
      </div>

      {/* Content */}
      <div className="w-full px-8 md:px-16 lg:px-24 flex flex-col items-center justify-center text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-3 px-6 py-2.5 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(54,149,181,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse shadow-[0_0_8px_rgba(54,149,181,0.8)]" />
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-white/90">Toronto&apos;s Premier Mobile Detailing</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-[5.5rem] lg:text-[7rem] font-black text-white mb-8 leading-[1.05] tracking-tighter drop-shadow-2xl"
        >
          ENGINEERED FOR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal via-accent-blue to-accent-teal italic drop-shadow-[0_0_30px_rgba(54,149,181,0.3)]">PERFECTION.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-text-secondary mb-14 max-w-3xl mx-auto font-light leading-relaxed"
        >
          We don&apos;t just wash cars; we restore their soul. Experience the pinnacle of automotive luxury without leaving your driveway. Precision, passion, and unparalleled results brought directly to you anywhere in the GTA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ paddingTop: '1rem' }}
        >
          <Link 
            href="/booking"
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            className="group relative inline-flex items-center justify-center font-bold text-white overflow-hidden bg-accent-teal transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(54,149,181,0.6)] active:scale-95 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-lg rounded-bl-lg"
            style={{ padding: '1.25rem 3rem' }}
          >
            {/* Spotlight effect (JS driven) */}
            <div 
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(100px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.4), transparent 40%)`
              }}
            />
            
            {/* Shimmer line animation */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer" />
            
            <span className="relative z-10 text-xl uppercase tracking-widest flex items-center gap-3">
              Book Now
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;