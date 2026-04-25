import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { categories } from "@/data/site";

function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t;
}

export function CategoryScrollInteractive() {
  const sectionRef = useRef<HTMLElement>(null);
  const linhaRef = useRef<HTMLDivElement>(null);
  const bolinhasRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // ── MOBILE: animação automática ao entrar na tela (direita → esquerda) ──
      let rafId: number;
      let current = 0;
      let target = 0;
      let running = false;

      // Ancora a linha na direita para crescer da direita para a esquerda
      if (linhaRef.current) {
        linhaRef.current.style.left = "auto";
        linhaRef.current.style.right = "0";
      }

      const animateTo = (value: number) => {
        target = value;
        if (!running) {
          running = true;
          const tick = () => {
            current = lerp(current, target, 0.06);
            if (linhaRef.current) {
              linhaRef.current.style.width = `${current * 100}%`;
            }
            const total = bolinhasRef.current.length;
            bolinhasRef.current.forEach((b, i) => {
              if (!b) return;
              // Threshold invertido: última bolinha acende primeiro
              const reversedThreshold = (total - 1 - i) / total;
              if (current > reversedThreshold) b.classList.add("ativa");
              else b.classList.remove("ativa");
            });
            if (Math.abs(current - target) > 0.002) {
              rafId = requestAnimationFrame(tick);
            } else {
              running = false;
            }
          };
          rafId = requestAnimationFrame(tick);
        }
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => animateTo(1), 200);
          } else {
            cancelAnimationFrame(rafId);
            current = 0;
            target = 0;
            running = false;
            if (linhaRef.current) {
              linhaRef.current.style.width = "0%";
            }
            bolinhasRef.current.forEach((b) => b?.classList.remove("ativa"));
          }
        },
        { threshold: 0.3 }
      );

      if (sectionRef.current) observer.observe(sectionRef.current);

      return () => {
        observer.disconnect();
        cancelAnimationFrame(rafId);
        // Reseta âncora da linha ao desmontar
        if (linhaRef.current) {
          linhaRef.current.style.left = "0";
          linhaRef.current.style.right = "auto";
        }
      };
    } else {
      // ── DESKTOP: animação por scroll (original, não mexa) ──────────────
      let current = 0;
      let target = 0;

      const update = () => {
        if (!sectionRef.current || !linhaRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const pinDuration = rect.height - (windowHeight - 80);
        let progress = (80 - rect.top) / pinDuration;
        progress = Math.max(0, Math.min(progress, 1));
        target = progress;
        current = lerp(current, target, 0.12);
        linhaRef.current.style.width = `${current * 100}%`;
        const total = bolinhasRef.current.length;
        bolinhasRef.current.forEach((b, i) => {
          if (!b) return;
          if (current > i / total) b.classList.add("ativa");
          else b.classList.remove("ativa");
        });
      };

      function onScroll() { update(); }
      window.addEventListener("scroll", onScroll, { passive: true });
      update();
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <section
      ref={sectionRef as any}
      className="relative w-full bg-background z-20 md:min-h-[110vh]"
    >
      <div
        className="md:sticky md:top-[80px] w-full flex flex-col items-center justify-center bg-background overflow-hidden"
        style={{
          height: "clamp(160px, 22vh, 300px)",
          paddingTop: "clamp(12px, 3vh, 60px)",
          paddingBottom: "clamp(12px, 3vh, 60px)",
          gap: "clamp(14px, 2.5vh, 40px)",
        }}
      >
        <h2 className="text-[11px] md:text-[14px] font-black uppercase tracking-[3px] opacity-80 text-center px-4 text-zinc-900 dark:text-zinc-100">
          EXPLORE AS ESTÉTICAS
        </h2>

        <div className="relative w-[95%] md:w-[70%] max-w-5xl flex items-center justify-center">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[2px] bg-black/10 dark:bg-white/10 z-0" />
          <div
            ref={linhaRef}
            className="absolute top-1/2 -translate-y-1/2 left-0 h-[3px] bg-[#c45a1c] z-0 transition-none"
            style={{ width: "0%" }}
          />
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
