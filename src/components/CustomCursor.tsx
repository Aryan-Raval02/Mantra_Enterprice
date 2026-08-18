"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Exact instant mouse position for the dot
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics trailing position for the soft electric yellow aura
  const springConfig = { stiffness: 150, damping: 15, mass: 0.2 };
  const auraX = useSpring(mouseX, springConfig);
  const auraY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if the device has a fine precision pointer (desktop/mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updatePointerSupport = () => setIsPointerDevice(mediaQuery.matches);
    updatePointerSupport();

    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect mouseover on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest(
        'a, button, input, select, textarea, [role="button"], .interactive'
      );
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isPointerDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* The Aura (Soft-blurred electric yellow radial light trail) */}
      <motion.div
        style={{
          x: auraX,
          y: auraY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.85 : 1,
          opacity: isHovered ? 0.35 : 0.18,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl bg-[#e2ff54] pointer-events-none"
      />

      {/* The Dot (Crisp small electric yellow dot tracking exact coordinates) */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 2.2 : 1,
          backgroundColor: isHovered ? "#ffffff" : "#e2ff54",
          boxShadow: isHovered
            ? "0 0 20px rgba(226, 255, 84, 0.9), 0 0 40px rgba(226, 255, 84, 0.6)"
            : "0 0 10px rgba(226, 255, 84, 0.6)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        className="absolute top-0 left-0 w-2.5 h-2.5 rounded-full border border-zinc-950/40 pointer-events-none"
      />
    </div>
  );
};
