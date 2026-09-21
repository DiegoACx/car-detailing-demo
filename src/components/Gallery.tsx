'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const carouselImages = [
  '/gallery-1.svg',
  '/gallery-2.svg',
  '/gallery-3.svg',
  '/gallery-4.svg',
];

const gridImages = [
  '/showcase-1.svg',
  '/showcase-2.svg',
  '/showcase-3.svg',
  '/showcase-4.svg',
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="py-32 relative w-full flex flex-col items-center bg-bg-primary">
      {/* Abstract Premium Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-accent-teal/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 relative z-10 w-full flex flex-col items-center justify-center text-center">
        
        {/* TOP SECTION: Cinematic Carousel */}
        {/* EDITAR AQUI: Cambia el valor de paddingTop para alejar o acercar el texto de la parte de arriba */}
        <div className="w-full mb-32 flex flex-col items-center justify-center text-center mx-auto" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto', paddingTop: '60px' }}>
          
          {/* Contenedor del Título y Texto */}
          {/* EDITAR AQUI: Cambia marginBottom (ahora en 30px) para acercar o alejar el texto del carrusel */}
          <div className="flex flex-col items-center justify-center w-full max-w-[800px] mx-auto text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginBottom: '30px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 flex items-center justify-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mx-auto"
            >
              <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse shadow-[0_0_8px_rgba(54,149,181,0.8)]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/90 m-0 p-0 text-center">The Masterpiece Archive</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white drop-shadow-2xl uppercase w-full text-center mx-auto"
            >
              AUTOMOTIVE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal via-accent-blue to-accent-teal italic font-light drop-shadow-[0_0_30px_rgba(54,149,181,0.3)]">RESURRECTION</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-text-secondary font-light leading-relaxed w-full text-center mx-auto"
            >
              Witness the transformation. We don&apos;t just detail; we resurrect automotive beauty, setting the gold standard across Toronto.
            </motion.p>
          </div>

          {/* EDITAR AQUI: En 'style' puedes modificar maxWidth (ancho máximo) y maxHeight (alto máximo) del carrusel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            style={{ width: '100%', maxWidth: '1400px', height: '65vh', minHeight: '400px', maxHeight: '650px', margin: '0 auto' }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={carouselImages[currentIndex]}
                alt="Masterpiece"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Carousel Navigation - Ultra Premium */}
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
              
              {/* Progress Indicators */}
              <div className="flex gap-3 order-2 md:order-1">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500 overflow-hidden relative",
                      i === currentIndex ? "w-16 bg-accent-teal shadow-[0_0_15px_rgba(54,149,181,0.6)]" : "w-6 bg-white/30 hover:bg-white/50"
                    )}
                  >
                    {i === currentIndex && (
                      <motion.div 
                        layoutId="active-indicator"
                        className="absolute inset-0 bg-white shadow-[0_0_10px_#fff]"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4 order-1 md:order-2 self-end">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 hover:border-accent-teal hover:bg-accent-teal/20 text-white flex items-center justify-center transition-all hover:scale-110 group/btn shadow-xl"
                >
                  <ChevronLeft size={24} className="group-hover/btn:-translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 hover:border-accent-teal hover:bg-accent-teal/20 text-white flex items-center justify-center transition-all hover:scale-110 group/btn shadow-xl"
                >
                  <ChevronRight size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Asymmetrical Showcase Grid */}
        <div className="w-full mt-16" style={{ marginTop: '4rem' }}>
          {/* EDITAR AQUI: Puedes cambiar el marginTop o marginBottom para alejar/acercar este título del carrusel de arriba y de la grilla de abajo */}
          <div className="flex flex-col items-center justify-center text-center w-full max-w-[800px] mx-auto mb-16" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto', marginBottom: '4rem' }}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full text-center"
              style={{ width: '100%', textAlign: 'center' }}
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white uppercase drop-shadow-lg text-center mx-auto" style={{ textAlign: 'center', display: 'block', width: '100%' }}>
                Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-blue italic pr-2">Showcase</span>
              </h3>
              <p className="text-text-secondary text-lg font-light leading-relaxed text-center mx-auto" style={{ textAlign: 'center', display: 'block', width: '100%' }}>
                Every angle captured in pure perfection. A testament to our uncompromising dedication to automotive excellence.
              </p>
            </motion.div>
          </div>

          {/* Premium Asymmetrical Grid / Bento Box Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[320px] w-full max-w-[1400px] mx-auto" style={{ margin: '0 auto' }}>
            
            {/* Large Featured Image (Spans 2 rows, 2 cols on lg) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 lg:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5 hover:border-accent-teal/50 transition-colors duration-500 shadow-2xl"
            >
              <img src={gridImages[0]} alt="Showcase 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-[2rem] transition-colors duration-500 m-4 pointer-events-none" />
              
              <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-accent-teal/20 backdrop-blur-md flex items-center justify-center mb-4 border border-accent-teal/50 text-accent-teal shadow-[0_0_20px_rgba(54,149,181,0.4)]">
                  <Maximize2 size={20} />
                </div>
                <h4 className="text-white font-black text-2xl uppercase tracking-wider mb-2 drop-shadow-md">Imagen de ejemplo</h4>
                <p className="text-white/70 text-sm font-light tracking-wide">Espacio reservado para una foto real</p>
              </div>
            </motion.div>

            {/* Wide Image (Spans 2 cols on lg) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-1 lg:col-span-2 relative rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5 hover:border-accent-teal/50 transition-colors duration-500 shadow-xl"
            >
              <img src={gridImages[1]} alt="Showcase 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h4 className="text-white font-bold text-lg uppercase tracking-wider">Imagen de ejemplo</h4>
              </div>
            </motion.div>

            {/* Square Image 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5 hover:border-accent-teal/50 transition-colors duration-500 shadow-xl"
            >
              <img src={gridImages[2]} alt="Showcase 3" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">Imagen de ejemplo</h4>
              </div>
            </motion.div>

            {/* Square Image 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5 hover:border-accent-teal/50 transition-colors duration-500 shadow-xl"
            >
              <img src={gridImages[3]} alt="Showcase 4" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">Imagen de ejemplo</h4>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
