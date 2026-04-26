import { useParams, useNavigate } from "react-router-dom";
import { products, editorialProducts, newArrivals } from "@/data/site";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";
import { toast } from "sonner";
import { ShieldCheck, Lock, RotateCcw, HelpCircle, MessageSquare, Mail, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WHATSAPP_NUMBER, getProductLink } from "@/lib/constants";

export default function Produto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();

  // Handle IDs that might have _copy appended from the infinite scroll
  const cleanId = id?.replace('_copy', '');
  
  const allProducts = [...products, ...editorialProducts, ...newArrivals];
  const product = allProducts.find(p => p.id === cleanId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
        <Button onClick={() => navigate('/catalogo')}>Voltar ao Catálogo</Button>
      </div>
    );
  }

  return (
    <div className="pt-8 pb-10 px-4 md:px-8 max-w-[1600px] mx-auto font-sans">
      <div className="grid lg:grid-cols-[280px_1fr_350px] gap-8 lg:gap-12 items-start">
        
        {/* Left Side: Support/Help Section */}
        <div className="hidden lg:flex flex-col space-y-5 bg-zinc-50/50 p-6 rounded-xl border border-zinc-100 shadow-sm">
          <h2 className="text-[10px] font-black uppercase tracking-widest text-zinc-900 mb-3">Estamos aqui para ajudar:</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100 shrink-0">
                <HelpCircle className="w-4 h-4 text-zinc-600" />
              </div>
              <div>
                <p className="text-[12px] font-bold text-zinc-800">Perguntas Frequentes</p>
                <p className="text-[10px] text-zinc-500">Tire suas dúvidas rápidas</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100 shrink-0">
                <ShieldCheck className="w-4 h-4 text-zinc-600" />
              </div>
              <div className="space-y-0.5">
                <p className="text-[12px] font-bold text-zinc-800 uppercase tracking-tight">Garantia e Assistência</p>
                <p className="text-[10px] text-zinc-600 leading-snug">
                  Suporte técnico original Óticas Théo
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-zinc-100">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100 shrink-0">
                <MessageSquare className="w-4 h-4 text-zinc-600" />
              </div>
              <div>
                <p className="text-[12px] font-bold text-zinc-800">Fale conosco por chat</p>
                <p className="text-[10px] text-zinc-500">Atendimento em tempo real</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100 shrink-0">
                <Mail className="w-4 h-4 text-zinc-600" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] text-zinc-800 break-words font-semibold mt-1.5">contato@oticastheo.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100 shrink-0">
                <Phone className="w-4 h-4 text-zinc-600" />
              </div>
              <div>
                <p className="text-[12px] font-bold text-zinc-800">(19) 97152-8684</p>
                <p className="text-[10px] text-zinc-500">Seg. a Sex, 09h às 17h</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-4 border-t border-zinc-200">
              <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center shadow-sm border border-green-100 shrink-0">
                <svg className="w-4 h-4 text-green-600 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div className="space-y-0.5">
                <p className="text-[12px] font-bold text-zinc-800">Atendimento Via WhatsApp</p>
                <p className="text-[10px] text-zinc-600 leading-tight">
                  Fale com um especialista agora mesmo.
                </p>
                <p className="text-[10px] text-zinc-400">Segunda a Sexta, 09:00 às 17:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle: Image Section */}
        <div className="flex flex-col w-full h-full min-h-[400px] justify-center relative">
          <div className="flex items-baseline justify-center gap-4 mb-2 md:mb-4">
            <h1 className="text-lg md:text-xl font-black uppercase tracking-wider text-black text-center">
              {product.name}
            </h1>
          </div>

          <div className="w-full flex-grow flex items-center justify-center pt-0 pb-8 md:pb-16">
            <img 
              src={product.img} 
              alt={product.name} 
              className="w-full h-auto max-w-5xl max-h-[450px] md:max-h-[600px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 -mt-10 md:-mt-20"
            />
          </div>
        </div>

        {/* Right Side: Options Section */}
        <div className="flex flex-col">
          <Button 
            onClick={() => {
              addItem({
                id: product.id,
                name: product.name,
                price: 0,
                image: product.img
              });
              toast.success("Adicionado ao carrinho com sucesso!");
            }}
            className="w-full h-12 bg-[#c33131] hover:bg-[#a32828] text-white rounded-md text-[11px] font-black uppercase tracking-wider transition-all shadow-md"
          >
            ADICIONE AO CARRINHO
          </Button>

          {/* Product Details Section */}
          <div className="space-y-6 mt-8 border-t border-zinc-200 pt-6">
            
            <div>
              <h3 className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2">Sobre o modelo</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-4 border-t border-zinc-200">
              <div className="flex items-center gap-2 text-[9px] uppercase font-bold tracking-wider text-zinc-500">
                <ShieldCheck className="w-4 h-4 text-zinc-800" />
                Garantia de Qualidade
              </div>
              <div className="flex items-center gap-2 text-[9px] uppercase font-bold tracking-wider text-zinc-500">
                <Lock className="w-4 h-4 text-zinc-800" />
                Compra Segura
              </div>
              <div className="flex items-center gap-2 text-[9px] uppercase font-bold tracking-wider text-zinc-500">
                <RotateCcw className="w-4 h-4 text-zinc-800" />
                Troca Facilitada
              </div>
            </div>

            <div className="pt-2">
              <Button 
                onClick={() => {
                  const productLink = getProductLink(product.id);
                  const message = `Olá, tenho interesse neste modelo de óculos: ${product.name}\nLink: ${productLink}`;
                  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                variant="outline"
                className="w-full h-12 border-zinc-200 text-zinc-900 rounded-md text-[10px] font-black uppercase tracking-widest gap-2 hover:bg-zinc-50 transition-all"
              >
                Falar com um Consultor
              </Button>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-200">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-zinc-100">
                  <AccordionTrigger className="text-[9px] font-bold uppercase tracking-widest text-zinc-900 py-3 hover:no-underline">
                    Detalhes da Peça
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1.5 text-[11px] text-zinc-600 flex flex-col pb-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent text-xs leading-none mt-0.5">•</span>
                        Material premium de alta durabilidade e leveza
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent text-xs leading-none mt-0.5">•</span>
                        Acompanha estojo de luxo original da marca e flanela
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent text-xs leading-none mt-0.5">•</span>
                        Ajuste ergonômico para conforto prolongado
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent text-xs leading-none mt-0.5">•</span>
                        Certificado de autenticidade Óticas Théo
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-none">
                  <AccordionTrigger className="text-[9px] font-bold uppercase tracking-widest text-zinc-900 py-3 hover:no-underline">
                    Atendimento Concierge
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-[11px] text-zinc-600 leading-relaxed bg-zinc-50 p-3 rounded-md border border-zinc-100 mb-2">
                      Tem dúvidas se o formato <strong>{product.style}</strong> combina com você? Nossa equipe está disponível no WhatsApp para ajudar você a escolher a armação perfeita.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
