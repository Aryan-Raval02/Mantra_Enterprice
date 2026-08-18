import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { BentoShowcase } from "@/components/BentoShowcase";
import { MantraAdvantage } from "@/components/MantraAdvantage";
import { SocialProofMarquee } from "@/components/SocialProofMarquee";
import { ContactSection } from "@/components/ContactSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07080a] text-slate-100 selection:bg-[#e2ff54] selection:text-zinc-950">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <BentoShowcase />
      <MantraAdvantage />
      <SocialProofMarquee />
      <ContactSection />
      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
