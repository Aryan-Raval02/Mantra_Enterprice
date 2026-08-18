"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles, Factory, Award, Shield, Sliders } from "lucide-react";

export const HeroSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-tech-grid bg-radial-glow">
      {/* Background Glowing Energy Nodes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#e2ff54]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Decorative Technical Grid Accent Markers */}
      <div className="absolute top-28 left-8 text-[10px] font-mono text-zinc-600 hidden lg:block select-none">
        SYS.REF // MANTRA-2026.SURAT
      </div>
      <div className="absolute top-28 right-8 text-[10px] font-mono text-zinc-600 hidden lg:block select-none">
        SPEC: ISO 9001:2008 / CE CERTIFIED
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Top Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#e2ff54]/30 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e2ff54] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e2ff54]"></span>
              </span>
              <span className="text-xs font-mono text-zinc-300 tracking-wide">
                SURAT FACILITY • EST. 2011 • TARGET: 500+ CR BY 2028
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]"
          >
            Engineering the Future of{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#e2ff54] via-emerald-300 to-teal-200">
              Sustainable Lighting.
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#e2ff54]/40"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M1 9.5C50 3.5 150 2 299 9.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-xl text-zinc-300 max-w-3xl leading-relaxed font-light"
          >
            <strong className="font-semibold text-white">ISO & CE Certified</strong> manufacturers of premium LED and Solar solutions since 2011. Tailormade for industrial, commercial, and landscape architecture.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#e2ff54] text-zinc-950 font-bold text-sm px-8 py-4 rounded-xl shadow-xl shadow-[#e2ff54]/20 hover:bg-[#d9f99d] transition-all"
            >
              <span>Explore Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass-panel text-white font-semibold text-sm px-7 py-4 rounded-xl hover:border-zinc-500 transition-all"
            >
              <span>Contact Sales</span>
              <Sparkles className="w-4 h-4 text-[#e2ff54]" />
            </motion.a>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-16 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl glass-panel border border-zinc-800/80"
          >
            <div className="flex flex-col items-center p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/50">
              <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-mono mb-1">
                <Factory className="w-3.5 h-3.5 text-[#e2ff54]" />
                <span>ESTABLISHED</span>
              </div>
              <span className="text-2xl font-black text-white font-mono">2011</span>
              <span className="text-[11px] text-zinc-400">15+ Yrs Expertise</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/50">
              <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-mono mb-1">
                <Award className="w-3.5 h-3.5 text-[#e2ff54]" />
                <span>CERTIFIED</span>
              </div>
              <span className="text-2xl font-black text-white font-mono">ISO & CE</span>
              <span className="text-[11px] text-zinc-400">Global Standards</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/50">
              <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-mono mb-1">
                <Shield className="w-3.5 h-3.5 text-[#e2ff54]" />
                <span>RATING</span>
              </div>
              <span className="text-2xl font-black text-[#e2ff54] font-mono">IP65</span>
              <span className="text-[11px] text-zinc-400">Weatherproof Design</span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/50">
              <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-mono mb-1">
                <Sliders className="w-3.5 h-3.5 text-[#e2ff54]" />
                <span>SOLUTIONS</span>
              </div>
              <span className="text-2xl font-black text-white font-mono">TAILORMADE</span>
              <span className="text-[11px] text-zinc-400">Bespoke Specs</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
