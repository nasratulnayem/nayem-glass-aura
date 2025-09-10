import React from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Hero from '@/components/Sections/Hero';
import Resume from '@/components/Sections/Resume';
import Portfolio from '@/components/Sections/Portfolio';
import Blog from '@/components/Sections/Blog';
import Videos from '@/components/Sections/Videos';
import Contact from '@/components/Sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        <Resume />
        <Portfolio />
        <Blog />
        <Videos />
        <Contact />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
