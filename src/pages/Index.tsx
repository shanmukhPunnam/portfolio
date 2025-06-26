
import React from 'react';
import Hero from '@/components/Hero';
import GameShowcase from '@/components/GameShowcase';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <section id="home">
        <Hero />
      </section>
      <section id="games">
        <GameShowcase />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
