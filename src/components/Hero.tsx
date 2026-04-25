"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#fdf2f8]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-15%] right-[-10%] w-[600px] h-[600px] bg-pink-300/30 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-red-200/20 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-pink-200 text-pink-700 text-xs font-black uppercase tracking-[0.2em]">
                <Sparkles className="w-3 h-3" />
                <span>Premium UGC Content</span>
              </div>
              {/* Using text-gray-900 and text-pink-700 for high contrast on Soft Pink */}
              <h1 className="text-4xl xs:text-5xl md:text-8xl font-serif font-black text-gray-950 leading-[1.1]">
                <span className="text-pink-700 drop-shadow-sm">Glossy</span><span className="text-red-800">_</span>Belle
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-xl font-medium leading-relaxed">
                Elevating brands through <span className="text-red-800 font-black italic underline decoration-pink-600/30 underline-offset-8">authentic storytelling</span> and high-converting visual content.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="mailto:eshohaiqawii@gmail.com"
                className="inline-flex items-center justify-center px-10 py-5 bg-red-800 text-white rounded-2xl font-bold text-lg hover:bg-gray-900 transition-all shadow-xl shadow-red-900/20 group hover:-translate-y-1"
              >
                Let&apos;s Collaborate
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="#insta-videos"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-gray-900 border-2 border-pink-200 rounded-2xl font-bold text-lg hover:border-pink-500 hover:bg-pink-50 transition-all hover:-translate-y-1"
              >
                Insta Clips
              </a>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto">
              {/* Floating Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl animate-float" />
              
              <div className="relative h-full w-full rounded-[40px] overflow-hidden glossy-card group border-white p-2 bg-white/60">
                <div className="relative h-full w-full rounded-[34px] overflow-hidden shadow-inner">
                  <Image
                    src="/Portfolio_Image.jpeg"
                    alt="Glossy_Belle Portrait"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              {/* Stats Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[32px] shadow-2xl border border-pink-100 animate-float" style={{animationDelay: '1s'}}>
                <div className="text-center">
                  <p className="text-3xl font-black text-red-900 font-serif">15+</p>
                  <p className="text-[10px] uppercase font-bold tracking-tighter text-pink-700">Brands Partnered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
