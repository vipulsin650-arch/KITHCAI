
import React from 'react';
import { motion } from 'framer-motion';

interface SplashProps {
  onEnter: () => void;
}

const Splash: React.FC<SplashProps> = ({ onEnter }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black cursor-pointer"
      onClick={onEnter}
    >
      <div className="relative group w-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1 
          className="text-[20vw] font-black leading-none tracking-tighter text-white select-none transition-all duration-700 group-hover:text-teal-400 group-hover:drop-shadow-[0_0_50px_rgba(45,212,191,0.4)]"
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          IDEA
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 flex flex-col items-center"
        >
          <div className="h-px w-24 bg-white/20 mb-8" />
          <motion.button
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-teal-400 text-xs font-black uppercase tracking-[0.6em] hover:text-white transition-colors"
          >
            Deploying Reality &mdash; Click to Access
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle corner tech accents */}
      <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/20" />
      <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/20" />
    </motion.div>
  );
};

export default Splash;
