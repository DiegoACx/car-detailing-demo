'use client';

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="pt-32 pb-12 bg-[#030305] text-white w-full relative overflow-hidden border-t border-white/5" style={{ marginTop: '-180px' }}>
      {/* Background glow effects to match other sections subtly */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-teal/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-8 md:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 xl:gap-32 mb-24">
          {/* Column 1: Info */}
          <div className="space-y-10">
            <div className="space-y-3">
              <h3 className="text-3xl font-black tracking-tight flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-accent-teal flex items-center justify-center text-bg-primary text-xl shadow-lg shadow-accent-teal/20">
                  414
                </span>
                CAR DETAILING
              </h3>
              <p className="text-accent-teal font-bold text-xs tracking-[0.4em] uppercase">
                Mobile Excellence
              </p>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed max-w-sm">
              Professional mobile detailing for enthusiasts. We redefine what a clean car means, one vehicle at a time.
            </p>
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-6 text-base text-text-secondary hover:text-white transition-all cursor-pointer group">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl group-hover:bg-accent-teal/20 group-hover:border-accent-teal/30 group-hover:shadow-[0_0_20px_rgba(54,149,181,0.2)] transition-all duration-300">
                  <Phone size={20} className="text-accent-teal" />
                </div>
                <span className="font-medium text-lg tracking-wide group-hover:translate-x-1 transition-transform duration-300">+1 (416) 555-0100</span>
              </div>
              <div className="flex items-center gap-6 text-base text-text-secondary hover:text-white transition-all cursor-pointer group">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl group-hover:bg-accent-teal/20 group-hover:border-accent-teal/30 group-hover:shadow-[0_0_20px_rgba(54,149,181,0.2)] transition-all duration-300">
                  <Mail size={20} className="text-accent-teal" />
                </div>
                <span className="font-medium text-lg tracking-wide group-hover:translate-x-1 transition-transform duration-300">info@example.com</span>
              </div>
              <div className="flex items-center gap-6 text-base text-text-secondary hover:text-white transition-all cursor-pointer group">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl group-hover:bg-accent-teal/20 group-hover:border-accent-teal/30 group-hover:shadow-[0_0_20px_rgba(54,149,181,0.2)] transition-all duration-300">
                  <MapPin size={20} className="text-accent-teal" />
                </div>
                <span className="font-medium text-lg tracking-wide group-hover:translate-x-1 transition-transform duration-300">Toronto, ON & Surrounding Areas</span>
              </div>
            </div>
          </div>

          {/* Column 2: Map */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold flex items-center gap-3 border-b border-white/10 pb-4">
              <span>Service Area</span>
              <span className="w-2.5 h-2.5 rounded-full bg-accent-teal shadow-[0_0_10px_rgba(54,149,181,0.6)] animate-pulse" />
            </h4>
            <div className="w-full aspect-square rounded-2xl overflow-hidden grayscale brightness-50 opacity-60 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-700 border border-white/5 hover:border-accent-teal/30 hover:shadow-[0_0_30px_rgba(54,149,181,0.15)]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57290076718!2d-79.5181404!3d43.7181557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x3235571fe330c71a!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1713304567890!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold border-b border-white/10 pb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 pt-4">
              {['Home', 'Services', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase().split(' ')[0]}`}
                    className="text-text-secondary hover:text-white text-lg transition-all duration-300 flex items-center gap-6 group py-1"
                  >
                    <span className="w-8 h-[2px] bg-white/10 group-hover:bg-accent-teal group-hover:shadow-[0_0_10px_rgba(54,149,181,0.8)] transition-all duration-300 group-hover:w-12" />
                    <span className="group-hover:translate-x-2 group-hover:text-accent-teal group-hover:drop-shadow-[0_0_8px_rgba(54,149,181,0.5)] transition-all duration-300 font-medium tracking-wide">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Our Services */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold border-b border-white/10 pb-4">Our Services</h4>
            <ul className="flex flex-col gap-2 pt-4">
              {[
                'Exterior Wash',
                'Interior Cleaning',
                'Engine Bay Washing'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href="#services"
                    className="text-text-secondary hover:text-white text-lg transition-all duration-300 flex items-center gap-6 group py-1"
                  >
                    <span className="w-8 h-[2px] bg-white/10 group-hover:bg-accent-teal group-hover:shadow-[0_0_10px_rgba(54,149,181,0.8)] transition-all duration-300 group-hover:w-12" />
                    <span className="group-hover:translate-x-2 group-hover:text-accent-teal group-hover:drop-shadow-[0_0_8px_rgba(54,149,181,0.5)] transition-all duration-300 font-medium tracking-wide">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PRO Copyright Section */}
        <div className="relative mt-20 pt-8 pb-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <p className="text-base font-medium text-white/50 tracking-wide">
              © 2026 <span className="text-white font-bold tracking-widest uppercase ml-1">414 Car Detailing</span>. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;