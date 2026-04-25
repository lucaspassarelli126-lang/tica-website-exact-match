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
  const stickyRef = useRef<HTMLDivElement>(null);
  const linhaRef = useRef<HTMLDivElement>(null);
  const bolinhasRef = useRef<(HTMLDivElement | null)[]>([]);

  // Ajuste dinâmico de altura: no mobile a seção deve ter exatamente
  // a altura do conteúdo sticky (sem espaço vazio sobrando)
  useEffect(() => {
    const adjustHeight = () => {
      if (!sectionRef.current || !stickyRef.current) return;
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        const stickyH = stickyRef.current.offsetHeight;
        sectionRef.current.style.minHeight = `${stickyH}px`;
      } else {
        sectionRef.current.style.minHeight = "110vh";
      }
    };

    adjustHeight();
    window.addEventListener("resize", adjustHeight);
    return () => window.removeEventListener("resize", adjustHeight);
  }, []);

  // Animação de scroll (não mexa aqui)
  useEffect(() => {
    let current = 0;
    let target = 0;

    const update = () => {
      if (!sectionRef.current || !linhaRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Duração exata do pin: altura total - (altura da tela - offset do header)
      const pinDuration = rect.height - (windowHeight - 80);
      let progress = (80 - rect.top) / pinDuration;
      progress = Math.max(0, Math.min(progress, 1));

      target = progress;
      current = lerp(current, target, 0.12);

      // linha
      linhaRef.current.style.width = `${current * 100}%`;

      // bolinhas
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
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    function onScroll() { update(); }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef as any} className="relative w-full bg-background z-20" style={{ minHeight: "110vh" }}>
      <div
        ref={stickyRef}
        className="sticky top-[80px] w-full flex flex-col items-center justify-start bg-background overflow-hidden"
        style={{ height: "clamp(180px, 25vh, 300px)", paddingTop: "clamp(16px, 5vh, 80px)", gap: "clamp(16px, 3vh, 40px)" }}
      >
        
        <h2 className="text-[11px] md:text-[14px] font-black uppercase tracking-[3px] opacity-80 text-center px-4 text-zinc-900 dark:text-zinc-100">
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
