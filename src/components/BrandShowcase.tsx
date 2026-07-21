"use client";

import { brands } from "@/config/data/brands";
import { Star } from "lucide-react";

export default function BrandShowcase() {
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section id="brands" className="py-24 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)] overflow-hidden flex flex-col justify-center">
      <div className="content-container px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-4 text-[var(--color-text-tertiary)]">
          <div className="h-px bg-[var(--color-border)] flex-grow" />
          <h3 className="text-xs uppercase tracking-[0.3em] font-medium">
            Trusted by Industry Leaders
          </h3>
          <div className="h-px bg-[var(--color-border)] flex-grow" />
        </div>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden group mt-4">
        {/* Left and right fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-bg-secondary)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-bg-secondary)] to-transparent z-10 pointer-events-none" />
        
        <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] items-center">
          {duplicatedBrands.map((brand, idx) => (
            <div key={`${brand.name}-${idx}`} className="flex items-center">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl md:text-5xl font-serif text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors duration-500 cursor-pointer px-8 sm:px-12 opacity-80 hover:opacity-100"
              >
                {brand.name}
              </a>
              <Star size={12} className="text-[var(--color-accent)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
