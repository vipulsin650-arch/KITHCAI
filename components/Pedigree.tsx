
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, MapPin, Award } from 'lucide-react';

const Pedigree: React.FC = () => {
  return (
    <section className="py-32 border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-24">
        {/* Left: Basics & Education */}
        <div className="space-y-20">
          <div>
            <div className="flex items-center space-x-4 mb-10">
               <h5 className="text-white font-black text-3xl uppercase tracking-tighter italic">Pedigree</h5>
               <div className="h-px flex-grow bg-white/10" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { label: "Founder", value: "VIPUL S.", icon: UserCheck },
                { label: "Status", value: "Technical CEO", icon: ShieldCheck },
                { label: "Base", value: "Delhi, India", icon: MapPin },
                { label: "Age", value: "18 (Skin in Game)", icon: Award }
              ].map((item) => (
                <div key={item.label} className="group">
                  <div className="text-[10px] text-teal-400/60 uppercase tracking-[0.4em] font-black mb-3 flex items-center">
                    <item.icon className="w-3 h-3 mr-2" />
                    {item.label}
                  </div>
                  <div className="text-2xl font-black text-white tracking-tight uppercase group-hover:text-teal-400 transition-colors">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-white/30 text-xs uppercase tracking-[0.5em] mb-12 font-bold">Academic Path</h5>
            <div className="relative pl-10 space-y-16">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10" />
              {[
                { year: "GRAD 2020", school: "The Army Public School", degree: "Higher Secondary" },
                { year: "PRESENT", school: "Galgotias University", degree: "Computer Science Engineering" }
              ].map((edu, i) => (
                <div key={edu.school} className="relative group">
                  <motion.div 
                    whileInView={{ scale: [1, 1.3, 1], backgroundColor: ["#2dd4bf", "#ffffff", "#2dd4bf"] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute -left-[45px] top-1.5 w-2.5 h-2.5 bg-teal-400 rounded-none z-10" 
                  />
                  <div className="text-teal-400 font-black text-[10px] tracking-[0.3em] mb-2 uppercase">{edu.year}</div>
                  <div className="text-white font-black text-2xl mb-1 uppercase tracking-tighter group-hover:translate-x-2 transition-transform">{edu.school}</div>
                  <div className="text-white/40 text-sm font-medium uppercase tracking-widest">{edu.degree}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Commitment Cards */}
        <div className="flex flex-col justify-center space-y-8">
           <div className="p-1 w-fit bg-teal-400/10 border border-teal-400/20 mb-4">
              <span className="text-[10px] text-teal-400 font-black uppercase tracking-[0.5em] px-4">Founder Directives</span>
           </div>
           
           {[
             {
               title: "100% Commitment",
               desc: "Every waking hour is dedicated to solving the culinary labor crisis. Zero side-projects. Zero distractions. Full vertical integration of the solution.",
               tag: "Execution"
             },
             {
               title: "Solo Technical Lead",
               desc: "Ownership of the entire stack. From hardware design and prototyping to the AI vision models and recipe intelligence architectures.",
               tag: "Architecture"
             }
           ].map((card, i) => (
             <motion.div
               key={card.title}
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.2 }}
               className="p-12 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all relative overflow-hidden group"
             >
               <div className="absolute top-0 right-0 p-8 text-white/5 text-6xl font-black italic select-none">
                 0{i + 1}
               </div>
               <div className="text-teal-400 text-[9px] font-black uppercase tracking-[0.5em] mb-4">{card.tag}</div>
               <h6 className="text-3xl font-black text-white uppercase mb-6 tracking-tighter italic">{card.title}</h6>
               <p className="text-white/40 leading-relaxed text-lg max-w-md">{card.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Pedigree;
