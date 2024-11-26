import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import OdooModules from './components/OdooModules';
import OdooAdvantages from './components/OdooAdvantages';
import CustomSolutions from './components/CustomSolutions';
import CompetitiveEdge from './components/CompetitiveEdge';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <OdooModules />
        <CustomSolutions />
        <OdooAdvantages />
        <CompetitiveEdge />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;