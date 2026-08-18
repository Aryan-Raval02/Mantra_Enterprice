"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, CloudRain, Zap } from "lucide-react";

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "ISO 9001:2008 Certified",
      subtitle: "Quality Assurance Standard",
    },
    {
      icon: Award,
      title: "CE Certified",
      subtitle: "European Compliance",
    },
    {
      icon: CloudRain,
      title: "IP65 Weatherproof Designs",
      subtitle: "Heavy Duty Protection",
    },
    {
      icon: Zap,
      title: "Energy Rating A+",
      subtitle: "High Efficiency Drivers",
    },
  ];

  return (
    <section id="certifications" className="py-8 bg-zinc-950 border-y border-zinc-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:border-zinc-700 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-[#e2ff54] transition-colors">
                  <Icon className="w-6 h-6 text-[#e2ff54] transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-mono tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
