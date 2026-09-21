'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <main className="relative bg-bg-primary min-h-screen text-white selection:bg-accent-teal selection:text-bg-primary w-full">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Gallery />
      <ContactCTA />
      <Footer />
      <FloatingButtons />
    </main>
  );
}