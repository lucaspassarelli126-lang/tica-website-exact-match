"use client";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "A curadoria da Théo é impecável. Encontrei os modelos da Celine que não achava em nenhum outro lugar do Brasil. Atendimento excepcional.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Bianca Soares",
    role: "Fashion Designer",
  },
  {
    text: "O exame de vista com as lentes Zeiss foi o mais tecnológico que já fiz. A precisão no diagnóstico mudou completamente minha qualidade de visão.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Ricardo Mendes",
    role: "Arquiteto",
  },
  {
    text: "O serviço de personal styling da Théo me ajudou a encontrar a armação perfeita para o meu rosto. Sinto que meus óculos agora são parte da minha identidade.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Mariana Costa",
    role: "Diretora Criativa",
  },
  {
    text: "A seleção de marcas como Tom Ford e Gucci é de altíssimo padrão. É a única ótica em que confio para renovar minha coleção de luxo.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Gabriel Antunes",
    role: "Colecionador de Arte",
  },
  {
    text: "Levei meus filhos para a linha infantil de luxo e fiquei encantada com a paciência da equipe. Armações lindas, resistentes e super estilosas.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Sofia Romano",
    role: "Mãe e Influenciadora",
  },
  {
    text: "O pós-venda é o diferencial. Tive um pequeno problema com o ajuste e resolveram na hora com extrema educação e agilidade.",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Lucas Pimenta",
    role: "Analista de Sistemas",
  },
  {
    text: "Uso óculos há 20 anos e nunca tive uma experiência tão premium. Da escolha do café à entrega da peça, tudo é pensado no detalhe.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Elena Vasconcelos",
    role: "Empresária",
  },
  {
    text: "O atendimento VIP no escritório facilitou muito minha vida. Levaram várias opções para eu provar com calma e o resultado foi perfeito.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Philipe Drummond",
    role: "Investidor",
  },
  {
    text: "Os modelos com detalhes em cristal Swarovski são verdadeiras joias. A Théo entende o que é luxo de verdade para o olhar feminino.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&h=150&auto=format&fit=crop",
    name: "Aline Junqueira",
    role: "Consultora de Imagem",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const TestimonialsSection = () => {
  return (
    <section className="bg-zinc-50/50 py-24 relative overflow-hidden">
      <div className="container-luxe z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-accent/30 py-1.5 px-5 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold text-accent bg-accent/5">
              Depoimentos
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif text-center leading-tight mb-6">
            A satisfação de quem enxerga o <span className="italic text-accent">extraordinário</span>
          </h2>
          <p className="text-center text-muted-foreground tracking-wide">
            Histórias de quem encontrou na Óticas Théo não apenas óculos, mas uma nova forma de expressar seu estilo e cuidar da sua visão.
          </p>
        </motion.div>

        <div className="flex justify-center gap-8 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[660px] overflow-hidden px-4">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn 
            testimonials={secondColumn} 
            className="hidden md:block" 
            duration={22} 
          />
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            className="hidden lg:block" 
            duration={20} 
          />
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
};
