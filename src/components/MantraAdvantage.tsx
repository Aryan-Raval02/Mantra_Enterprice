"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sliders, ShieldAlert, BadgePercent, CheckCircle2, Factory, Hammer, ShieldCheck } from "lucide-react";

export const MantraAdvantage: React.FC = () => {
  const advantages = [
    {
      icon: Sliders,
      number: "01",
      title: "Tailormade Solutions",
      subtitle: "Custom Architectural Specs",
      description:
        "Every project has unique lumen requirements and mounting constraints. We engineer bespoke luminaire heights, customized CCT (3000K-6500K), specific beam angles, and custom housing colors.",
      highlights: [
        "Bespoke Pole & Housing Dimensions",
        "Tailored Beam Angles (15° - 120°)",
        "Custom Driver & Dimming Protocols",
      ],
    },
    {
      icon: Hammer,
      number: "02",
      title: "Unparalleled Durability",
      subtitle: "Cast Aluminum & GI Poles",
      description:
        "Engineered for brutal weather conditions. Manufactured with high-density pressure Cast Aluminum housing and Galvanized Iron (GI) poles with anti-corrosion thermostatic powder coating.",
      highlights: [
        "Cast Aluminum Luminaire Bodies",
        "Galvanized Iron (GI) Heavy Poles",
        "IP65 & IP67 Ingress Sealing",
      ],
    },
    {
      icon: BadgePercent,
      number: "03",
      title: "Cost-Effective Wholesale Pricing",
      subtitle: "Direct OEM Factory Rates",
      description:
        "By manufacturing in-house at our Surat, Gujarat facility, we eliminate middleman markups and deliver factory-direct wholesale pricing with guaranteed volume ROI.",
      highlights: [
        "Surat Direct Factory Supply",
        "Bulk Wholesale Pricing Structure",
        "High ROI Energy Saving LEDs",
      ],
    },
  ];

  return (
    <section id="advantage" className="py-24 bg-zinc-900/60 relative border-t border-zinc-800/80">
      {/* Subtle tech background accents */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e2ff54]/10 border border-[#e2ff54]/30 text-[#e2ff54] text-xs font-mono mb-4">
            <Factory className="w-3.5 h-3.5" />
            <span>ENGINEERING EXCELLENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The Mantra Advantage.
          </h2>
          <p className="mt-4 text-zinc-300 font-light text-base sm:text-lg">
            Why leading architects, municipal planners, and commercial developers choose Mantra Enterprise for high-efficiency lighting infrastructure.
          </p>
        </div>

        {/* Advantage Infographic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl p-8 glass-panel border border-zinc-800/90 hover:border-[#e2ff54]/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-[#e2ff54] group-hover:bg-[#e2ff54]/10 transition-colors shadow-inner">
                      <Icon className="w-7 h-7 text-[#e2ff54]" />
                    </div>
                    <span className="text-2xl font-black font-mono text-zinc-700 group-hover:text-[#e2ff54] transition-colors">
                      {adv.number}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                    {adv.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {adv.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-300 font-light leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                {/* Technical Highlights list */}
                <div className="mt-8 pt-6 border-t border-zinc-800/80 space-y-2.5">
                  {adv.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#e2ff54] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Manufacturing Spec Banner */}
        <div className="mt-16 rounded-2xl glass-panel border border-zinc-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#e2ff54]/20 border border-[#e2ff54]/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#e2ff54]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Certified Manufacturing Standards
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                ISO 9001:2008 & CE Certification strictly enforced across all manufacturing cycles in Katargam, Surat.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full md:w-auto text-center px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-mono font-bold text-white transition-colors"
          >
            REQUEST FACTORY SPEC SHEET
          </a>
        </div>
      </div>
    </section>
  );
};
