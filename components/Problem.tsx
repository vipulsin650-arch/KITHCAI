
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-teal-400/50 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h3 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter uppercase mb-4">
            THE <span className="text-teal-400">CULINARY</span> VOID
          </h3>
          <p className="text-white/40 uppercase tracking-[0.4em] text-xs font-bold">Solving the Post-Work Labor Crisis</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Column 1: The Shift */}
          <div className="p-8 bg-white/[0.02] border border-white/5 rounded-sm">
            <Users className="w-8 h-8 text-teal-400 mb-6" />
            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">The Modern Shift</h4>
            <p className="text-white/50 leading-relaxed">
              In today's world, both partners work full-time. The traditional "home-maker" role has disappeared, yet the 2 hours of daily kitchen labor remains.
            </p>
          </div>

          {/* Column 2: The Pain Point */}
          <div className="p-8 bg-white/[0.04] border border-teal-400/20 rounded-sm relative">
            <Clock className="w-8 h-8 text-teal-400 mb-6" />
            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">The Pain Point</h4>
            <p className="text-white/50 leading-relaxed">
              After a 10-hour workday, no one wants to stand over a stove. People have the money to eat well, but neither the time nor the energy to prepare it.
            </p>
          </div>

          {/* Column 3: The Market Logic */}
          <div className="p-8 bg-teal-400 text-black rounded-sm">
            <ArrowRight className="w-8 h-8 mb-6" />
            <h4 className="text-xl font-black mb-4 uppercase tracking-tight">The Solution</h4>
            <p className="font-bold leading-relaxed">
              Families will pay a premium for reclaimed time. We are building the mechanical pair of hands that takes over the labor, bridging the gap between work and rest.
            </p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 border-l-2 border-teal-400 bg-white/[0.02] text-center md:text-left"
        >
          <p className="text-2xl md:text-3xl font-light text-white leading-snug">
            "We are building <span className="text-teal-400 font-black italic">the someone</span> modern households are missing: An autonomous chef that works while you recover."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Problem;
