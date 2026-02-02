
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
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black cursor-none"
      onClick={onEnter}
    >
      <div className="relative group cursor-pointer w-full flex items-center justify-center">
        <motion.h1 
          className="text-[25vw] font-black leading-none tracking-tighter text-white select-none transition-all duration-700 group-hover:text-teal-400 group-hover:drop-shadow-[0_0_30px_rgba(45,212,191,0.6)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "circOut" }}
        >
          IDEA
        </motion.h1>
      </div>
      
      <motion.button
        onClick={(e) => {
          e.stopPropagation();
          onEnter();
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="mt-12 text-teal-400/60 uppercase tracking-[0.4em] text-sm font-light hover:text-teal-400 transition-colors"
      >
        Click to Start
      </motion.button>
    </motion.div>
  );
};

export default Splash;
