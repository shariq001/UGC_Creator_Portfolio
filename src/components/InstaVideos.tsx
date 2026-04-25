"use client";

import React from "react";
import Image from "next/image";
import { Instagram, ExternalLink, PlayCircle } from "lucide-react";

const InstaVideos = () => {
  const instaLink = "https://www.instagram.com/glossy_belle_ugc/";
  
  const videos = [
    {
      name: "Aesthetic Product Showcase",
      url: "https://www.instagram.com/reel/DUES99SDEnV/?igsh=bjVpMnBxYTd4aHN1",
      id: "DUES99SDEnV",
      fallback: "/672007685_1338533128323687_946673167436452959_n.jpg",
    },
    {
      name: "Authentic Review Reel",
      url: "https://www.instagram.com/reel/DVt7a6ojEVX/?igsh=MTBhc3hpcGIwaTZrNA==",
      id: "DVt7a6ojEVX",
      fallback: "/672254100_2251175899031478_1460615785314128018_n.jpg",
    },
    {
      name: "Lifestyle Content Clip",
      url: "https://www.instagram.com/reel/DWYHNfJDGLt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      id: "DWYHNfJDGLt",
      fallback: "/672286356_996091853066541_6653537609845469049_n.jpg",
    },
  ];

  return (
    <section id="insta-videos" className="py-24 bg-[#f472b6] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900/20 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4 text-left">
            <h2 className="text-3xl xs:text-4xl md:text-5xl font-serif font-black text-white leading-tight">
              Insta <span className="text-red-900 italic">Videos</span>
            </h2>
            <div className="w-24 h-1.5 bg-red-900 rounded-full" />
            <p className="text-white/90 max-w-md font-medium">
              Real-time short-form content designed to capture attention and build brand trust.
            </p>
          </div>
          
          <a 
            href={instaLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white text-pink-600 px-6 py-3 rounded-2xl font-black hover:bg-red-900 hover:text-white transition-all group shadow-xl"
          >
            <span>Follow on Instagram</span>
            <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {videos.map((video, index) => (
            <div key={index} className="group relative">
              <div className="relative aspect-[9/16] rounded-[32px] overflow-hidden bg-white/10 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-white/20">
                {/* 
                  Using Image Proxy to bypass Instagram's Referer block.
                  The URL fetches the large thumbnail for the specific post/reel ID.
                */}
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center overflow-hidden">
                  <Image 
                    src={`https://images.weserv.nl/?url=https://www.instagram.com/p/${video.id}/media/?size=l`}
                    alt={video.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    unoptimized
                    onError={(e) => {
                      // If proxy also fails, use the local high-quality work sample
                      const target = e.target as HTMLImageElement;
                      target.src = video.fallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-transparent to-transparent z-10" />
                  <PlayCircle className="w-16 h-16 text-white opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 z-20" />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-xl font-serif font-bold mb-4 drop-shadow-md">
                    {video.name}
                  </h3>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-red-900 rounded-xl text-sm font-black hover:bg-red-900 hover:text-white transition-all w-full justify-center shadow-lg"
                  >
                    <span>Watch Reel</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstaVideos;
