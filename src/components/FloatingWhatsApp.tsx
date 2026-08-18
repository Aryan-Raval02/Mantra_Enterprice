"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl =
    "https://wa.me/919974779801?text=Hello%20Mantra%20Enterprise,%20I%20would%20like%20to%20get%20a%20quote%20for%20LED%20/%20Solar%20lighting.";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 350, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs px-4 py-3 rounded-full shadow-2xl shadow-emerald-500/30 border border-emerald-300/40 cursor-pointer group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="w-5 h-5 fill-zinc-950 text-emerald-500 group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
      </div>
      <span className="hidden sm:inline font-mono tracking-tight text-zinc-950">Chat on WhatsApp</span>
    </motion.a>
  );
};
