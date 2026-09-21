'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const steps = [
  {
    number: '01',
    title: 'ELITE SCHEDULING',
    color: 'bg-accent-teal',
    items: [
      { label: 'Select your tier', desc: 'Browse our master-crafted detailing packages.' },
      { label: 'Lock in your slot', desc: 'Seamlessly integrate into your busy lifestyle.' },
      { label: 'Concierge dispatch', desc: 'Our mobile unit deploys to your exact coordinates.' }
    ],
    result: 'Your VIP appointment is secured. Sit back while we bring perfection to you.'
  },
  {
    number: '02',
    title: 'THE RESTORATION',
    color: 'bg-accent-blue',
    items: [
      { label: 'Surgical precision', desc: 'Executing deep cleans with aerospace-grade tools.' },
      { label: 'Luxury compounds', desc: 'Only the finest, safest chemicals touch your paint.' },
      { label: 'Obsessive detailing', desc: 'Every crevice, seam, and fiber is perfected.' }
    ],
    result: 'Your vehicle is reborn, exhibiting a flawless, mirror-like finish.'
  }
];

const BeforeAfterSlider = ({ before, after }: { before: string; after: string }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const pos = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 0), 100));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden cursor-ew-resize group"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image */}
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-black px-3 py-1 rounded-md uppercase tracking-widest z-20">
          Before
        </div>
      </div>

      <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-black px-3 py-1 rounded-md uppercase tracking-widest z-20">
        After
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 w-1 bg-white z-30 flex items-center justify-center"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-8 h-8 rounded-full bg-white text-bg-primary shadow-lg flex items-center justify-center -translate-x-1/2 group-hover:scale-110 transition-transform duration-300">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 relative w-full flex flex-col items-center bg-bg-primary">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-accent-teal/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-accent-blue/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-pattern-diagonal opacity-5 [mask-image:linear-gradient(to_bottom,white_80%,transparent_100%)]" />
      </div>
      
      <div className="relative z-10 w-full flex justify-center items-start px-6 md:px-12 lg:px-16 xl:px-[8%] pointer-events-auto">
        
        <div className="w-full max-w-[1300px] flex flex-col items-center mx-auto">
          {/* Title Section */}
        <div 
          className="w-full max-w-4xl self-center text-center flex flex-col items-center justify-center relative z-20"
          style={{ paddingBottom: '50px' }} /* <--- 🛠️ MODIFICA ESTE VALOR (ej. '80px', '150px') PARA AJUSTAR LA SEPARACIÓN CON LAS IMÁGENES A TU GUSTO */
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center justify-center gap-3 px-5 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse shadow-[0_0_10px_rgba(54,149,181,0.8)]" />
            <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.4em] text-white/70">Our Blueprint</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-[5.5rem] font-black mb-6 text-white leading-[0.9] tracking-tighter uppercase text-center"
          >
            THE MASTERCLASS<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal via-white to-accent-blue italic font-light tracking-normal drop-shadow-2xl inline-block pb-2">PROCESS</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-white/40 max-w-2xl font-light leading-relaxed text-center mx-auto"
          >
            A meticulously engineered protocol designed to transform your vehicle. We don&apos;t cut corners; we redefine the standard of mobile detailing in Toronto.
          </motion.p>
        </div>

        {/* Desktop Sticky Layout */}
        <div className="hidden lg:flex flex-row gap-20 xl:gap-32 items-start justify-between relative w-full mt-0 z-10 pointer-events-auto">
          
          {/* Sticky Media Side */}
          <div className="w-[45%] sticky shrink-0 z-30" style={{ top: '20vh', position: 'sticky' }}>
            <div className="w-full relative h-[60vh] max-h-[600px] min-h-[450px] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              {/* Glossy overlay */}
              <div className="absolute inset-0 border border-white/20 rounded-[2rem] pointer-events-none z-30" />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-teal/10 via-transparent to-transparent opacity-50 pointer-events-none z-20" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {activeStep === 0 ? (
                    <BeforeAfterSlider before="/before-1.svg" after="/after-1.svg" />
                  ) : (
                    <BeforeAfterSlider before="/before-2.svg" after="/after-2.svg" />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Scrolling Content Side */}
        <div className="w-[50%] flex flex-col">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="h-[60vh] max-h-[600px] min-h-[450px] flex flex-col justify-center relative mb-[40vh] last:mb-[15vh]"
              onViewportEnter={() => setActiveStep(index)}
              viewport={{ margin: "-40% 0px -40% 0px" }}
            >
                <div className={cn(
                  "transition-all duration-700",
                  activeStep === index ? "opacity-100 translate-x-0" : "opacity-20 translate-x-12 blur-sm"
                )}>
                  {/* Huge Background Number */}
                  <div className="absolute top-[-5%] right-[-5%] text-[180px] font-black text-white/[0.02] select-none pointer-events-none leading-none z-0">
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    <div className="mb-12" style={{ marginBottom: '20px' }}>
                      <span className="inline-block py-1 px-3 rounded-md bg-accent-teal/10 border border-accent-teal/20 text-accent-teal font-mono tracking-[0.2em] text-[10px] md:text-xs font-bold mb-4">
                        PHASE {step.number}
                      </span>
                      <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-none">
                        {step.title}
                      </h3>
                    </div>

                    <div 
                      className="relative border-l border-white/10 pb-8 flex flex-col"
                      style={{ paddingLeft: '60px', gap: '3.5rem' }}
                    >
                      {/* Animated Line for active step */}
                      {activeStep === index && (
                        <motion.div 
                          layoutId="activeLine"
                          className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-teal via-accent-blue to-transparent"
                          style={{ left: '-1px' }}
                        />
                      )}

                      {step.items.map((item) => (
                        <div key={item.label} className="relative group">
                          {/* Node point */}
                          <div 
                            className="absolute top-1.5 w-4 h-4 rounded-full bg-bg-primary border-2 border-white/20 group-hover:border-accent-teal group-hover:shadow-[0_0_15px_rgba(54,149,181,0.8)] transition-all duration-500 z-10 flex items-center justify-center"
                            style={{ left: '-68px' }}
                          >
                            <div className={cn(
                              "w-1 h-1 rounded-full transition-colors",
                              activeStep === index ? "bg-accent-teal" : "bg-white/50"
                            )} />
                          </div>
                          
                          <h4 className="text-white text-lg lg:text-xl font-extrabold mb-4 tracking-wide uppercase group-hover:text-accent-teal transition-colors duration-300">
                            {item.label}
                          </h4>
                          <p className="text-white/50 text-sm lg:text-base font-light leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}

                      {/* Result Box */}
                      <div className="mt-4 pt-2">
                        <p className="text-white/70 font-light leading-relaxed text-sm lg:text-base">
                          <span className="block text-accent-teal font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-2">The Outcome</span>
                          {step.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex lg:hidden flex-col gap-20 w-full max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Huge Background Number */}
              <div className="absolute top-[-5%] right-[-5%] text-[120px] font-black text-white/[0.02] select-none pointer-events-none leading-none z-0">
                {step.number}
              </div>

              <div className="relative z-10">
                <div className="mb-10">
                  <span className="inline-block py-1 px-3 rounded-md bg-accent-teal/10 border border-accent-teal/20 text-accent-teal font-mono tracking-[0.2em] text-[10px] md:text-xs font-bold mb-3">
                    PHASE {step.number}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase leading-none">
                    {step.title}
                  </h3>
                </div>

                <div 
                  className="w-full aspect-[4/5] sm:aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-20 mb-12 relative"
                  style={{ marginBottom: '80px' }}
                >
                  <div className="absolute inset-0 border border-white/20 rounded-[2rem] pointer-events-none z-30" />
                  {index === 0 ? (
                    <BeforeAfterSlider before="/before-1.svg" after="/after-1.svg" />
                  ) : (
                    <BeforeAfterSlider before="/before-2.svg" after="/after-2.svg" />
                  )}
                </div>

                <div 
                  className="relative border-l border-accent-teal/50 pb-8 flex flex-col"
                  style={{ paddingLeft: '45px', gap: '3rem' }}
                >
                  {step.items.map((item) => (
                    <div key={item.label} className="relative group">
                      <div 
                        className="absolute top-1.5 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent-teal shadow-[0_0_10px_rgba(54,149,181,0.5)] z-10 flex items-center justify-center"
                        style={{ left: '-53px' }}
                      >
                        <div className="w-1 h-1 rounded-full bg-accent-teal" />
                      </div>
                      
                      <h4 className="text-white text-lg font-extrabold mb-4 tracking-wide uppercase">
                        {item.label}
                      </h4>
                      <p className="text-white/50 text-sm font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}

                  <div className="mt-4 pt-2">
                    <span className="block text-accent-teal font-bold tracking-[0.2em] uppercase text-xs mb-2">The Outcome</span>
                    <p className="text-white/70 text-sm font-light italic">
                      &quot;{step.result}&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        </div>
      </div>
    </section>
  );
};

export default Process;