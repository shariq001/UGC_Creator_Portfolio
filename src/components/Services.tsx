"use client";

import { motion } from "framer-motion";
import { specializations } from "@/config/data/specializations";
import { useState } from "react";

export default function Services() {
  return (
    <section id="specializations" className="py-32 bg-[var(--color-bg-secondary)] relative border-t border-[var(--color-border)]">
      <div className="content-container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-[var(--color-text-secondary)] mb-4">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[var(--color-text-primary)]">
              Specialized <span className="italic text-[var(--color-accent)]">Formats</span>
            </h3>
          </div>
          <p className="text-[var(--color-text-secondary)] max-w-md font-light text-balance">
            Delivering high-converting content formats tailored specifically to your brand's architecture and audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <InteractiveCard key={spec.id} spec={spec} idx={idx} Icon={Icon} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InteractiveCard({ spec, idx, Icon }: { spec: any, idx: number, Icon: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-10 flex flex-col h-full bg-white border border-[var(--color-border)] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
    >
      {/* Interactive Background Fill */}
      <motion.div 
        className="absolute inset-0 bg-[var(--color-accent)] opacity-0 origin-bottom"
        animate={{ 
          opacity: isHovered ? 1 : 0,
          scaleY: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <motion.div 
          className="mb-8"
          animate={{
            color: isHovered ? "#ffffff" : "var(--color-text-tertiary)",
            scale: isHovered ? 1.2 : 1,
            x: isHovered ? 10 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={32} strokeWidth={1} />
        </motion.div>
        
        <motion.h4 
          className="text-xl font-serif mb-4"
          animate={{ color: isHovered ? "#ffffff" : "var(--color-text-primary)" }}
        >
          {spec.title}
        </motion.h4>
        
        <motion.p 
          className="font-light leading-relaxed flex-grow text-sm"
          animate={{ color: isHovered ? "#ffffff" : "var(--color-text-secondary)" }}
        >
          {spec.description}
        </motion.p>
        
        <motion.div 
          className="mt-8 h-px bg-[var(--color-border)]"
          animate={{ 
            width: isHovered ? "100%" : "2rem",
            backgroundColor: isHovered ? "rgba(255,255,255,0.5)" : "var(--color-border)"
          }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
}
