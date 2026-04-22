import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "@/data/site";
import { Glasses, Square, History, Smile, Baby } from "lucide-react";

// Helper to render icons based on category slug or icon name
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Glasses": return <Glasses className="w-5 h-5 mb-1" />;
    case "Square": return <Square className="w-5 h-5 mb-1" />;
    case "History": return <History className="w-5 h-5 mb-1" />;
    case "Smile": return <Smile className="w-5 h-5 mb-1" />;
    case "Baby": return <Baby className="w-5 h-5 mb-1" />;
    default: return <Glasses className="w-5 h-5 mb-1" />;
  }
};

export function CategoryScrollInteractive() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // This hook tracks the scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // The animated line goes from 0% to 100% width
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative h-[150vh] w-full bg-background z-20">
      {/* Sticky panel: This stays fixed while you scroll */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start pt-0 overflow-hidden bg-background">
        
        {/* Visual Connector / Ligamento */}
        <motion.div 
          className="flex flex-col items-center justify-center mb-8 md:mb-12 h-16 md:h-20"
        >
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-accent/40 to-transparent relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/3 bg-accent"
              animate={{ top: ["-30%", "100%"] }}
              transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            />
          </div>
        </motion.div>

        <div className="flex flex-col items-center mb-10 md:mb-12">
          <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-zinc-900 dark:text-zinc-100 mb-2">
            Explore as Estéticas
          </h2>
        </div>

        <div className="container-luxe relative w-full px-4 md:px-12 max-w-6xl">
          {/* Line Track Container */}
          <div className="absolute top-1/2 left-[32px] right-[32px] md:left-[48px] md:right-[48px] h-[3px] -translate-y-1/2 z-0">
            {/* Background Line (Faded) */}
            <div className="absolute inset-0 bg-accent/20" />
            
            {/* Animated Line (Fills up as you scroll) */}
            <motion.div 
              className="absolute top-0 left-0 h-full bg-accent origin-left shadow-[0_0_15px_rgba(200,93,30,0.8)]"
              style={{ width: lineWidth }}
            />
          </div>

          <div className="relative z-10 flex justify-between items-center w-full">
            {categories.map((c, index) => {
              // Calculate threshold for each category node to activate
              const threshold = index / (categories.length - 1);
              
              // Define trigger zones
              const startTrigger = Math.max(0, threshold - 0.1);
              const endTrigger = threshold;

              // Animate background color, text color, and border based on scroll passing the node
              const bg = useTransform(
                scrollYProgress, 
                [startTrigger, endTrigger], 
                ["#ffffff", "#c85d1e"] // Fixed white to ensure opacity
              );
              
              const border = useTransform(
                scrollYProgress, 
                [startTrigger, endTrigger], 
                ["#e4e4e7", "#c85d1e"] // Light gray to accent (dark mode handled separately if needed, but keeping it simple)
              );

              const color = useTransform(
                scrollYProgress, 
                [startTrigger, endTrigger], 
                ["#000000", "#ffffff"]
              );

              const scale = useTransform(
                scrollYProgress, 
                [startTrigger, endTrigger, Math.min(1, endTrigger + 0.1)], 
                [1, 1.15, 1.05] // Small bump then settle
              );

              return (
                <Link 
                  key={c.slug} 
                  to={`/catalogo?style=${c.slug}`} 
                  className="group flex flex-col items-center outline-none"
                >
                  <motion.div 
                    className="w-16 h-16 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center transition-shadow duration-300 relative overflow-hidden px-2 text-center bg-white dark:bg-zinc-950 will-change-transform"
                    style={{
                      backgroundColor: bg,
                      borderColor: border,
                      borderWidth: "2px",
                      color: color,
                      scale: scale,
                      boxShadow: useTransform(
                        scrollYProgress,
                        [startTrigger, endTrigger],
                        ["none", "0 0 20px rgba(200,93,30,0.4)"]
                      )
                    }}
                  >
                    {/* Optional: Add icon if desired, or just text */}
                    {/* {getIcon(c.icon)} */}
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-tighter leading-tight">
                      {c.name}
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
