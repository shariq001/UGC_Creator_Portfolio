"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[var(--color-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--color-border)] py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="content-container px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif text-[var(--color-text-primary)] tracking-widest uppercase">
          {siteConfig.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {siteConfig.nav.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className="text-xs uppercase tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover-underline-center"
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="#contact"
            className="px-6 py-2.5 border border-[var(--color-text-primary)] text-[var(--color-text-primary)] text-xs uppercase tracking-widest btn-fill-left"
          >
            Collaborate
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[var(--color-text-primary)]"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} strokeWidth={1.5} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 md:hidden backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[var(--color-bg-primary)] border-l border-[var(--color-border)] z-50 p-6 flex flex-col shadow-2xl md:hidden"
            >
              <div className="flex justify-end mb-12">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  aria-label="Close Menu"
                >
                  <X size={28} strokeWidth={1.5} />
                </button>
              </div>
              
              <nav className="flex flex-col gap-8">
                {siteConfig.nav.map((item) => (
                  <Link 
                    key={item.label} 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link 
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-8 px-6 py-4 border border-[var(--color-text-primary)] text-[var(--color-text-primary)] text-center text-xs uppercase tracking-widest btn-fill-left"
                >
                  Collaborate
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
