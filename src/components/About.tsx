"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Zap, Clock, Star } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Clock className="w-6 h-6" />, label: "Experience", value: "1+ Year" },
    { icon: <Zap className="w-6 h-6" />, label: "Turnaround", value: "Fast & Flexible" },
    { icon: <Sparkles className="w-6 h-6" />, label: "Approach", value: "Insights-Driven" },
  ];

  return (
    <section id="about" className="py-24 bg-[#111827] relative overflow-hidden text-white">
       {/* Pink accent glow */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-600/10 -z-10 blur-[120px]" />
       <div className="absolute bottom-0 left-0 w-1/3 h-full bg-red-800/10 -z-10 blur-[100px]" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-pink-500 font-bold uppercase tracking-widest text-xs">
                <Star className="w-4 h-4 fill-pink-500" />
                <span>My Story</span>
              </div>
              <h2 className="text-3xl xs:text-4xl md:text-6xl font-serif font-black text-white leading-tight">
                Authenticity is my <br/> <span className="text-pink-500 italic text-glow-pink">Core Philosophy</span>.
              </h2>
              <div className="w-32 h-2 bg-red-800 rounded-full" />
            </div>
            
            <div className="space-y-6 text-lg text-gray-300 font-medium leading-relaxed">
              <p>
                I&apos;m a UGC content creator with 1 year of experience. I enjoy working with brands 
                to tell compelling stories and connect with audiences. My process is fast, 
                flexible, and insights-driven.
              </p>
              
              <p className="bg-white/5 p-6 rounded-2xl border-l-4 border-pink-500 italic shadow-sm text-gray-400 backdrop-blur-sm">
                &quot;I don&apos;t just create videos; I create connections. Every piece of content is a strategic asset designed to resonate deeply with your target audience.&quot;
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="p-8 bg-white/5 rounded-[32px] shadow-sm hover:shadow-pink-500/20 hover:-translate-y-2 transition-all duration-500 border border-white/10 group text-center backdrop-blur-sm">
                  <div className="text-pink-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">{stat.label}</p>
                  <p className="text-sm font-black text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-6 animate-float">
              <div className="space-y-6 pt-12">
                <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl border-4 border-pink-500/20 group p-1 bg-white/5">
                   <div className="relative h-full w-full rounded-[36px] overflow-hidden">
                      <Image 
                        src="/672007685_1338533128323687_946673167436452959_n.jpg"
                        alt="Work Sample 1"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                      />
                   </div>
                </div>
                <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl border-4 border-pink-500/20 group p-1 bg-white/5">
                   <div className="relative h-full w-full rounded-[36px] overflow-hidden">
                      <Image 
                        src="/672254100_2251175899031478_1460615785314128018_n.jpg"
                        alt="Work Sample 2"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                      />
                   </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl border-4 border-pink-500/20 group p-1 bg-white/5">
                   <div className="relative h-full w-full rounded-[36px] overflow-hidden">
                      <Image 
                        src="/672286356_996091853066541_6653537609845469049_n.jpg"
                        alt="Work Sample 3"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                      />
                   </div>
                </div>
                <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl border-4 border-pink-500/20 group p-1 bg-white/5">
                   <div className="relative h-full w-full rounded-[36px] overflow-hidden">
                      <Image 
                        src="/675546436_1466508841842613_5389115793953257184_n.jpg"
                        alt="Work Sample 4"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                      />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
