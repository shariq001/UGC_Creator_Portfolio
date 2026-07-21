"use client";

import { motion } from "framer-motion";
import { reels } from "@/config/data/reels";

export default function InstaVideos() {
  return (
    <section id="videos" className="py-32 bg-[var(--color-bg-primary)] bg-noise relative border-t border-[var(--color-border)]">
      <div className="content-container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[var(--color-text-secondary)] mb-4">Motion</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[var(--color-text-primary)] mb-6">
            Engaging <span className="italic text-[var(--color-accent)]">Video Formats</span>
          </h3>
          <p className="text-[var(--color-text-secondary)] font-light text-balance max-w-lg">
            Immersive, algorithm-friendly short-form content natively playing for seamless viewing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {reels.map((reel, idx) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="w-full max-w-sm group"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-[var(--color-bg-secondary)] border border-[var(--color-border)] shadow-sm group-hover:shadow-xl transition-all duration-500 rounded-xl">
                <iframe
                  className="absolute inset-0 w-full h-full object-cover"
                  src={reel.url}
                  frameBorder="0"
                  scrolling="no"
                  allow="encrypted-media"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
