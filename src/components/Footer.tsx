"use client";

import { siteConfig } from "@/config/site.config";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showPromo, setShowPromo] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("KITTY10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-[var(--color-bg-tertiary)] pt-32 pb-12 border-t border-[var(--color-border)] relative">
      <div className="content-container px-4 sm:px-6 lg:px-8">
        
        {/* Massive CTA inside Footer */}
        <div className="flex flex-col items-center text-center mb-24 border-b border-[var(--color-border)] pb-24">
          <h2 className="text-5xl sm:text-7xl md:text-[8rem] font-serif text-[var(--color-text-primary)] leading-[0.9] tracking-tighter mb-8">
            Ready to <br />
            <span className="italic text-[var(--color-accent)] font-light">Collaborate?</span>
          </h2>
          <Link 
            href="#contact"
            className="inline-flex items-center gap-4 px-10 py-5 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] text-sm uppercase tracking-widest font-medium hover:bg-[var(--color-accent)] transition-all duration-300"
          >
            Start a project <ArrowRight size={18} />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-12 relative">
          <div className="max-w-md md:w-1/3">
            <Link href="/" className="text-3xl font-serif text-[var(--color-text-primary)] tracking-widest uppercase mb-6 block">
              {siteConfig.name}
            </Link>
            <p className="text-[var(--color-text-secondary)] font-light text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>
          
          {/* Center Monogram / Animated Badge */}
          <div className="hidden md:flex justify-center items-center md:w-1/3">
            <div className="relative w-36 h-36 flex items-center justify-center group cursor-default">
              {/* Rotating outer text */}
              <div className="absolute inset-0 animate-[spin_12s_linear_infinite] group-hover:animate-[spin_3s_linear_infinite] transition-all duration-700 ease-in-out group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-500">
                  <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                  <text fontSize="10.5" className="uppercase tracking-[0.1em] font-sans" fill="currentColor">
                    <textPath href="#circlePath" startOffset="0%" textLength="238" lengthAdjust="spacing">
                      GLOSSY BELLE • UGC CREATOR • 
                    </textPath>
                  </text>
                </svg>
              </div>
              
              {/* Center GB */}
              <div className="w-16 h-16 rounded-full group-hover:rounded-xl bg-transparent border border-[var(--color-border)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-all duration-500 z-10 shadow-sm group-hover:shadow-xl group-hover:rotate-12 group-hover:scale-110">
                <span className="font-serif text-2xl italic font-light tracking-tighter pr-0.5 text-[var(--color-text-secondary)] group-hover:text-[var(--color-bg-primary)] transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110">GB</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-16 md:gap-24 md:w-1/3 md:justify-end">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-tertiary)] mb-6">Explore</h4>
              <ul className="space-y-4">
                {siteConfig.footer.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors font-light hover-underline-center inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-tertiary)] mb-6">Connect</h4>
              <ul className="space-y-4">
                <li>
                  <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors font-light hover-underline-center inline-block">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.social.email}`} className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors font-light hover-underline-center inline-block">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Creator / Etsy CTA Banner */}
        <div className="mb-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)] border border-[var(--color-border)] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex min-w-12 h-12 rounded-full bg-[var(--color-text-primary)] items-center justify-center text-[var(--color-bg-primary)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-lg font-serif text-[var(--color-text-primary)] mb-1">Are you a UGC Creator?</p>
              <p className="text-xs uppercase tracking-widest text-[var(--color-text-secondary)]">Get this exact premium portfolio website for yourself.</p>
            </div>
          </div>
          
          <div className="flex w-full lg:w-auto">
            <button 
              onClick={() => setShowPromo(true)}
              className="px-8 py-4 bg-white border border-[var(--color-border)] text-[var(--color-text-primary)] text-[10px] sm:text-xs uppercase tracking-widest font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors whitespace-nowrap shadow-sm hover:shadow-md text-center w-full"
            >
              GET IT HERE
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-[var(--color-border)]">
          <p className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-widest">
            © {currentYear} {siteConfig.footer.copyrightName}.
          </p>
          <p className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-widest">
            All rights reserved.
          </p>
        </div>
      </div>

      {/* Promo Code Modal */}
      <AnimatePresence>
        {showPromo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--color-bg-primary)]/80 backdrop-blur-sm"
            onClick={() => setShowPromo(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-8 md:p-12 border border-[var(--color-border)] rounded-2xl shadow-2xl max-w-md w-full text-center relative"
            >
              <button 
                onClick={() => setShowPromo(false)}
                className="absolute top-4 right-4 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
                aria-label="Close modal"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
              
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>

              <h3 className="text-3xl font-serif text-[var(--color-text-primary)] mb-4">Special Offer</h3>
              <p className="text-[var(--color-text-secondary)] font-light mb-8 text-balance leading-relaxed">
                Enjoy a 10% discount on any premium portfolio template from our store. Use the promo code below at checkout:
              </p>
              
              <div 
                className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl py-5 px-8 mb-8 inline-block cursor-pointer group relative hover:border-[var(--color-accent)] transition-all"
                onClick={handleCopy}
              >
                <span className="font-mono text-3xl tracking-widest text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors font-medium">KITTY10</span>
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-text-primary)] text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded transition-opacity ${copied ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  {copied ? "Copied!" : "Click to copy"}
                </span>
              </div>
              
              <a 
                href="https://devthemes.etsy.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] text-xs uppercase tracking-widest font-medium hover:bg-[var(--color-accent)] transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => setShowPromo(false)}
              >
                Shop DevThemes on Etsy
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
