
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Splash from './components/Splash';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Vision from './components/Vision';
import Pedigree from './components/Pedigree';

const App: React.FC = () => {
  const [showMain, setShowMain] = useState(false);

  return (
    <div className="bg-black min-h-screen selection:bg-teal-500/30 selection:text-teal-200">
      <AnimatePresence mode="wait">
        {!showMain ? (
          <Splash key="splash" onEnter={() => setShowMain(true)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <Header />
            <main className="container mx-auto px-6 pt-24 pb-32">
              <Hero />
              <Problem />
              <Vision />
              <Pedigree />
            </main>
            
            <footer className="py-12 border-t border-white/5 text-center text-white/20 text-xs tracking-widest uppercase">
              &copy; {new Date().getFullYear()} Vipul S. &mdash; Stealth Mode
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
