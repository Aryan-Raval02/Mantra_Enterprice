"use client";

import React from "react";
import { Zap, ShieldCheck, ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#e2ff54]" />
              </div>
              <span className="font-extrabold text-white text-lg font-mono tracking-tight">
                MANTRA ENTERPRISE
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              High-efficiency ISO 9001:2008 & CE Certified LED and solar luminaire manufacturer established in 2011. Driving green energy transition across industrial & urban spaces.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-[#e2ff54]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ISO 9001:2008 & CE CERTIFIED</span>
            </div>
          </div>

          {/* Col 2: Product Categories */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#products" className="hover:text-[#e2ff54] transition-colors">
                  Outdoor & Landscape (Bollards/Spikes)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#e2ff54] transition-colors">
                  LED COB & Industrial High Bays
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#e2ff54] transition-colors">
                  Linear & Magnetic Track Lights
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#e2ff54] transition-colors">
                  Solar Luminaire Systems
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#e2ff54] transition-colors">
                  Deep Downlights & Panel Lights
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Governance */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-[#e2ff54] transition-colors">
                  About Mantra Enterprise
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-[#e2ff54] transition-colors">
                  ISO & CE Compliance
                </a>
              </li>
              <li>
                <a href="#advantage" className="hover:text-[#e2ff54] transition-colors">
                  The Mantra Advantage
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#e2ff54] transition-colors">
                  Get Commercial Quote
                </a>
              </li>
              <li>
                <a href="https://www.mantraled.in/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-[#e2ff54]">
                  <span>Official Catalog Site</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Facility Address */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-4">
              Headquarters & Factory
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e2ff54] shrink-0 mt-0.5" />
                <span className="text-zinc-300">
                  B/149, Smruti Society, Near Sai Petrol Pump, Gajera Circle, Katargam, Surat, Gujarat 395004
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#e2ff54] shrink-0" />
                <a href="mailto:mantrasolar@yahoo.com" className="text-zinc-300 hover:text-white">
                  mantrasolar@yahoo.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e2ff54] shrink-0" />
                <span className="text-zinc-300 font-mono">+91 99747 79801</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono">
          <div>
            © {new Date().getFullYear()} Mantra Enterprise. All rights reserved. Established 2011.
          </div>
          <div className="mt-4 sm:mt-0 flex items-center gap-4">
            <span>TARGET: 500+ CR BY 2028</span>
            <span>•</span>
            <span>SURAT, GUJARAT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
