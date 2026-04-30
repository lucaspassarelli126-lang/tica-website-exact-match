import { useParams, useNavigate } from "react-router-dom";
import { products, editorialProducts, newArrivals } from "@/data/site";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";
import { toast } from "sonner";
import { ShieldCheck, Lock, RefreshCw, Phone, Star, Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WHATSAPP_NUMBER, getProductLink } from "@/lib/constants";
import { useRef } from "react";

export default function Produto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const scrollRef = useRef<HTMLDivElement>(null);

  const cleanId = id?.replace("_copy", "");
  const allProducts = [...products, ...editorialProducts, ...newArrivals];
  const product = allProducts.find((p) => p.id === cleanId);
  const crossSellProducts = allProducts.filter((p) => p.id !== product?.id).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
        <Button onClick={() => navigate("/catalogo")}>Voltar ao Catálogo</Button>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const productLink = getProductLink(product.id);
    const msg = encodeURIComponent(
      `Olá, tenho interesse neste modelo: ${product.name}\n${productLink}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <div className="font-sans bg-white min-h-screen overflow-x-hidden">
      {/* ── Main grid ── */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-10 pb-2 md:pb-4">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* ── LEFT: Image panel ── */}
          <div className="md:sticky md:top-28">
            {/* Main image card */}
            <div className="w-full bg-[#F8F8F8] rounded-3xl flex items-center justify-center p-6 md:p-10 relative border border-zinc-100 shadow-sm aspect-[4/3] overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="max-w-[85%] max-h-[85%] w-auto h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.10)] hover:scale-[1.03] transition-transform duration-700 mix-blend-multiply"
              />
              <span className="absolute top-4 left-4 bg-black text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow">
                {product.brand}
              </span>
            </div>


          </div>

          {/* ── RIGHT: Details ── */}
          <div className="flex flex-col gap-7 min-w-0">

            {/* Title + Stars */}
            <div>
              <p className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2">
                Coleção Premium
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight tracking-tight mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-2">
                <div className="flex text-accent gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-zinc-600">
                  4.9/5 · +300 avaliações
                </span>
              </div>
            </div>

            <hr className="border-zinc-100" />

            {/* Description */}
            <p className="text-sm text-zinc-600 leading-relaxed">{product.description}</p>

            {/* CTA buttons — inline, NOT fixed on desktop */}
            <div className="hidden md:flex gap-3 flex-col sm:flex-row">
              <Button
                onClick={() => {
                  addItem({ id: product.id, name: product.name, price: 0, image: product.img });
                  toast.success("Adicionado à sacola!");
                }}
                variant="outline"
                className="flex-1 h-13 border-2 border-zinc-200 text-zinc-900 rounded-2xl text-[11px] font-black uppercase tracking-wider hover:bg-zinc-50 transition-all"
              >
                Adicionar à Sacola
              </Button>

              <Button
                onClick={handleWhatsApp}
                className="flex-[2] h-13 relative overflow-hidden bg-accent hover:bg-accent/90 text-white rounded-2xl text-[11px] md:text-xs font-black uppercase tracking-wider shadow-[0_8px_24px_rgba(179,139,89,0.35)] hover:shadow-[0_14px_32px_rgba(179,139,89,0.45)] hover:-translate-y-[2px] active:scale-95 transition-all duration-300 group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Falar com Especialista
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Button>
            </div>

            {/* Trust block */}
            <div className="bg-zinc-50 rounded-3xl border border-zinc-100 p-5 space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-zinc-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent" /> Garantia Óticas Théo
              </p>

              {/* Customer avatars */}
              <div className="flex items-center gap-4 pb-4 border-b border-zinc-200">
                <div className="flex -space-x-2 shrink-0">
                  {["bg-zinc-300", "bg-zinc-400", "bg-accent"].map((bg, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full ${bg} border-2 border-white flex items-center justify-center text-[9px] font-black text-white shadow-sm`}
                    >
                      {i === 2 ? "+300" : ""}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-900">+300 clientes satisfeitos</p>
                  <p className="text-[10px] text-zinc-500">Produto premium com acabamento refinado</p>
                </div>
              </div>

              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-accent shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-zinc-900">Troca Facilitada</p>
                    <p className="text-[10px] text-zinc-500">Garantia total</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-accent shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-zinc-900">Compra Segura</p>
                    <p className="text-[10px] text-zinc-500">100% protegida</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-zinc-900 mb-4">
                Por que escolher este modelo?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Design sofisticado e moderno",
                  "Conforto absoluto para uso diário",
                  "Material resistente, leve e durável",
                  "Ideal para destacar sua personalidade",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-3 bg-zinc-50 border border-zinc-100 rounded-2xl px-4 py-3">
                    <div className="bg-accent/10 p-1 rounded-full shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-xs text-zinc-700 font-semibold leading-snug">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accordion */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="details" className="border-zinc-100">
                <AccordionTrigger className="text-[11px] font-black uppercase tracking-[0.1em] text-zinc-900 hover:no-underline py-4">
                  Detalhes Técnicos
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-xs text-zinc-600 pb-2">
                    {[
                      "Material premium de alta durabilidade e leveza",
                      "Acompanha estojo de luxo original e flanela",
                      "Ajuste ergonômico para conforto prolongado",
                      "Certificado de autenticidade Óticas Théo",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-accent text-base leading-none mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="concierge" className="border-zinc-100">
                <AccordionTrigger className="text-[11px] font-black uppercase tracking-[0.1em] text-zinc-900 hover:no-underline py-4">
                  Atendimento Concierge
                </AccordionTrigger>
                <AccordionContent>
                  <div className="bg-zinc-50 border border-zinc-100 rounded-xl p-4 text-xs text-zinc-600 leading-relaxed space-y-2">
                    <p>
                      Tem dúvidas se o formato <strong>{product.style}</strong> combina com você? Nossa equipe está no WhatsApp para ajudar.
                    </p>
                    <div className="flex items-center gap-2 font-bold text-zinc-900">
                      <Phone className="w-3.5 h-3.5 text-accent" />
                      (19) 97152-8684 — Seg. a Sex, 09h–17h
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Cross-sell */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] font-black uppercase tracking-[0.15em] text-zinc-900">
                  Clientes também compraram
                </p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" })}
                    className="p-1.5 rounded-full border border-zinc-200 hover:border-accent hover:text-accent transition-all active:scale-90"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" })}
                    className="p-1.5 rounded-full border border-zinc-200 hover:border-accent hover:text-accent transition-all active:scale-90"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div 
                ref={scrollRef}
                className="flex gap-3 overflow-x-auto pb-2 no-scrollbar scroll-smooth" 
                style={{ scrollbarWidth: "none" }}
              >
                {crossSellProducts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => { navigate(`/produto/${p.id}`); window.scrollTo(0, 0); }}
                    className="min-w-[120px] max-w-[120px] bg-[#F8F8F8] border border-zinc-100 rounded-2xl p-3 flex flex-col items-center hover:border-accent/40 hover:shadow-md transition-all group shrink-0"
                  >
                    <div className="w-16 h-16 flex items-center justify-center mb-2">
                      <img
                        src={p.img}
                        loading="lazy"
                        className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                        alt={p.name}
                      />
                    </div>
                    <span className="text-[8px] font-black text-accent uppercase tracking-wider mb-0.5">
                      {p.brand}
                    </span>
                    <span className="text-[10px] text-zinc-800 font-bold text-center line-clamp-2 leading-tight">
                      {p.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── STICKY BOTTOM BAR (mobile only) ── */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white/95 backdrop-blur-xl border-t border-zinc-100 px-4 py-3 z-40 flex gap-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)]">
        <Button
          onClick={() => {
            addItem({ id: product.id, name: product.name, price: 0, image: product.img });
            toast.success("Adicionado à sacola!");
          }}
          variant="outline"
          className="flex-1 h-12 border-2 border-zinc-200 text-zinc-900 rounded-xl text-[10px] font-black uppercase tracking-wider"
        >
          + Sacola
        </Button>
        <Button
          onClick={handleWhatsApp}
          className="flex-[2] h-12 bg-accent text-white rounded-xl text-[10px] font-black uppercase tracking-wider shadow-[0_6px_20px_rgba(179,139,89,0.35)]"
        >
          Falar com Especialista
        </Button>
      </div>
    </div>
  );
}
