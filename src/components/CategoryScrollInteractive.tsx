import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { categories } from "@/data/site";

// Função de lerp igual à do usuário
function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t;
}

export function CategoryScrollInteractive() {
  const sectionRef = useRef<HTMLElement>(null);
  const linhaRef = useRef<HTMLDivElement>(null);
  const bolinhasRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let current = 0;
    let target = 0;
    let animationFrameId: number;

    const update = () => {
      if (!sectionRef.current || !linhaRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();

      // Duração exata do pin: altura total - (altura da tela - offset do header)
      const pinDuration = rect.height - (window.innerHeight - 80);
      let progress = (80 - rect.top) / pinDuration;
      progress = Math.max(0, Math.min(progress, 1));

      target = progress;

      /* suaviza movimento - o usuário testou 0.08, 0.12, 0.05. Vou usar 0.08 como no script base */
      current = lerp(current, target, 0.08);

      // linha
      linhaRef.current.style.width = `${current * 100}%`;

      // bolinhas com delay natural
      const total = bolinhasRef.current.length;

      bolinhasRef.current.forEach((b, i) => {
        if (!b) return;
        const threshold = i / total;

        if (current > threshold) {
          b.classList.add('ativa');
        } else {
          b.classList.remove('ativa');
        }
      });

      animationFrameId = requestAnimationFrame(update);
    };

    update();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={sectionRef as any} className="relative w-full min-h-[110vh] bg-background z-20">
      <div className="sticky top-[80px] h-[35vh] w-full flex flex-col items-center justify-start pt-[10vh] gap-[40px] bg-background overflow-hidden">
        
        <h2 className="text-[11px] md:text-[14px] font-black uppercase tracking-[3px] md:tracking-[3px] opacity-80 text-center px-4 text-zinc-900 dark:text-zinc-100">
          EXPLORE AS ESTÉTICAS
        </h2>

        <div className="relative w-[95%] md:w-[70%] max-w-5xl flex items-center justify-center">
          {/* linha base */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[2px] bg-black/10 dark:bg-white/10 z-0" />
          
          {/* linha animada */}
          <div 
            ref={linhaRef}
            className="absolute top-1/2 -translate-y-1/2 left-0 h-[3px] bg-[#c45a1c] z-0 transition-none"
            style={{ width: "0%" }}
          />

          {/* bolinhas */}
          <div className="relative z-10 flex justify-between items-center w-full">
            {categories.map((c, index) => (
              <Link key={c.slug} to={`/catalogo?style=${c.slug}`} className="outline-none">
                <div
                  ref={(el) => (bolinhasRef.current[index] = el)}
                  className="bolinha relative"
                >
                  {c.name.toUpperCase()}
                  {index === 2 && (
                    <motion.div 
                      className="md:hidden absolute -bottom-8 left-[40%] -translate-x-1/2"
                      animate={{ y: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ChevronDown className="w-4 h-4 text-[#c45a1c]" />
                    </motion.div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
