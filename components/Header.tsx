
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-2xl border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-12 h-12 bg-white text-black flex items-center justify-center font-black text-2xl tracking-tighter rounded-none hover:bg-teal-400 transition-colors cursor-pointer"
          >
            VS
          </motion.div>
          <div className="flex flex-col -space-y-1">
            <span className="text-white font-black tracking-tighter uppercase text-xl italic">VIPUL</span>
            <span className="text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold">Stealth Founder</span>
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <div className="flex items-center space-x-2 px-5 py-2 bg-white/5 border border-white/10 rounded-none group hover:border-teal-400/50 transition-colors">
            <motion.div 
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_12px_rgba(45,212,191,1)]"
            />
            <span className="text-[10px] text-teal-400 font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors">Status: Building</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
