'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contact" className="pt-24 pb-32 md:pt-32 md:pb-40 relative w-full flex flex-col items-center justify-center bg-bg-primary" style={{ scrollMarginTop: '10px' }}>
      {/* EDITAR AQUI (En la línea de arriba): Cambia el valor de 'scrollMarginTop' (ej: de '140px' a '200px') para ajustar el tope visual cuando haces clic en "Contact" en el menú */}
      
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-blue/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-teal/20 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Glass overlay matching previous sections */}
      <div className="absolute inset-0 bg-bg-secondary/10 backdrop-blur-3xl z-0 [mask-image:linear-gradient(to_bottom,transparent_0%,white_10%,white_90%,transparent_100%)]" />
      <div className="absolute inset-0 bg-pattern-diagonal opacity-10 z-0 [mask-image:linear-gradient(to_bottom,transparent_0%,white_10%,white_90%,transparent_100%)]" />
      
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 flex justify-center">
        {/* Usando todo el espacio disponible en lugar de cortarlo */}
        <div className="w-full max-w-[1800px] mx-auto">
          
          <div className="flex flex-col items-center justify-center text-center gap-20 relative z-10 w-full">
            {/* Main Hook */}
            {/* EDITAR AQUI: Cambia el valor de marginTop (ej: '150px', '200px') para separar este título de la galería de arriba */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10 flex flex-col items-center max-w-5xl mt-16 md:mt-24"
              style={{ marginTop: '30px' }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md bg-white/5 border border-white/10 text-accent-teal text-sm font-bold tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(54,149,181,0.15)]">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-teal animate-pulse shadow-[0_0_8px_rgba(54,149,181,0.8)]" />
                Book Your Transformation
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-[6.5rem] font-black text-white leading-[1.05] tracking-tight drop-shadow-2xl">
                EXPERIENCE AUTOMOTIVE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-blue italic drop-shadow-[0_0_30px_rgba(54,149,181,0.3)]">REBIRTH</span> TODAY.
              </h2>
              <p className="text-text-secondary leading-relaxed text-xl md:text-2xl lg:text-3xl font-light">
                Your vehicle deserves more than just a wash. It deserves Toronto&apos;s elite mobile detailing experience. Secure your slot and let us bring the showroom directly to you.
              </p>
            </motion.div>

            {/* Pro Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mt-6 lg:mt-8 mb-16 lg:mb-24"
            >
              {/* Phone Action */}
              <div className="group relative p-[1px] rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl bg-gradient-to-b from-white/10 to-transparent hover:from-accent-teal/80 transition-all duration-500 overflow-hidden cursor-pointer hover:shadow-[0_0_50px_rgba(54,149,181,0.4)] hover:-translate-y-2">
                <div className="absolute inset-0 bg-accent-teal/15 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <div className="relative bg-black/40 backdrop-blur-xl rounded-tl-[2.9rem] rounded-br-[2.9rem] rounded-tr-lg rounded-bl-lg p-8 md:p-10 flex flex-col items-center h-full border border-white/5 group-hover:border-transparent transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-teal/20 to-accent-teal/5 text-accent-teal flex items-center justify-center mb-6 group-hover:scale-125 group-hover:shadow-[0_0_40px_rgba(54,149,181,0.8)] group-hover:bg-accent-teal/30 group-hover:text-white transition-all duration-500">
                    <Phone size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-text-secondary text-sm font-bold uppercase tracking-widest mb-2 group-hover:text-white/80 transition-colors">Call Us Directly</h3>
                  <p className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(54,149,181,0.8)] transition-all duration-300">+1 (416) 555-0100</p>
                  <div className="flex items-center gap-2 text-white/50 text-sm font-medium bg-white/5 px-4 py-2 rounded-full group-hover:bg-accent-teal/20 group-hover:text-white transition-colors duration-300">
                    <Clock size={14} className="group-hover:animate-pulse" />
                    <span>Mon - Sun: 8am - 8pm</span>
                  </div>
                </div>
              </div>

              {/* Email Action */}
              <div className="group relative p-[1px] rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl bg-gradient-to-b from-white/10 to-transparent hover:from-accent-blue/80 transition-all duration-500 overflow-hidden cursor-pointer hover:shadow-[0_0_50px_rgba(37,99,235,0.4)] hover:-translate-y-2">
                <div className="absolute inset-0 bg-accent-blue/15 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <div className="relative bg-black/40 backdrop-blur-xl rounded-tr-[2.9rem] rounded-bl-[2.9rem] rounded-tl-lg rounded-br-lg p-8 md:p-10 flex flex-col items-center h-full border border-white/5 group-hover:border-transparent transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-blue/5 text-accent-blue flex items-center justify-center mb-6 group-hover:scale-125 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.8)] group-hover:bg-accent-blue/30 group-hover:text-white transition-all duration-500">
                    <Mail size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-text-secondary text-sm font-bold uppercase tracking-widest mb-2 group-hover:text-white/80 transition-colors">Send an Email</h3>
                  <p className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.8)] transition-all duration-300">info@example.com</p>
                  <div className="flex items-center gap-2 text-white/50 text-sm font-medium bg-white/5 px-4 py-2 rounded-full group-hover:bg-accent-blue/20 group-hover:text-white transition-colors duration-300">
                    <span className="w-2 h-2 rounded-full bg-accent-blue group-hover:shadow-[0_0_10px_rgba(37,99,235,0.8)] group-hover:animate-pulse" />
                    <span>Serving the entire GTA</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* ESPACIADOR FORZADO PARA SEPARAR DEL FOOTER */}
            <div className="w-full h-16 md:h-24 lg:h-55" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;