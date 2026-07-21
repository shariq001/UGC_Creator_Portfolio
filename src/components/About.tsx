"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site.config";

export default function About() {
  return (
    <section id="about" className="py-32 bg-[var(--color-bg-primary)] relative border-t border-[var(--color-border)]">
      <div className="content-container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-10"
          >
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-[var(--color-text-secondary)] mb-4">Behind the Lens</h2>
              <h3 className="text-4xl md:text-6xl font-serif text-[var(--color-text-primary)] leading-tight mb-8">
                {siteConfig.about.heading.split(" ").slice(0, -2).join(" ")} <br className="hidden md:block"/>
                <span className="italic text-[var(--color-accent)]">{siteConfig.about.heading.split(" ").slice(-2).join(" ")}</span>
              </h3>
            </div>
            
            <div className="prose prose-lg text-[var(--color-text-secondary)] max-w-none">
              {siteConfig.about.paragraphs.map((paragraph, index) => (
                <p key={index} className={`font-light leading-relaxed ${index > 0 ? "mt-6" : ""}`}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="pt-8 border-t border-[var(--color-border)]">
              <div className="flex flex-wrap gap-3">
                {siteConfig.about.skills.map((skill, idx) => (
                  <motion.span 
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                    className="px-5 py-2 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-secondary)] text-xs uppercase tracking-widest hover:border-[var(--color-text-primary)] transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {siteConfig.about.stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1), duration: 0.6 }}
                  className="aspect-square bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-6 flex flex-col items-center justify-center text-center group hover:bg-[var(--color-text-primary)] transition-colors duration-500"
                >
                  <span className="text-4xl sm:text-5xl font-serif text-[var(--color-text-primary)] mb-4 group-hover:text-[var(--color-bg-primary)] group-hover:scale-110 transition-transform duration-500">{stat.value}</span>
                  <span className="text-[10px] text-[var(--color-text-secondary)] group-hover:text-[var(--color-bg-tertiary)] uppercase tracking-[0.2em] leading-relaxed transition-colors duration-500">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
