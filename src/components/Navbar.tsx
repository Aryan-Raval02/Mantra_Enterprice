"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X, ArrowUpRight, ShieldCheck, PhoneCall } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Certifications", href: "#certifications" },
    { name: "Advantage", href: "#advantage" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3.5 shadow-2xl shadow-black/40" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center overflow-hidden group-hover:border-[#e2ff54] transition-colors">
              <div className="absolute inset-0 bg-[#e2ff54]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Zap className="w-5 h-5 text-[#e2ff54] transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-lg text-white font-mono">
                  MANTRA
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#e2ff54]/20 text-[#e2ff54] border border-[#e2ff54]/30">
                  ENTERPRISE
                </span>
              </div>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider">
                EST. 2011 • SURAT, INDIA
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/80 border border-zinc-800/80 px-4 py-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-zinc-300 hover:text-white px-3.5 py-1.5 rounded-full transition-colors hover:bg-zinc-800/60"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 border border-zinc-800 px-2.5 py-1 rounded-md bg-zinc-950/60">
              <ShieldCheck className="w-3.5 h-3.5 text-[#e2ff54]" />
              <span>ISO 9001:2008 & CE</span>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-2 bg-[#e2ff54] text-zinc-950 text-xs font-bold px-4 py-2 rounded-lg shadow-lg shadow-[#e2ff54]/20 hover:bg-[#d9f99d] transition-all"
            >
              <span>Get Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.95 }}
              className="bg-[#e2ff54] text-zinc-950 text-xs font-bold px-3 py-1.5 rounded-md"
            >
              Quote
            </motion.a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-b border-zinc-800 mt-2"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-medium text-zinc-200 hover:text-[#e2ff54] py-1.5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-mono">Surat, Gujarat, India</span>
                <span className="text-xs text-[#e2ff54] font-semibold">ISO 9001:2008</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
