'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'interior-mini',
    name: 'SIGNATURE INTERIOR REFRESH',
    price: 'from $100',
    description: "An elite foundational service. We execute a meticulous vacuuming, comprehensively purify all cabin surfaces, and leave your glass crystal clear. Engineered for vehicles needing a rapid yet undeniable elevation.",
    pricing: [
      { vehicle: '2 Seat Car', time: '1h 30m', price: '$100.00' },
      { vehicle: '5 Seater SUV', time: '1h 45m', price: '$120.00' },
    ],
    addons: [
      { name: 'Engine Bay washing', price: '+$50' },
      { name: 'Leather Treatment', price: '+$40' },
    ]
  },
  {
    id: 'interior-detail',
    name: 'MASTER INTERIOR DETAIL',
    price: 'from $130',
    description: "A deep dive into automotive luxury. We utilize compressed air to extract embedded dirt, perform intensive steam cleaning on upholstery, and meticulously recondition every dashboard and trim surface to a factory-fresh matte finish.",
    pricing: [
      { vehicle: '2 Seat Car', time: '2h 30m', price: '$130.00' },
      { vehicle: '5 Seater SUV', time: '3h', price: '$160.00' },
    ],
    addons: [
      { name: 'Engine Bay washing', price: '+$50' },
      { name: 'Leather Treatment', price: '+$40' },
    ]
  },
  {
    id: 'interior-pro',
    name: 'CONCOURS INTERIOR PRO',
    price: 'from $210',
    description: "The absolute pinnacle of cabin restoration. Beyond our master detail, we apply aerospace-grade UV protectants to all plastics and vinyls, and condition your leather with premium balms for unmatched suppleness and longevity.",
    pricing: [
      { vehicle: '2 Seat Car', time: '3h', price: '$210.00' },
      { vehicle: '5 Seater SUV', time: '3h 30m', price: '$240.00' },
    ],
    addons: [
      { name: 'Engine Bay washing', price: '+$50' },
      { name: 'Headlight Restoration', price: '+$140' },
    ]
  },
  {
    id: 'exterior-detail',
    name: 'FLAWLESS EXTERIOR ARMOR',
    price: 'from $80',
    description: "A multi-stage exterior purification. We perform a luxurious hand wash, mechanical clay bar decontamination to strip embedded pollutants, deep-clean alloys, and seal the paint with a high-gloss hydrophobic wax.",
    pricing: [
      { vehicle: '2 Seat Car', time: '1h', price: '$80.00' },
      { vehicle: '5 Seater SUV', time: '1h 15m', price: '$100.00' },
    ],
    addons: [
      { name: 'Engine Bay washing', price: '+$50' },
      { name: 'Headlight Restoration', price: '+$140' },
    ]
  }
];

const Services = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 relative min-h-screen flex flex-col justify-center w-full">
      {/* Background blobs to force glassmorphism refraction */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-teal/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent-blue/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-accent-green/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Glass Overlay for the Section */}
      <div className="absolute inset-0 bg-bg-secondary/10 backdrop-blur-3xl z-0" />
      
      <div className="absolute inset-0 bg-pattern-diagonal opacity-10 z-0 pointer-events-none" />
      
      <div className="w-full px-8 md:px-16 lg:px-24 relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex items-center gap-3 px-6 py-2.5 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(54,149,181,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse shadow-[0_0_8px_rgba(54,149,181,0.8)]" />
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-white/90">Signature Packages</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-[5rem] font-black text-center text-white drop-shadow-2xl"
          style={{ marginBottom: '6rem' }}
        >
          MASTERCRAFTED <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-blue italic drop-shadow-[0_0_30px_rgba(54,149,181,0.3)]">DETAILING</span>
        </motion.h2>

        <div 
          className="max-w-6xl 2xl:max-w-7xl mx-auto w-full flex flex-col items-center"
          style={{ gap: '0.6rem' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "w-full border overflow-hidden transition-all duration-500",
                index % 2 === 0 ? "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl" : "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl",
                expandedId === service.id 
                  ? "bg-bg-card/60 backdrop-blur-2xl border-accent-teal/80 shadow-[0_0_60px_rgba(54,149,181,0.4)] scale-[1.02] z-10" 
                  : "bg-black/20 backdrop-blur-xl border-white/10 hover:border-accent-teal/60 hover:bg-accent-teal/10 hover:shadow-[0_0_40px_rgba(54,149,181,0.3)] hover:scale-[1.01] z-0"
              )}
            >
              <button
                onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                className="w-full flex items-center justify-between py-8 md:py-10 lg:py-12 group text-left"
                style={{ paddingLeft: '1rem', paddingRight: '3rem' }}
              >
                <div className="flex items-center gap-6 md:gap-8">
                  <div className={cn(
                    "shrink-0 flex items-center justify-center transition-colors duration-300",
                    expandedId === service.id ? "text-accent-teal" : "text-white/50 group-hover:text-accent-teal"
                  )}>
                    <ChevronDown 
                      size={32} 
                      className={cn(
                        "transition-transform duration-500",
                        expandedId === service.id ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </div>
                  <span className={cn(
                    "text-2xl md:text-3xl font-black transition-all duration-300",
                    expandedId === service.id ? "text-accent-teal drop-shadow-[0_0_10px_rgba(54,149,181,0.5)]" : "text-white group-hover:text-white/90 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                  )}>
                    {service.name}
                  </span>
                </div>
                <span className="text-xl md:text-2xl font-black bg-white/5 px-8 py-4 rounded-xl text-white shrink-0 ml-6 transition-all duration-300 group-hover:bg-accent-teal/20 group-hover:text-accent-teal group-hover:shadow-[0_0_25px_rgba(54,149,181,0.4)] border border-transparent group-hover:border-accent-teal/50">
                  {service.price}
                </span>
              </button>

              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <div 
                      className="border-t border-white/5"
                      style={{ padding: '2rem 2rem 2rem 2rem' }}
                    >
                      <div className="grid lg:grid-cols-[1fr,1.3fr] gap-8 lg:gap-12 mt-4">
                        {/* Left Column */}
                        <div className="flex flex-col justify-start">
                          <div className="flex items-center gap-4 mb-8">
                            <CheckCircle2 className="text-accent-green" size={32} />
                            <h4 className="text-white font-black uppercase tracking-widest text-lg">
                              What&apos;s Included
                            </h4>
                          </div>
                          <p className="text-text-secondary leading-loose text-xl">
                            {service.description}
                          </p>
                        </div>

                        {/* Right Column */}
                        <div 
                          className="bg-black/30 rounded-3xl border border-white/5 shadow-inner"
                          style={{ padding: '3rem 4rem' }}
                        >
                          <h4 className="text-white font-black mb-10 uppercase tracking-widest text-lg flex items-center gap-4">
                            <span className="w-3 h-3 rounded-full bg-accent-teal" />
                            Pricing
                          </h4>
                          <div className="space-y-8 mb-14">
                            {service.pricing.map((p) => (
                              <div 
                                key={p.vehicle} 
                                className="flex justify-between items-center border-b border-white/5 last:border-0"
                                style={{ paddingBottom: '0.5rem' }}
                              >
                                <div>
                                  <p className="font-bold text-white text-2xl">{p.vehicle}</p>
                                  <p className="text-base text-text-secondary font-medium tracking-wide mt-2">Est. Time: {p.time}</p>
                                </div>
                                <span className="font-black text-3xl text-accent-teal">{p.price}</span>
                              </div>
                            ))}
                          </div>

                          {service.addons.length > 0 && (
                            <div className="pt-10 border-t border-white/10 mt-10">
                              <h4 className="text-white/60 font-bold mb-6 uppercase tracking-wider text-sm">
                                Optional Add-ons:
                              </h4>
                              <div className="space-y-6">
                                {service.addons.map((addon) => (
                                  <div key={addon.name} className="flex justify-between text-lg text-text-secondary font-medium">
                                    <span>+ {addon.name}</span>
                                    <span className="text-white font-bold">{addon.price}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;