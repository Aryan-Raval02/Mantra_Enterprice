"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, MessageSquareQuote, CheckCircle } from "lucide-react";

export const SocialProofMarquee: React.FC = () => {
  const reviews = [
    {
      quote: "Excellent range of tailor-made products at convenient prices.",
      author: "Maheshwari V.",
      role: "Architectural Project Lead",
      location: "Gujarat",
      rating: 5,
    },
    {
      quote: "Sleek and user-friendly design. Unparalleled convenience.",
      author: "Madhav",
      role: "Commercial Electrical Contractor",
      location: "Surat",
      rating: 5,
    },
    {
      quote: "Quality was a top priority in its design.",
      author: "Ajay M.",
      role: "Industrial Infrastructure Consultant",
      location: "Ahmedabad",
      rating: 5,
    },
    {
      quote: "Excellent range of tailor-made products at convenient prices.",
      author: "Maheshwari V.",
      role: "Architectural Project Lead",
      location: "Gujarat",
      rating: 5,
    },
    {
      quote: "Sleek and user-friendly design. Unparalleled convenience.",
      author: "Madhav",
      role: "Commercial Electrical Contractor",
      location: "Surat",
      rating: 5,
    },
    {
      quote: "Quality was a top priority in its design.",
      author: "Ajay M.",
      role: "Industrial Infrastructure Consultant",
      location: "Ahmedabad",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono mb-3">
          <MessageSquareQuote className="w-3.5 h-3.5 text-[#e2ff54]" />
          <span>CLIENT FEEDBACK & REVIEWS</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Trusted by Lighting Engineers & Contractors.
        </h2>
      </div>

      {/* Marquee Track Container */}
      <div className="relative w-full overflow-hidden flex py-4">
        {/* Fade gradients on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex gap-6 shrink-0"
        >
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="w-80 sm:w-96 p-6 rounded-2xl glass-panel border border-zinc-800/90 hover:border-[#e2ff54]/40 shrink-0 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#e2ff54] text-[#e2ff54]" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-zinc-200 font-light italic leading-relaxed">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-mono">{rev.author}</h4>
                  <p className="text-xs text-zinc-400 font-light">{rev.role} • {rev.location}</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-[#e2ff54] bg-[#e2ff54]/10 px-2 py-0.5 rounded border border-[#e2ff54]/20">
                  <CheckCircle className="w-3 h-3" />
                  <span>VERIFIED</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
