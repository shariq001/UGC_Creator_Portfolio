"use client";

import React from "react";
import { Camera, MessageSquare, Video, ShieldCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Honest Reviews",
      description: "Building brand trust through genuine, unfiltered product experiences that resonate with customers.",
      icon: <ShieldCheck className="w-10 h-10" />,
    },
    {
      title: "Aesthetic Shoots",
      description: "High-end visual content that captures the beauty and essence of your products in every frame.",
      icon: <Camera className="w-10 h-10" />,
    },
    {
      title: "Storytelling",
      description: "Compelling narratives that turn casual viewers into loyal brand advocates and customers.",
      icon: <MessageSquare className="w-10 h-10" />,
    },
    {
      title: "Viral Reels",
      description: "Short-form video optimized for social algorithms to maximize your brand reach and awareness.",
      icon: <Video className="w-10 h-10" />,
    },
  ];

  return (
    <section id="services" className="py-32 bg-[#030712] relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-900/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center space-y-6 mb-24">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-gray-900 leading-tight">
            My <span className="text-red-800 italic">Specializations</span>
          </h2>
          <div className="w-24 h-1.5 bg-red-900 rounded-full mx-auto" />
          <p className="text-gray-400 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Crafting premium UGC content tailored for beauty, health, and lifestyle sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-10 rounded-[48px] border border-red-900/20 hover:bg-red-900/40 hover:shadow-2xl hover:shadow-red-900/20 hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="mb-8 p-5 bg-gray-800 rounded-3xl w-fit shadow-sm group-hover:bg-red-700 group-hover:rotate-[360deg] transition-all duration-700">
                <div className="text-red-600 group-hover:text-white transition-colors duration-700">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-black text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 font-medium leading-relaxed group-hover:text-gray-200 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
