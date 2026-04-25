import { Eye, Star } from "lucide-react";
import { Product } from "@/data/site";
import {
  MotionCarousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
  CarouselIndicator
} from "@/components/ui/motion-carousel";

interface EditorialCarouselProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  badgeText?: string;
  onProductClick: (product: Product) => void;
}

export function EditorialCarousel({ 
  products, 
  title = "Coleção Cápsula", 
  subtitle = "Exclusividade", 
  badgeText = "NOVO",
  onProductClick 
}: EditorialCarouselProps) {

  return (
    <section className="bg-zinc-50 py-20 border-y border-zinc-100">
      <div className="container-luxe">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          {badgeText && (
            <span className="inline-block bg-accent text-white text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-widest mb-4 shadow-sm">
              {badgeText}
            </span>
          )}
          {subtitle && (
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-zinc-400 mb-2">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="text-3xl md:text-5xl font-serif text-zinc-900 tracking-tight">
              {title}
            </h2>
          )}
        </div>

        {/* Carousel Section */}
        <div className="relative max-w-6xl mx-auto px-4 md:px-12">
          
          <MotionCarousel className="w-full">
            <CarouselContent className="-ml-4 pb-16 items-stretch">
              {products.map((product, i) => (
                <CarouselItem key={`${product.id}-${i}`} className="basis-full sm:basis-1/2 lg:basis-1/3 pl-4">
                  <div 
                    className="group relative flex flex-col bg-white rounded-xl overflow-hidden shadow-lg border border-zinc-100 hover:shadow-2xl transition-all duration-500 cursor-pointer h-full"
                    onClick={() => onProductClick(product)}
                  >
                    <div className="relative aspect-[5/2] w-full overflow-hidden flex items-center justify-center">
                      <img 
                        src={product.img} 
                        alt={product.name}
                        className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                      />
                      
                      {/* Dark Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                          <Eye className="w-5 h-5 text-zinc-900" />
                        </div>
                      </div>

                      {/* Brand Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-white/95 backdrop-blur-md text-zinc-800 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                          {product.brand}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col items-center text-center flex-grow">
                      <h3 className="text-lg md:text-xl font-serif text-zinc-900 mb-2 group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      
                      {/* Reviews */}
                      <div className="flex items-center gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3.5 h-3.5 fill-[#c45a1c] text-[#c45a1c]" />
                        ))}
                        <span className="text-[10px] text-zinc-500 ml-1 font-medium">(5.0)</span>
                      </div>

                      <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed max-w-[250px] mx-auto">
                        {product.description}
                      </p>
                      
                      <div className="w-8 h-[1px] bg-accent/30 mt-6 mb-2 transition-all duration-500 group-hover:w-16" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselNavigation
              className="absolute left-[-5%] top-1/2 w-[110%] -translate-y-1/2 hidden md:flex"
              classNameButton="bg-white hover:bg-accent hover:*:stroke-white border border-zinc-200 shadow-xl *:stroke-zinc-600 transition-colors w-12 h-12 flex items-center justify-center rounded-full"
              alwaysShow
            />
            
            <CarouselIndicator className="bottom-0" classNameButton="bg-zinc-300 dark:bg-zinc-700 hover:bg-accent ui-active:bg-accent" />
          </MotionCarousel>

        </div>
      </div>
    </section>
  );
}
