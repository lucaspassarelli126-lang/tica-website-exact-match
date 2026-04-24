import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/site";
import { ShoppingCart, X, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const { addItem } = useCart();

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white border-none shadow-2xl rounded-3xl">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Side: Image Section */}
          <div className="relative bg-[#FDFDFD] flex items-center justify-center p-8 md:p-12">
            <img 
              src={product.img} 
              alt={product.name} 
              className="w-full h-auto max-h-[300px] md:max-h-[400px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
            />
            {/* Brand/Badge label */}
            <div className="absolute top-6 left-6">
              <span className="bg-accent text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                {product.brand}
              </span>
            </div>
          </div>

          {/* Right Side: Details Section */}
          <div className="p-8 md:p-12 flex flex-col h-full bg-white relative">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-zinc-900 transition-colors md:hidden"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-[10px] md:text-xs font-black text-accent uppercase tracking-[0.3em] mb-2 block">
                  {product.brand}
                </span>
                <DialogTitle className="text-2xl md:text-4xl font-serif text-zinc-900 leading-tight">
                  {product.name}
                </DialogTitle>
              </div>

              <div className="text-2xl md:text-3xl font-numeric font-black text-zinc-900">
                R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                <span className="text-xs text-zinc-400 font-medium ml-2 block mt-1">
                  ou 10x de R$ {(product.price / 10).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros
                </span>
              </div>

              <div className="h-[1px] w-full bg-zinc-100" />

              <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Sobre o modelo</h4>
                <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 gap-4 pt-2">
                <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                  <Truck className="w-4 h-4 text-accent" />
                  Envio imediato para todo o Brasil
                </div>
                <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-wider text-zinc-500">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  Garantia vitalícia de ajustes
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  onClick={() => {
                    addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.img
                    });
                    onClose();
                  }}
                  size="lg"
                  className="w-full h-14 bg-black text-white hover:bg-zinc-800 rounded-full text-xs font-black uppercase tracking-widest gap-3 shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
