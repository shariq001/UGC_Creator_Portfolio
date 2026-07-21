"use client";

import { siteConfig } from "@/config/site.config";
import { motion } from "framer-motion";
import Link from "next/link";
import { MoveDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[var(--color-bg-primary)] bg-noise pt-20">
      <div className="relative z-10 content-container px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative group cursor-pointer inline-flex items-center justify-center">
            {/* Ambient Animated Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-secondary)] via-[var(--color-accent)] to-[var(--color-bg-tertiary)] rounded-full blur-md opacity-40 group-hover:opacity-100 animate-gradient-flow transition-opacity duration-700"></div>
            
            {/* The Badge Itself */}
            <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-primary)] border border-[var(--color-border)]/50 px-6 py-2.5 rounded-full bg-[var(--color-bg-primary)]/80 backdrop-blur-md overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:border-[var(--color-accent)]/50">
               {/* Internal Flowing Gradient */}
               <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-primary)] via-[var(--color-accent)]/20 to-[var(--color-bg-primary)] opacity-0 group-hover:opacity-100 animate-gradient-flow transition-opacity duration-700"></span>
               
               <span className="relative z-20 flex items-center gap-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-[pulse_2s_ease-in-out_infinite] group-hover:scale-150 transition-transform duration-500"></span>
                 {siteConfig.legalName}
               </span>
            </span>
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-serif text-[var(--color-text-primary)] mb-8 max-w-6xl leading-[1.1] tracking-tight"
        >
          {siteConfig.hero.heading1} <br className="hidden md:block" />
          <span className="italic text-[var(--color-accent)] font-light">{siteConfig.hero.heading2}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mb-12 font-light tracking-wide text-balance"
        >
          {siteConfig.description}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <Link 
            href="#gallery"
            className="px-10 py-4 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] text-sm uppercase tracking-widest font-medium hover:bg-black transition-all duration-300 w-full sm:w-auto text-center"
          >
            View Work
          </Link>
          <Link 
            href="#contact"
            className="px-10 py-4 border border-[var(--color-border)] text-[var(--color-text-primary)] text-sm uppercase tracking-widest font-medium w-full sm:w-auto text-center glass-panel btn-fill-left"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-[var(--color-text-tertiary)]"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] mb-4">Scroll to discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <MoveDown size={20} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}
