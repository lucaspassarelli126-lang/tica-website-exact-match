import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/site";
import { ShoppingCart, ShoppingBag, X, ShieldCheck, Star, Check, RefreshCw, Lock, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { WHATSAPP_NUMBER, getProductLink } from "@/lib/constants";
import { products } from "@/data/site";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const { addItem } = useCart();

  if (!product) return null;

  // Simulate cross-sell products
  const crossSellProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-white border-none shadow-2xl md:rounded-3xl h-[100dvh] md:h-auto max-h-[95vh] flex flex-col font-sans">
        
        {/* Mobile Close Button */}
        <div className="absolute top-4 right-4 z-50 md:hidden bg-white/90 backdrop-blur-md rounded-full p-1.5 shadow-sm">
          <button onClick={onClose} className="text-zinc-500 hover:text-zinc-900">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col md:grid md:grid-cols-2 gap-0 relative bg-white">
          
          {/* Left Side: Image Section (Sticky on desktop) */}
          <div className="md:sticky md:top-0 h-auto md:h-full bg-[#FAFAFA] flex flex-col items-center justify-start p-8 md:p-12 relative border-b md:border-b-0 md:border-r border-zinc-100">
            {/* Main Image */}
            <div className="w-full relative aspect-square flex items-center justify-center mt-4 md:mt-0">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform duration-700 mix-blend-multiply"
              />
              <div className="absolute top-0 left-0">
                <span className="bg-black text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg">
                  {product.brand}
                </span>
              </div>
            </div>

            {/* Mini thumbnails */}
            <div className="flex gap-4 mt-8 w-full justify-center">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center bg-white cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${i === 1 ? 'border-accent' : 'border-zinc-200 hover:border-zinc-300'}`}>
                  <img src={product.img} className="w-10 h-10 object-contain mix-blend-multiply opacity-80" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Details Section */}
          <div className="p-6 md:p-12 flex flex-col h-full bg-white relative">
            <button 
              onClick={onClose}
              className="hidden md:block absolute top-6 right-6 p-2 text-zinc-400 hover:text-zinc-900 transition-colors z-50 bg-zinc-50 rounded-full shadow-sm hover:bg-zinc-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-8 pb-28 md:pb-24">
              
              {/* Title and Reviews Above the fold */}
              <div>
                <span className="text-[10px] md:text-xs font-black text-accent uppercase tracking-[0.2em] mb-2 block">
                  Coleção Premium
                </span>
                <DialogTitle className="text-3xl md:text-4xl font-bold text-zinc-900 leading-[1.1] mb-4 tracking-tight">
                  {product.name}
                </DialogTitle>
                
                <div className="flex items-center gap-2">
                  <div className="flex text-accent">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-zinc-600 font-bold">4.9/5 Avaliação de clientes</span>
                </div>
              </div>

              <div className="h-[1px] w-full bg-zinc-100" />

              {/* Por que escolher este modelo? */}
              <div className="bg-[#FCFCFC] p-6 rounded-3xl border border-zinc-100 shadow-sm">
                <h4 className="text-[11px] font-black uppercase tracking-[0.15em] text-zinc-900 mb-5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  Por que escolher este modelo?
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 bg-accent/10 p-1 rounded-full"><Check className="w-3 h-3 text-accent" /></div>
                    <span className="text-sm text-zinc-700 font-medium">Design sofisticado e moderno</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 bg-accent/10 p-1 rounded-full"><Check className="w-3 h-3 text-accent" /></div>
                    <span className="text-sm text-zinc-700 font-medium">Conforto excepcional para uso diário</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 bg-accent/10 p-1 rounded-full"><Check className="w-3 h-3 text-accent" /></div>
                    <span className="text-sm text-zinc-700 font-medium">Material resistente, leve e durável</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 bg-accent/10 p-1 rounded-full"><Check className="w-3 h-3 text-accent" /></div>
                    <span className="text-sm text-zinc-700 font-medium">Ideal para destacar sua personalidade</span>
                  </li>
                </ul>
              </div>

              {/* Bloco de Confiança e Garantias */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2 p-5 bg-white border border-zinc-200 rounded-3xl items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-accent/30 transition-colors">
                  <RefreshCw className="w-6 h-6 text-accent mb-1" />
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-wide">Troca Facilitada</span>
                  <span className="text-[10px] text-zinc-500 font-medium">Garantia total</span>
                </div>
                <div className="flex flex-col gap-2 p-5 bg-white border border-zinc-200 rounded-3xl items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-accent/30 transition-colors">
                  <Lock className="w-6 h-6 text-accent mb-1" />
                  <span className="text-xs font-bold text-zinc-900 uppercase tracking-wide">Checkout Seguro</span>
                  <span className="text-[10px] text-zinc-500 font-medium">Compra 100% protegida</span>
                </div>
              </div>

              {/* Clientes satisfeitos stats */}
              <div className="flex items-center gap-5 py-6 border-y border-zinc-100">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 border-2 border-white shadow-sm" />
                  <div className="w-10 h-10 rounded-full bg-zinc-300 border-2 border-white shadow-sm" />
                  <div className="w-10 h-10 rounded-full bg-accent border-2 border-white flex items-center justify-center text-[10px] font-black text-white shadow-sm">+300</div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-bold text-zinc-900">+300 clientes satisfeitos</span>
                  <span className="text-xs text-zinc-500 font-medium">Produto premium com acabamento refinado</span>
                </div>
              </div>

              {/* Clientes também compraram */}
              <div className="pt-2">
                <h4 className="text-[10px] font-black uppercase tracking-[0.15em] text-zinc-400 mb-4">Clientes também compraram</h4>
                <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                  {crossSellProducts.map(p => (
                    <div key={p.id} className="min-w-[130px] bg-white rounded-2xl p-4 border border-zinc-100 flex flex-col items-center hover:border-accent/20 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                      <div className="w-16 h-16 flex items-center justify-center mb-3">
                        <img src={p.img} className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <span className="text-[9px] font-black text-accent uppercase tracking-wider mb-1">{p.brand}</span>
                      <span className="text-[11px] text-zinc-800 font-bold text-center line-clamp-1">{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Sticky Bottom Actions (Mobile & Desktop) */}
        <div className="fixed md:absolute bottom-0 left-0 w-full md:w-1/2 md:left-1/2 bg-white/90 backdrop-blur-xl border-t border-zinc-100 p-4 md:p-6 z-50 flex gap-3 shadow-[0_-20px_40px_rgba(0,0,0,0.08)]">
          <Button 
            onClick={() => {
              addItem({ id: product.id, name: product.name, price: 0, image: product.img });
              onClose();
            }}
            variant="outline"
            className="flex-1 h-14 border-2 border-zinc-200 text-zinc-900 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-[0.1em] hover:bg-zinc-50 hover:border-zinc-300 transition-all"
          >
            Adicionar à Sacola
          </Button>

          <Button 
            onClick={() => {
              const productLink = getProductLink(product.id);
              window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá, tenho interesse neste modelo: ${product.name}\n${productLink}`)}`, '_blank');
            }}
            className="flex-[1.5] h-14 bg-accent hover:bg-[#a64b17] text-white rounded-2xl text-[11px] md:text-xs font-black uppercase tracking-[0.15em] shadow-[0_10px_20px_rgba(179,139,89,0.3)] transition-all duration-300 hover:shadow-[0_15px_30px_rgba(179,139,89,0.4)] hover:-translate-y-1 active:scale-95 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 w-full h-full">
              Falar com Especialista <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </span>
            {/* Shimmer Effect overlay */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
          </Button>
        </div>

      </DialogContent>
    </Dialog>
  );
}

