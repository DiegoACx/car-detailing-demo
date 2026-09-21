'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Intersection Observer logic for active section
      const sections = ['home', 'services', 'about', 'contact'];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-10 left-0 w-full z-[1000] transition-all duration-300',
          isScrolled 
            ? 'bg-bg-primary/85 backdrop-blur-md py-4' 
            : 'bg-transparent py-6'
        )}
      >
        <div className="w-full px-7 md:px-12 lg:px-16 xl:px-24 mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-4 group" style={{ marginLeft: 'clamp(20px, 1vw, 12px)', marginTop: '3.5px' }}>
            <div className="w-12 h-12 rounded-xl bg-accent-teal flex items-center justify-center font-black text-bg-primary text-2xl shadow-lg shadow-accent-teal/20 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(54,149,181,0.8)] group-hover:bg-white group-hover:text-accent-teal transition-all duration-500">
              414
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-black tracking-tight text-white leading-none mb-1 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300">
                CAR DETAILING
              </h1>
              <span className="text-[10px] text-accent-teal tracking-[0.3em] font-bold uppercase group-hover:drop-shadow-[0_0_5px_rgba(54,149,181,0.8)] transition-all duration-300">
                Precision & Care
              </span>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-10" style={{ marginRight: '56px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'relative text-xs font-bold uppercase tracking-widest transition-all duration-300 group py-2 hover:drop-shadow-[0_0_8px_rgba(54,149,181,0.8)]',
                  activeSection === link.href.slice(1) 
                    ? 'text-white drop-shadow-[0_0_5px_rgba(54,149,181,0.5)]' 
                    : 'text-white/50 hover:text-white'
                )}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent-teal rounded-full shadow-[0_0_10px_rgba(54,149,181,0.8)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent-teal/50 shadow-[0_0_10px_rgba(54,149,181,0.5)] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 rounded-full" />
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;