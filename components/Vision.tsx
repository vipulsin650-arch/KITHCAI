
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <section className="py-24 border-y border-white/5">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h3 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter uppercase mb-6">
          "Trying to build an AI robot <br /> which helps in making food."
        </h3>
        <div className="w-24 h-1 bg-teal-400 mx-auto opacity-50" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "Automation",
            desc: "The physical layer. Designing tactile-aware robotics and computer vision systems that can navigate complex kitchen environments with precision.",
            icon: Zap,
            tag: "Hardware & Vision"
          },
          {
            title: "Intelligence",
            desc: "The cognitive layer. LLM-based recipe generation paired with real-time multi-modal feedback loops for flavor correction and assembly.",
            icon: Cpu,
            tag: "LLMs & ML"
          }
        ].map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white/5 border border-white/10 hover:border-teal-400/30 transition-all group"
          >
            <card.icon className="w-10 h-10 text-teal-400 mb-6 group-hover:scale-110 transition-transform" />
            <div className="text-[10px] text-teal-400/60 uppercase tracking-widest font-bold mb-2">{card.tag}</div>
            <h4 className="text-2xl font-black text-white mb-4 uppercase">{card.title}</h4>
            <p className="text-white/50 leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
