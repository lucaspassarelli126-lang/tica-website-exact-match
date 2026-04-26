import React from 'react';
import { ShoppingBag, X, Plus, Minus, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetFooter 
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

import { WHATSAPP_NUMBER, getProductLink } from '@/lib/constants';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose }) => {
  const { cart, removeItem, updateQuantity, clearCart, totalPrice, totalItems } = useCart();

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

  const handleWhatsApp = () => {
    const itemLines = cart.map((item) => {
      const productLink = getProductLink(item.id);
      return `• Modelo: *${item.name}*\nLink: ${productLink}`;
    }).join('\n\n');

    const message = `Olá! Gostaria de fazer uma solicitação destes modelos:\n\n${itemLines}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 gap-0 border-l border-zinc-100">
        <SheetHeader className="p-6 border-b border-zinc-100">
          <SheetTitle className="flex items-center justify-between font-serif text-2xl w-full pr-8">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6" />
              Sua Seleção
              {totalItems > 0 && (
                <span className="text-sm font-sans font-medium text-muted-foreground ml-1">
                  ({totalItems})
                </span>
              )}
            </div>
            {cart.length > 0 && (
              <button 
                onClick={clearCart}
                className="text-[10px] font-sans uppercase tracking-widest text-muted-foreground hover:text-red-500 transition-colors"
              >
                Limpar
              </button>
            )}
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[50vh] text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-zinc-50 flex items-center justify-center">
                <ShoppingBag className="h-10 w-10 text-zinc-300" />
              </div>
              <div>
                <p className="text-lg font-medium">Sua lista está vazia</p>
                <p className="text-sm text-muted-foreground">Selecione os modelos que você mais gostou.</p>
              </div>
              <Button variant="outline" onClick={onClose} className="rounded-full px-8">
                VER COLEÇÃO
              </Button>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="h-20 w-24 bg-zinc-50 rounded-md overflow-hidden flex items-center justify-center p-2 shrink-0 border border-zinc-100">
                    <img src={item.image} alt="Óculos" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xs font-bold uppercase tracking-tight text-zinc-800">{item.name}</h4>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-red-500 transition-colors shrink-0"
                        aria-label="Remover item"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center mt-3">
                      <div className="flex items-center bg-zinc-50 border border-zinc-200 rounded-full h-8 overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-full flex items-center justify-center hover:bg-zinc-100 transition-colors text-zinc-500 border-r border-zinc-200"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-4 text-xs font-black tabular-nums min-w-[40px] text-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-full flex items-center justify-center hover:bg-zinc-100 transition-colors text-zinc-500 border-l border-zinc-200"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {cart.length > 0 && (
          <SheetFooter className="p-6 bg-zinc-50/50 border-t border-zinc-100 sm:flex-col items-stretch gap-4">
            <p className="text-[11px] text-muted-foreground leading-snug text-center">
              Nosso atendente vai confirmar disponibilidade e valores pelo WhatsApp.
            </p>
            <Button 
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20ba58] text-white h-12 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-lg gap-2 flex items-center justify-center"
            >
              <MessageCircle className="h-4 w-4" />
              PEDIR VIA WHATSAPP
            </Button>
            <p className="text-center text-[10px] text-muted-foreground">
              Você será redirecionado para o WhatsApp da loja com seu pedido pronto.
            </p>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
