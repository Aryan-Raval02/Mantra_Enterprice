"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Mail, Phone, CheckCircle2, Factory, Sparkles, HelpCircle } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "Outdoor & Landscape Lighting",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "Outdoor & Landscape Lighting",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Info & Value Proposition */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e2ff54]/10 border border-[#e2ff54]/30 text-[#e2ff54] text-xs font-mono mb-4">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>DIRECT FACTORY INQUIRY</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Raise your Query. Get the best price possible.
              </h2>

              <p className="mt-4 text-base text-zinc-300 font-light leading-relaxed">
                Connect directly with our engineering and sales department in Surat, Gujarat. We provide custom CAD calculations, wholesale quotes, and sample evaluation.
              </p>

              {/* Company Metrics Card */}
              <div className="mt-8 p-6 rounded-2xl glass-panel border border-zinc-800 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    <Factory className="w-5 h-5 text-[#e2ff54]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-mono">MANTRA ENTERPRISE</h4>
                    <p className="text-xs text-zinc-400">Targeting 500+ Crore Turnover by 2028</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 space-y-3">
                  <div className="flex items-start gap-3 text-xs text-zinc-300">
                    <MapPin className="w-4 h-4 text-[#e2ff54] shrink-0 mt-0.5" />
                    <span>B/149, Smruti Society, Near Sai Petrol Pump, Gajera Circle, Katargam, Surat, Gujarat 395004</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-zinc-300">
                    <Mail className="w-4 h-4 text-[#e2ff54] shrink-0" />
                    <a href="mailto:mantrasolar@yahoo.com" className="hover:text-white transition-colors">
                      mantrasolar@yahoo.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-zinc-300">
                    <Phone className="w-4 h-4 text-[#e2ff54] shrink-0" />
                    <a href="tel:+919974779801" className="hover:text-white transition-colors font-mono">
                      +91 99747 79801
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications footer badge */}
            <div className="mt-8 flex items-center gap-3 text-xs font-mono text-zinc-400">
              <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[#e2ff54]">
                ISO 9001:2008
              </span>
              <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[#e2ff54]">
                CE CERTIFIED
              </span>
              <span>SURAT HQ</span>
            </div>
          </div>

          {/* Right Column - Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl glass-panel border border-zinc-800/90 shadow-2xl relative overflow-hidden">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Request Commercial Proposal
                </h3>
                <p className="text-xs text-zinc-400 font-light mt-1">
                  Fill in your project specifications below. Our technical team responds within 2 hours.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 text-center bg-zinc-900/90 rounded-xl border border-[#e2ff54]/40 my-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#e2ff54]/20 border border-[#e2ff54] mx-auto flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-[#e2ff54]" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Inquiry Received Successfully!</h4>
                    <p className="text-xs text-zinc-300 mt-2 max-w-md mx-auto">
                      Thank you for contacting Mantra Enterprise. Our commercial team in Surat is processing your request and will send the tailored quote shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 px-5 py-2 text-xs font-mono font-bold bg-[#e2ff54] text-zinc-950 rounded-lg"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Madhav Patel"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#e2ff54] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. project@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#e2ff54] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                          PHONE / WHATSAPP NUMBER *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#e2ff54] transition-colors font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                          PRODUCT CATEGORY *
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#e2ff54] transition-colors"
                        >
                          <option>Outdoor & Landscape Lighting (Bollards/Poles)</option>
                          <option>LED COB & High Bay Lights</option>
                          <option>Linear & Magnetic Track Lights</option>
                          <option>Solar Lighting Systems</option>
                          <option>Tailormade Custom Luminaire Requirement</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                        PROJECT DETAILS / REQUIREMENT SPECS
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe estimated quantities, wattage, mounting height, or specific delivery timeframe..."
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#e2ff54] transition-colors"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#e2ff54] text-zinc-950 font-bold text-sm py-4 rounded-xl shadow-xl shadow-[#e2ff54]/20 hover:bg-[#d9f99d] transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing Proposal...</span>
                      ) : (
                        <>
                          <span>Send Inquiry & Get Price</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
