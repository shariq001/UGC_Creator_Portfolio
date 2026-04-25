"use client";

import React from "react";
import { Instagram, Mail, ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const instaLink = "https://www.instagram.com/glossy_belle_ugc/";

  return (
    <footer id="contact" className="bg-gray-950 text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <h3 className="font-serif text-4xl font-black text-white italic">Glossy<span className="text-red-700">_</span>Belle</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
              Creating high-impact UGC content for brands that value authenticity and aesthetic excellence.
            </p>
            <div className="flex space-x-5">
              <a href={instaLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 rounded-2xl hover:bg-red-900 transition-all hover:-translate-y-1 border border-white/5">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="mailto:eshohaiqawii@gmail.com" className="p-3 bg-gray-900 rounded-2xl hover:bg-red-900 transition-all hover:-translate-y-1 border border-white/5">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-red-700 mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#insta-videos" className="text-gray-400 hover:text-white transition-colors">Clips</a></li>
              <li><a href="#brands" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-red-700 mb-8">Connect</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-400">
              <li>Email: eshohaiqawii@gmail.com</li>
              <li>Instagram: @glossy_belle_ugc</li>
              <li>Worldwide Availability</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[0.3em] font-black text-red-700 mb-8">Stay Updated</h4>
            <p className="text-sm text-gray-400 font-medium leading-relaxed">
              Get the latest insights on UGC trends and brand growth.
            </p>
            <div className="flex gap-2">
               <input type="email" placeholder="Your Email" className="bg-gray-900 border border-white/5 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-red-900 w-full text-white" />
               <button className="bg-red-900 p-3 rounded-xl hover:bg-red-800 transition-all">
                  <ArrowUp className="w-5 h-5 rotate-90 text-white" />
               </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-sm text-gray-500 font-medium">
            © {new Date().getFullYear()} Glossy_Belle Portfolio. Developed by <a href="https://www.linkedin.com/in/muhammad---shariq" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">Muhammad Shariq</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
