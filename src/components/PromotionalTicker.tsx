
const tickerItems = [
  "ARMAÇÕES ÚNICAS R$ 99,90",
  "EXAME DE VISTA GRATUITO",
  "ATENDIMENTO PREMIUM",
  "LENTES DE ALTA TECNOLOGIA",
  "QUALIDADE E PRECISÃO"
];

export const PromotionalTicker = ({ className = "" }: { className?: string }) => {
  return (
    <>
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-ticker-css {
          animation: ticker-scroll 30s linear infinite;
          will-change: transform;
        }
      `}</style>
      <div className={`bg-background py-1.5 overflow-hidden border-y border-zinc-200 relative z-40 ${className}`}>
        <div className="animate-ticker-css flex whitespace-nowrap w-fit">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {tickerItems.map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="text-zinc-800 font-black text-[9px] md:text-[10px] tracking-[0.3em] px-8 uppercase">
                    {item}
                  </span>
                  <span className="text-accent w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
