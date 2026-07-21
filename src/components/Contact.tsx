"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { Instagram, Mail, ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${siteConfig.contact.formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 bg-[var(--color-bg-primary)] relative border-t border-[var(--color-border)]">
      
      <div className="content-container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-[var(--color-text-secondary)] mb-4">Inquiries</h2>
              <h3 className="text-5xl md:text-6xl font-serif text-[var(--color-text-primary)] mb-8 leading-tight">
                Let's create <br/>
                <span className="italic text-[var(--color-accent)]">magic together.</span>
              </h3>
              <p className="text-[var(--color-text-secondary)] font-light leading-relaxed">
                Available for UGC campaigns, ambassadorships, and creative direction. Drop a line below or reach out directly to discuss your brand's vision.
              </p>
            </div>
            
            <div className="space-y-8 pt-8 border-t border-[var(--color-border)]">
              <a 
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 border border-[var(--color-border)] rounded-full flex items-center justify-center text-[var(--color-text-secondary)] group-hover:bg-[var(--color-text-primary)] group-hover:text-white transition-all duration-500">
                  <Instagram size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-[var(--color-text-primary)] mb-1 hover-underline-center inline-block">Instagram</p>
                  <p className="text-xs text-[var(--color-text-tertiary)]">@glossy_belle</p>
                </div>
              </a>
              
              <a 
                href={`mailto:${siteConfig.social.email}`}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 border border-[var(--color-border)] rounded-full flex items-center justify-center text-[var(--color-text-secondary)] group-hover:bg-[var(--color-text-primary)] group-hover:text-white transition-all duration-500">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-[var(--color-text-primary)] mb-1 hover-underline-center inline-block">Email</p>
                  <p className="text-xs text-[var(--color-text-tertiary)]">{siteConfig.social.email}</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-8 sm:p-12 relative"
          >
            {status === "success" ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                <div className="text-[var(--color-text-primary)] mb-4">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-3xl font-serif text-[var(--color-text-primary)]">Inquiry Received</h3>
                <p className="text-[var(--color-text-secondary)] font-light max-w-md">Thank you for reaching out. I'll review your brief and get back to you within 24-48 hours.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-xs uppercase tracking-widest text-[var(--color-text-primary)] border-b border-[var(--color-text-primary)] pb-1 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-text-primary)] transition-colors outline-none font-light placeholder:text-[var(--color-text-tertiary)]"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-text-primary)] transition-colors outline-none font-light placeholder:text-[var(--color-text-tertiary)]"
                      placeholder="jane@brand.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="company" className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">Brand</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      className="w-full px-0 py-3 bg-transparent border-b border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-text-primary)] transition-colors outline-none font-light placeholder:text-[var(--color-text-tertiary)]"
                      placeholder="Your Brand"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="budget" className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">Budget</label>
                    <select 
                      id="budget" 
                      name="budget" 
                      className="w-full px-0 py-3 bg-transparent border-b border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-text-primary)] transition-colors outline-none font-light appearance-none"
                    >
                      <option value="" className="bg-white">Select package...</option>
                      <option value="1-3 Videos" className="bg-white">1-3 Videos</option>
                      <option value="4-8 Videos" className="bg-white">4-8 Videos</option>
                      <option value="Photography Only" className="bg-white">Photography Only</option>
                      <option value="Monthly Retainer" className="bg-white">Monthly Retainer</option>
                      <option value="Custom/Other" className="bg-white">Custom / Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">Project Details</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent border-b border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-text-primary)] transition-colors outline-none font-light resize-none placeholder:text-[var(--color-text-tertiary)]"
                    placeholder="Tell me about your project, timelines, and creative direction..."
                  ></textarea>
                </div>
                
                <input type="text" name="_gotcha" className="hidden" />

                {status === "error" && (
                  <p className="text-red-600 text-xs uppercase tracking-widest">Error sending. Please email directly.</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full py-5 border border-[var(--color-text-primary)] text-[var(--color-text-primary)] uppercase tracking-widest text-xs btn-fill-left flex items-center justify-center gap-4 group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Processing
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
