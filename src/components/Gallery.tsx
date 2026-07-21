"use client";

import { useState } from "react";
import Image from "next/image";
import { gallery } from "@/config/data/gallery";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-32 bg-[var(--color-bg-primary)] relative border-t border-[var(--color-border)]">
      <div className="content-container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[var(--color-text-secondary)] mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[var(--color-text-primary)] mb-12">
            Selected <span className="italic text-[var(--color-accent)]">Works</span>
          </h3>

        </div>

        <div 
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6"
        >
            {gallery.map((item, index) => (
              <div
                key={item.id}
                className="relative overflow-hidden cursor-pointer group break-inside-avoid shadow-sm mb-6"
                onClick={() => setLightboxImage(item.src)}
              >
                <div className="aspect-[4/5] relative w-full bg-[var(--color-bg-secondary)]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    priority={index < 4}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
                  
                  {/* Elegant overlay on hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[var(--color-bg-primary)]/90 to-transparent">
                    <span className="text-[var(--color-text-primary)] font-serif tracking-wide">{item.alt}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-[var(--color-bg-primary)]/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              onClick={() => setLightboxImage(null)}
              aria-label="Close Lightbox"
            >
              <X size={32} strokeWidth={1} />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-5xl h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                alt="Enlarged view"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
