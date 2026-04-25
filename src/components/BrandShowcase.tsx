"use client";

import React from "react";

const brands = [
  { name: "@a1nity.pk", url: "https://www.instagram.com/a1nity.pk/" },
  { name: "@fegplus", url: "https://www.instagram.com/fegpluspk/" },
  { name: "@maybelline.pk", url: "https://www.instagram.com/maybelline_pk/" },
  { name: "@we.and.the.moon", url: "https://www.instagram.com/we.and.the.moon/" },
  { name: "@meezoorganics", url: "https://www.instagram.com/meezoorganics_official/" },
  { name: "@rivajmahal", url: "https://www.instagram.com/rivaajmahal/" },
  { name: "@xainfoods", url: "https://www.instagram.com/xainfoods/" },
  { name: "@rameennaturalsofficial", url: "https://www.instagram.com/rameennaturalsofficial/" },
  { name: "@tuffyorganics", url: "https://www.instagram.com/tuffyorganics/" },
  { name: "@revival.healthcare", url: "https://www.instagram.com/revival.healthcare/" },
  { name: "@tajherbal.pk", url: "https://www.instagram.com/tajherbal.pk/" },
  { name: "@eliteglowhub.pk", url: "https://www.instagram.com/eliteglowhub.pk/" },
  { name: "@hairties.pk", url: "https://www.instagram.com/hairties.pk/" },
  { name: "@c99 official", url: "https://www.instagram.com/c99_official/" },
  { name: "@adiva.pk", url: "https://www.instagram.com/adiva.pk/" }
];

const BrandShowcase = () => {
  return (
    <section id="brands" className="py-24 bg-[#991b1b] overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-black text-white">
          Trusted by <span className="text-pink-400 italic">Industry Leaders</span>
        </h2>
        <div className="w-24 h-1.5 bg-pink-500 rounded-full mx-auto mt-4 shadow-[0_0_15px_rgba(244,114,182,0.5)]" />
      </div>

      <div className="relative flex overflow-x-hidden group py-16 bg-black/10">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {/* First set of brands */}
          {/* Using text-white/40 as base and text-white on hover for better visibility */}
          {brands.map((brand, index) => (
            <a
              key={index}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl md:text-6xl font-serif font-black mx-20 text-white/40 hover:text-white transition-all duration-500 cursor-pointer hover:scale-110 inline-block decoration-transparent"
            >
              {brand.name}
            </a>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <a
              key={`dup-${index}`}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl md:text-6xl font-serif font-black mx-20 text-white/40 hover:text-white transition-all duration-500 cursor-pointer hover:scale-110 inline-block decoration-transparent"
            >
              {brand.name}
            </a>
          ))}
        </div>

        {/* Gradient overlays to fade edges */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-red-900 via-red-900/80 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-red-900 via-red-900/80 to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <p className="text-white/40 font-medium italic">
          Click any handle to visit their official profile.
        </p>
      </div>
    </section>
  );
};

export default BrandShowcase;
