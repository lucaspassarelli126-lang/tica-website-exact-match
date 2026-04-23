"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface VideoScrollHeroProps {
  videoSrc?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function VideoScrollHero({
  videoSrc = "/Premium_Eyewear_Commercial_One_Take.mp4",
  className = "",
  title = "ÓTICAS THÉO",
  subtitle = "A arte da visão",
}: VideoScrollHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={`relative h-screen w-full overflow-hidden bg-black ${className}`}>
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-accent z-30 shadow-[0_2px_10px_rgba(171,86,33,0.3)]" />
      {/* Main Full-Screen Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.85] md:brightness-100"
      >
        <source src={videoSrc} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Luxury Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/30 backdrop-blur-[1px]">
        <div className="relative space-y-8">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h1 className="text-white text-4xl md:text-6xl lg:text-[7rem] font-sans font-black tracking-[0.15em] uppercase mb-4 drop-shadow-2xl">
              {title}
            </h1>
            
              <motion.div 
                initial={shouldReduceMotion ? { width: "120px", opacity: 1 } : { width: 0, opacity: 0 }}
                whileInView={{ width: "120px", opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-[2px] bg-accent shadow-[0_0_20px_rgba(171,86,33,0.8)]"
              />
          </motion.div>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="text-white/95 text-xs md:text-sm lg:text-base tracking-[1em] uppercase font-sans font-light pl-[1em]"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
      
      {/* Decorative Gradient Mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
    </section>
  );
}
