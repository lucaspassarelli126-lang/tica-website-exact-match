"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface VideoScrollHeroProps {
  videoSrc?: string;
  enableAnimations?: boolean;
  className?: string;
  startScale?: number;
  title?: string;
  subtitle?: string;
}

export function VideoScrollHero({
  videoSrc = "/Luxury_Eyewear_Commercial_Video_Generation.mp4",
  enableAnimations = true,
  className = "",
  startScale = 0.5,
  title = "ÓTICAS THÉO",
  subtitle = "A arte da visão",
}: VideoScrollHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [scrollScale, setScrollScale] = useState(startScale);

  useEffect(() => {
    if (!enableAnimations || shouldReduceMotion) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress based on container position
      const scrolled = Math.max(0, -rect.top);
      const maxScroll = containerHeight - windowHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      
      // Scale from startScale to 1
      const newScale = startScale + (progress * (1 - startScale));
      setScrollScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableAnimations, shouldReduceMotion, startScale]);

  const shouldAnimate = enableAnimations && !shouldReduceMotion;

  return (
    <div className={`relative ${className}`}>
      {/* Hero Section with Video */}
      <div
        ref={containerRef}
        className="relative h-[150vh] md:h-[200vh] bg-transparent"
      >
        {/* Fixed Video Container */}
        <div className="sticky top-0 w-full h-screen flex items-center justify-center z-10 overflow-hidden">
          <div
            className="relative flex items-center justify-center will-change-transform w-full h-full"
            style={{
              transform: shouldAnimate ? `scale(${scrollScale})` : 'scale(1)',
              transformOrigin: "center center",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover shadow-2xl brightness-75 md:brightness-100"
            >
              <source src={videoSrc} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>

            {/* Video Overlay Content - Adapted for Luxury Brand */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/20 backdrop-blur-[1px]">
              <div className="relative space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                  <h1 className="text-white text-4xl md:text-6xl lg:text-[7rem] font-sans font-black tracking-[0.15em] uppercase mb-4 drop-shadow-2xl">
                    {title}
                  </h1>
                  
                  <motion.div 
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: "120px", opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-[2px] bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.8)]"
                  />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  className="text-white/95 text-xs md:text-sm lg:text-base tracking-[1em] uppercase font-sans font-light pl-[1em]"
                >
                  {subtitle}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
