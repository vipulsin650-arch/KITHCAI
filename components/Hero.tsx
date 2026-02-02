
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative mt-20 mb-32">
      {/* Background Name Mask */}
      <div className="absolute -top-16 -left-10 select-none pointer-events-none opacity-[0.03] overflow-hidden whitespace-nowrap">
        <h2 className="text-[25vw] font-black leading-none text-white italic">VIPUL</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 text-teal-400 mb-6 border-b border-teal-400/30 pb-2">
            <Cpu className="w-4 h-4" />
            <span className="text-xs font-black uppercase tracking-[0.4em]">Founder Identity</span>
          </div>
          
          <h2 className="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-8 italic uppercase">
            VIPUL <br />
            <span className="text-teal-400">FOUNDER</span>
          </h2>
          
          <div className="space-y-6 mb-12">
            <p className="text-2xl text-white font-bold leading-tight tracking-tight max-w-lg">
              Technical Founder bridging AI with Physical Robotics.
            </p>
            <p className="text-lg text-white/40 max-w-md leading-relaxed">
              I am currently building the mechanical core of the next generation kitchen—where autonomous intelligence meets real-world culinary execution.
            </p>
          </div>
          
          <a 
            href="https://linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-4 px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-teal-400 transition-all duration-500 group"
          >
            <span>Verify Profile</span>
            <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative aspect-[4/5] overflow-hidden rounded-none cursor-crosshair group shadow-[0_0_50px_rgba(0,0,0,1)] border border-white/5"
        >
          {/* Grayscale to Color Transition Image */}
          <div className="absolute inset-0 transition-all duration-1000 ease-in-out grayscale group-hover:grayscale-0">
            <img 
              src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1000&auto=format&fit=crop" 
              alt="Autonomous Robot Arm" 
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
            />
          </div>

          {/* Tactical Overlays */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-all duration-1000" />
          
          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden z-20">
              <motion.div 
                  animate={{ y: ['-100%', '300%'] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="w-full h-[2px] bg-teal-400/30 blur-[1px]"
              />
          </div>

          <div className="absolute top-0 right-0 p-8 z-30 flex flex-col items-end">
            <div className="text-[10px] text-teal-400 font-black uppercase tracking-[0.5em] mb-1">Optical Feed</div>
            <div className="text-[8px] text-white/30 uppercase tracking-widest">Unit 04: Culinary Ops</div>
          </div>

          <div className="absolute bottom-10 left-10 z-30">
            <div className="flex items-center space-x-3 mb-3">
                <div className="w-2 h-2 bg-teal-400 animate-pulse rounded-full" />
                <p className="text-teal-400 text-xs uppercase tracking-[0.4em] font-black">Building Phase 1</p>
            </div>
            <p className="text-white text-2xl font-black uppercase tracking-tighter">The Vision</p>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] mt-1 italic">Mechanical Precision & Machine Vision</p>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/20 group-hover:border-teal-400/50 transition-colors" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-white/20 group-hover:border-teal-400/50 transition-colors" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
