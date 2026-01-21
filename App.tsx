import React from 'react';
import { BackgroundEffects } from './components/ui/BackgroundEffects';
import Navbar from './components/Layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Certifications from './components/sections/Certifications';
import Career from './components/sections/Career';
import Projects from './components/sections/Projects';
import Photography from './components/sections/Photography';
import Footer from './components/Layout/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-background text-white min-h-screen selection:bg-accent selection:text-white">
      <BackgroundEffects />
      
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Certifications />
          <Career />
          <Projects />
          <Photography />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;