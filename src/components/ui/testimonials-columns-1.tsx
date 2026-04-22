"use client";
import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}: TestimonialsColumnProps) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div 
                className="p-8 rounded-3xl border border-border/50 bg-background/50 backdrop-blur-sm shadow-xl shadow-primary/5 max-w-xs w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl" 
                key={`${index}-${i}`}
              >
                <div className="text-sm leading-relaxed text-foreground/80">"{text}"</div>
                <div className="flex items-center gap-3 mt-6">
                  <div className="h-11 w-11 rounded-full overflow-hidden border-2 border-accent/20 ring-2 ring-background shadow-sm">
                    <img
                      width={44}
                      height={44}
                      src={image}
                      alt={name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-serif text-sm font-bold tracking-tight leading-4 text-zinc-900 dark:text-zinc-100 italic">{name}</div>
                    <div className="text-[10px] uppercase tracking-widest text-accent font-bold mt-0.5">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
