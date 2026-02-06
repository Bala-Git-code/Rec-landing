import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlowchartSection from './components/FlowchartSection';
import ImpactResults from './components/ImpactResults';
import LogoSlider from './components/LogoSlider';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-secondary-bg font-sans text-gray-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FlowchartSection />
        <ImpactResults />
        <LogoSlider />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App;
