"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Instagram } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Clips", href: "#insta-videos" },
    { name: "Brands", href: "#brands" },
    { name: "Contact", href: "#contact" },
  ];

  const instaLink = "https://www.instagram.com/glossy_belle_ugc/";

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-gray-950/90 backdrop-blur-xl py-4 shadow-[0_8px_30px_rgb(0,0,0,0.5)] border-b border-white/5" 
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="group flex items-center space-x-2">
                <span className={`font-serif text-2xl xs:text-3xl font-black tracking-tighter transition-colors ${scrolled ? 'text-white' : 'text-gray-900'} group-hover:text-red-700`}>
                  Glossy<span className="text-red-700">_</span>Belle
                </span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold uppercase tracking-widest hover:text-red-700 transition-all relative group ${scrolled ? 'text-gray-300' : 'text-gray-900'}`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <div className={`flex items-center pl-4 border-l ${scrolled ? 'border-white/10' : 'border-gray-200'}`}>
                <a href={instaLink} target="_blank" rel="noopener noreferrer" className={`${scrolled ? 'text-white' : 'text-gray-900'} hover:text-red-700 transition-all hover:scale-110`}>
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className={`p-2 focus:outline-none transition-colors ${scrolled ? 'text-white' : 'text-gray-900'} hover:text-red-700`}
              >
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Nav - Side Drawer (Not full screen) */}
      <div className={`fixed top-4 right-4 bottom-4 w-64 bg-white/70 backdrop-blur-xl z-[70] transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-[120%]'} md:hidden rounded-[32px] border border-white/40 shadow-2xl overflow-hidden`}>
        <div className="flex flex-col h-full p-8 relative">
          <button 
            onClick={closeMenu}
            className="absolute top-6 right-6 p-2 text-gray-900 hover:text-red-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mt-12 flex flex-col space-y-6">
            <p className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-400 mb-2">Navigation</p>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-xl font-serif font-black text-gray-900 hover:text-red-700 transition-all transform hover:translate-x-2"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-gray-200/50">
            <p className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-400 mb-4">Connect</p>
            <a 
              href={instaLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-red-700 font-bold hover:scale-105 transition-transform"
            >
              <Instagram className="w-6 h-6" />
              <span className="text-sm">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
