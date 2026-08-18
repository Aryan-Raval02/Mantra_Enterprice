"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Cpu, Layers, Sun, Shield, Info, Check } from "lucide-react";

interface BentoItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  spanClass: string;
  badge: string;
  specs: { label: string; value: string }[];
  subCategories: string[];
}

export const BentoShowcase: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedSpecModal, setSelectedSpecModal] = useState<BentoItem | null>(null);

  const bentoItems: BentoItem[] = [
    {
      id: "outdoor",
      title: "Outdoor & Landscape Architectural Lighting",
      category: "Category 01",
      description: "Heavy-duty outdoor luminaire series featuring bollards, post tops, and spikes designed for architectural landscapes and urban parks.",
      image: "/images/outdoor.jpg",
      spanClass: "lg:col-span-2 lg:row-span-2",
      badge: "IP65 Weatherproof",
      specs: [
        { label: "Wattage Range", value: "10W - 100W" },
        { label: "Material", value: "Cast Aluminum & GI Poles" },
        { label: "Ingress Rating", value: "IP65 Rated" },
        { label: "Mounting", value: "Bollard / Post Top / Spike" },
        { label: "Color Temp", value: "3000K / 4000K / 6500K" },
        { label: "Warranty", value: "3 to 5 Years" },
      ],
      subCategories: [
        "Bollard Lights (ANT-3001, ANT-3003, ANT-3004)",
        "Post Top Lights (ANT-8001, ANT-8002, ANT-8004)",
        "Garden & Heritage Poles",
        "Outdoor Spike Lights",
      ],
    },
    {
      id: "led-cob",
      title: "LED COB & High Bay Luminaire",
      category: "Category 02",
      description: "High-lumen output COB light fixtures, industrial high bays, deep downlights, and aluminum heat-sink spotlights.",
      image: "/images/led-cob.jpg",
      spanClass: "lg:col-span-1 lg:row-span-1",
      badge: "High Bay & COB",
      specs: [
        { label: "Wattage Range", value: "30W - 250W" },
        { label: "Material", value: "Extruded Aluminium Heat Sink" },
        { label: "Efficiency", value: "130 Lm/Watt" },
        { label: "Driver", value: "Surge Protected 4KV" },
      ],
      subCategories: [
        "Industrial High Bay Lights",
        "Aluminium LED COB Lights",
        "Deep Downlights & Concealed Panels",
        "Surface Orbit COB Lights",
      ],
    },
    {
      id: "linear",
      title: "Linear & Magnetic Track Lights",
      category: "Category 03",
      description: "Modular architectural lighting including Hexa geometric tubes, triangle suspended linear fixtures, and magnetic track systems.",
      image: "/images/linear.jpg",
      spanClass: "lg:col-span-1 lg:row-span-1",
      badge: "Architectural Linear",
      specs: [
        { label: "Wattage Range", value: "18W - 72W" },
        { label: "Form Factor", value: "Magnetic Track / Hexa / Linear" },
        { label: "Customization", value: "Custom Lengths & Angles" },
        { label: "CRI", value: "> 90 Ra" },
      ],
      subCategories: [
        "Hexa & Triangle Linear Tube Lights",
        "Magnetic Track Lighting Systems",
        "Half Lase Hanging Linear Tube",
        "Custom Geometric Arrays",
      ],
    },
    {
      id: "solar",
      title: "Solar Lighting Systems",
      category: "Category 04",
      description: "Eco-friendly autonomous solar luminaires with integrated photovoltaic solar panels, MPPT controllers, and long-life batteries.",
      image: "/images/solar.jpg",
      spanClass: "lg:col-span-2 lg:row-span-1",
      badge: "Zero Power Cost",
      specs: [
        { label: "PV Panel Type", value: "Mono/Poly Crystalline" },
        { label: "Autonomy", value: "2-3 Rainy Days Back-up" },
        { label: "Material", value: "Die-Cast Aluminum & Stainless Steel" },
        { label: "Application", value: "Highways, Parks & Rural Electrification" },
      ],
      subCategories: [
        "All-in-One Solar Street Lights",
        "Wholesale Solar LED Luminaires",
        "Photovoltaic Module Arrays",
        "Off-Grid Solar Solutions",
      ],
    },
  ];

  return (
    <section id="products" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-zinc-800/80 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#e2ff54] uppercase tracking-widest mb-2">
              <Cpu className="w-4 h-4" />
              <span>PRODUCT CATALOGUE • BENTO GRID</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Precision Engineered Lighting Categories.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-zinc-400 max-w-md font-light">
            Explore our ISO 9001 & CE compliant industrial lighting lineup. Hover over any category to view live technical specifications.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bentoItems.map((item) => {
            const isHovered = hoveredId === item.id;

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className={`relative rounded-2xl overflow-hidden glass-panel border border-zinc-800/90 group ${item.spanClass} flex flex-col justify-between min-h-[380px] lg:min-h-[420px]`}
              >
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/30" />
                </div>

                {/* Top Card Info */}
                <div className="relative z-10 p-6 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono uppercase text-zinc-400 bg-zinc-900/90 px-2.5 py-1 rounded-md border border-zinc-800">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-zinc-950 bg-[#e2ff54] px-2.5 py-1 rounded-md shadow">
                      {item.badge}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedSpecModal(item)}
                    className="w-9 h-9 rounded-full bg-zinc-900/80 border border-zinc-700/80 flex items-center justify-center text-white hover:bg-[#e2ff54] hover:text-zinc-950 transition-colors shadow-lg"
                    title="View Technical Specifications"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {/* Notion-Style Infographic Popover Overlay on Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className="absolute inset-x-4 top-16 z-20 p-4 rounded-xl glass-panel border border-[#e2ff54]/40 shadow-2xl bg-zinc-950/95"
                    >
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
                        <span className="text-xs font-mono text-[#e2ff54] font-bold uppercase tracking-wider">
                          INFOGRAPHIC SPECS
                        </span>
                        <span className="text-[10px] font-mono text-zinc-400">ISO/CE VERIFIED</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {item.specs.map((spec, i) => (
                          <div key={i} className="bg-zinc-900/80 p-2 rounded border border-zinc-800/60">
                            <div className="text-[10px] text-zinc-400 font-mono">{spec.label}</div>
                            <div className="font-bold text-white font-mono mt-0.5">{spec.value}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Card Content */}
                <div className="relative z-10 p-6 pt-0 mt-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#e2ff54] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-2 font-light line-clamp-2">
                    {item.description}
                  </p>

                  {/* Sub-categories tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.subCategories.slice(0, 3).map((sub, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-2 py-0.5 rounded"
                      >
                        • {sub}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400">Cast Aluminum Housing</span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#e2ff54] hover:underline"
                    >
                      <span>Request Quote</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Specification Detail Modal */}
      <AnimatePresence>
        {selectedSpecModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-2xl rounded-2xl glass-panel border border-[#e2ff54]/50 p-6 bg-zinc-950 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                <div>
                  <span className="text-xs font-mono text-[#e2ff54] uppercase tracking-widest">
                    TECHNICAL DATA SHEET
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {selectedSpecModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedSpecModal(null)}
                  className="px-3 py-1 text-xs font-mono bg-zinc-900 hover:bg-zinc-800 text-zinc-300 rounded-lg border border-zinc-700"
                >
                  Close [ESC]
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-zinc-300 font-light">
                  {selectedSpecModal.description}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  {selectedSpecModal.specs.map((spec, i) => (
                    <div key={i} className="p-3 bg-zinc-900/90 rounded-xl border border-zinc-800">
                      <span className="text-xs text-zinc-400 font-mono block">{spec.label}</span>
                      <span className="text-sm font-bold text-[#e2ff54] font-mono mt-0.5 block">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Included Product Models:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedSpecModal.subCategories.map((sub, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-200 bg-zinc-900/50 p-2 rounded border border-zinc-800/60">
                        <Check className="w-3.5 h-3.5 text-[#e2ff54]" />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">SURAT FACTORY DIRECT DIRECTORY</span>
                <a
                  href="#contact"
                  onClick={() => setSelectedSpecModal(null)}
                  className="inline-flex items-center gap-2 bg-[#e2ff54] text-zinc-950 text-xs font-bold px-4 py-2 rounded-lg"
                >
                  <span>Inquire Bulk Order</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
