import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { EffectCoverflow, Pagination, Navigation, Controller, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/effect-coverflow";
// @ts-ignore
import "swiper/css/effect-fade";

interface Product {
  id: number | string;
  name: string;
  brand: string;
  img: string;
  style: string;
  price?: number;
}

interface ProductCarouselProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  badgeText?: string;
  className?: string;
}

export const ProductCarousel = ({ products, title, subtitle, badgeText = "EXCLUSIVIDADE", className = "" }: ProductCarouselProps) => {
  const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { addItem } = useCart();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // Get the real product based on active index, accounting for loop duplicates
  const activeProduct = products[activeIndex % products.length];

  return (
    <section className={`pt-4 pb-8 bg-white text-black overflow-hidden relative ${className}`}>

      {(title || subtitle || badgeText) && (
        <div className="container-luxe mb-1 text-center">
          {badgeText && (
            <span className="inline-block bg-black text-white text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-widest mb-3">
              {badgeText}
            </span>
          )}
          {subtitle && <p className="text-[9px] uppercase tracking-[0.3em] text-accent font-bold mb-1">{subtitle}</p>}
          {title && <h2 className="text-2xl md:text-3xl font-serif mb-2">{title}</h2>}
        </div>
      )}

      {/* Top Swiper (Images) */}
      <div className="relative pt-2 pb-4 px-4 max-w-[1300px] mx-auto">
        <Swiper
          modules={[Navigation, Controller, Pagination]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          centeredSlides
          slidesPerView={1.5}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 }
          }}
          loop
          speed={400}
          grabCursor={true}
          spaceBetween={40}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSlideChange={(swiper) => {
            // realIndex gives the actual index ignoring loop clones
            setActiveIndex(swiper.realIndex);
          }}
          className="w-full !overflow-visible pb-8"
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              {({ isActive }) => (
                <div className="relative aspect-[2/1] w-full flex items-center justify-center">
                  <div className={`flex items-center justify-center w-full h-full transition-all duration-300 ease-out will-change-transform ${isActive ? 'scale-110 z-20' : 'scale-75 opacity-40 grayscale'}`}>
                    <img 
                      src={p.img} 
                      className={`max-h-full max-w-full object-contain drop-shadow-xl transition-all duration-300 ease-in-out will-change-transform ${isActive ? 'scale-125' : 'scale-90'}`} 
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Arrows */}
        <button ref={prevRef} className="absolute left-2 md:left-4 top-[45%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-zinc-400/80 flex items-center justify-center hover:bg-zinc-500 transition-colors shadow-sm disabled:opacity-30 disabled:pointer-events-none">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button ref={nextRef} className="absolute right-2 md:right-4 top-[45%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-zinc-400/80 flex items-center justify-center hover:bg-zinc-500 transition-colors shadow-sm disabled:opacity-30 disabled:pointer-events-none">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Bottom: Single Buy Button (always adds the active product) */}
      <div className="container-luxe max-w-2xl px-4 pb-4 text-center">
        {activeProduct && (
          <p className="text-[10px] md:text-xs text-zinc-500 mb-6 font-medium tracking-wide max-w-xs mx-auto animate-in fade-in slide-in-from-bottom-1 duration-500">
            {activeProduct.description}
          </p>
        )}
        <Button 
          size="lg"
          onClick={() => {
            if (!activeProduct) return;
            addItem({
              id: String(activeProduct.id),
              name: "armação",
              price: activeProduct.price ?? 1200,
              image: activeProduct.img
            });
          }}
          className="bg-black text-white hover:bg-zinc-800 rounded-full px-12 h-12 uppercase tracking-widest text-[10px] font-black transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          COMPRAR AGORA
        </Button>
      </div>
    </section>
  );
};
