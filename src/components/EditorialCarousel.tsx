import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { Product } from "@/data/site";
import { Button } from "@/components/ui/button";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";

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
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
          
          {/* Navigation Arrows */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 border border-zinc-200 shadow-xl flex items-center justify-center hover:border-accent hover:bg-accent hover:text-white text-zinc-600 transition-all duration-300 md:-translate-x-1/2 hidden md:flex"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 border border-zinc-200 shadow-xl flex items-center justify-center hover:border-accent hover:bg-accent hover:text-white text-zinc-600 transition-all duration-300 md:translate-x-1/2 hidden md:flex"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            spaceBetween={30}
            slidesPerView={1.1}
            centeredSlides={true}
            loop={true}
            pagination={{ clickable: true, el: '.editorial-pagination' }}
            breakpoints={{
              640: { slidesPerView: 2.2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: false },
            }}
            className="!pb-16"
          >
            {products.map((product, i) => (
              <SwiperSlide key={`${product.id}-${i}`}>
                <div 
                  className="group relative flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-lg border border-zinc-100 hover:shadow-2xl transition-all duration-500 cursor-pointer h-full"
                  onClick={() => onProductClick(product)}
                >
                  {/* Image Container with 4:3 aspect ratio */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                    <img 
                      src={product.img} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
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
                    <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed max-w-[250px] mx-auto">
                      {product.description}
                    </p>
                    
                    <div className="w-8 h-[1px] bg-accent/30 mt-6 mb-2 transition-all duration-500 group-hover:w-16" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="editorial-pagination flex justify-center gap-2 mt-4" />
        </div>
      </div>
    </section>
  );
}
