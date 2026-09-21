'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, DollarSign, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const benefits = [
  {
    title: 'CONCIERGE MOBILE SERVICE',
    description: 'We bring the pinnacle of automotive care directly to your driveway or office.',
    icon: MapPin,
    color: 'bg-accent-teal',
    items: ['Seamless booking', 'Zero travel downtime', 'Serving the entire GTA elite']
  },
  {
    title: 'OBSESSIVE PERFECTION',
    description: 'We don\'t stop until your vehicle achieves a flawless, showroom-grade finish.',
    icon: CheckCircle,
    color: 'bg-accent-teal',
    items: ['Master-grade products', 'Uncompromising attention']
  },
  {
    title: 'TRANSPARENT LUXURY',
    description: 'World-class detailing paired with upfront, honest pricing.',
    icon: DollarSign,
    color: 'bg-accent-teal',
    items: ['No hidden surcharges', 'Exclusive packages', 'Unmatched value']
  },
  {
    title: 'RAPID PRECISION',
    description: 'Flawless execution delivered with remarkable efficiency.',
    icon: Zap,
    color: 'bg-accent-teal',
    items: ['Punctual arrivals', 'Optimized workflow', 'Immediate transformations']
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative min-h-screen flex flex-col justify-center w-full">
      {/* Background blobs to force glassmorphism refraction */}
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-accent-teal/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-accent-blue/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Glass Overlay for the Section */}
      <div className="absolute inset-0 bg-bg-primary/40 backdrop-blur-3xl z-0 [mask-image:linear-gradient(to_bottom,transparent_0%,white_10%,white_90%,transparent_100%)]" />
      
      {/* WRAPPER MAESTRO: ESTO CENTRA TODO EL CONJUNTO CON MÁRGENES GIGANTES A LOS LADOS */}
      <div className="relative z-10 w-full flex justify-center items-start px-6 md:px-12 lg:px-16 xl:px-[8%]">
        
        {/* CAJA INTERNA DE 2 BLOQUES: LIMITADA A 1300px DE ANCHO MÁXIMO PARA DAR MÁS ESPACIO HORIZONTAL */}
        <div className="w-full max-w-[1300px] flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Left Side: Info Panel (Texto) - Centrado verticalmente gracias a items-center en el padre */}
          <div className="w-full lg:w-[40%] shrink-0 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(54,149,181,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse shadow-[0_0_8px_rgba(54,149,181,0.8)]" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-white/90">The 414 Advantage</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-[5rem] font-black mb-6 text-white leading-[1.1] drop-shadow-xl text-center"
          >
            UNRIVALED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-blue italic drop-shadow-[0_0_30px_rgba(54,149,181,0.3)]">EXCELLENCE</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-text-secondary max-w-md font-light leading-relaxed mb-12 text-center mx-auto"
          >
            Toronto&apos;s most demanding car enthusiasts choose 414 because we refuse to compromise. Here is why we are in a league of our own when it comes to preserving your investment.
          </motion.p>

          {/* Decorative High-End Element */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full h-48 rounded-[2.5rem] rounded-tr-xl rounded-bl-xl bg-gradient-to-tr from-accent-teal/10 to-transparent border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/20" />
            {/* The blur element MUST be absolute so it doesn't push the text in flex layout */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-accent-teal/20 blur-3xl group-hover:bg-accent-teal/40 transition-colors duration-700" />
            
            {/* Animated scanning line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-teal to-transparent opacity-50 animate-[scan_3s_ease-in-out_infinite]" />
          </motion.div>
        </div>
  
          {/* Right Side: Scrolling Vertical Cards (Staggered) */}
          <div className="w-full lg:w-[60%] flex flex-col gap-6 md:gap-4">
            {benefits.map((benefit, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                className={cn(
                  "w-full md:w-[90%] lg:w-[75%] bg-bg-card/40 backdrop-blur-2xl border border-white/10 transition-all duration-500 group shadow-xl relative overflow-hidden",
                  isLeft ? "self-start" : "self-end",
                  isLeft 
                    ? "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl" 
                    : "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-2xl rounded-br-2xl"
                )}
                style={{ padding: 'clamp(1rem, 5vw, 1.2rem)' }}
              >
                {/* Hover Light Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/0 via-accent-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className={cn(
                  "flex flex-col md:flex-row gap-6 relative z-10",
                  isLeft ? "items-start" : "items-end md:items-start"
                )}>
                  {/* Large Icon Container */}
                  <div className={cn(
                    'w-16 h-16 rounded-[1.2rem] flex items-center justify-center shrink-0 transition-all duration-500 bg-transparent group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_20px_rgba(54,149,181,0.5)]',
                    !isLeft && "md:order-2"
                  )}>
                    <benefit.icon className="text-white group-hover:text-accent-teal transition-colors duration-500" size={28} />
                  </div>
                  
                  {/* Content */}
                  <div className={cn(
                    "flex flex-col flex-1",
                    isLeft ? "text-left" : "text-right",
                    !isLeft && "md:order-1"
                  )}>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-wide group-hover:text-accent-teal transition-colors duration-300">{benefit.title}</h3>
                    <p className="text-text-secondary leading-relaxed mb-6 text-base font-light">
                      {benefit.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                      {benefit.items.map((item) => (
                        <li key={item} className={cn(
                          "flex items-center gap-3 text-white/80 font-medium",
                          !isLeft && "justify-end flex-row-reverse"
                        )}>
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-teal shadow-[0_0_8px_rgba(54,149,181,0.8)] shrink-0" />
                          <span className="text-xs uppercase tracking-wider">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </div>
  </section>
  );
};

export default WhyChooseUs;