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
  description?: string;
}

interface ProductCarouselProps {
  products: any[];
  title?: string;
  subtitle?: string;
  badgeText?: string;
  className?: string;
  onProductClick: (product: any) => void;
  desktopSpaceBetween?: number;
}

export const ProductCarousel = ({ 
  products, 
  title, 
  subtitle, 
  badgeText = "EXCLUSIVIDADE", 
  className = "",
  onProductClick,
  desktopSpaceBetween = 10
}: ProductCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  const activeProduct = products[activeIndex % products.length];

  return (
    <section className={`py-12 md:py-20 bg-background overflow-hidden ${className}`}>
      {/* Header section with badge and titles */}
      <div className="flex flex-col items-center text-center mb-8 md:mb-12 px-4">
        <div className="mb-4 inline-block bg-black text-white text-[10px] md:text-xs font-black px-4 py-1.5 rounded-full tracking-[0.2em] uppercase shadow-sm">
          {badgeText}
        </div>
        <p className="text-[#B38B59] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-2">
          {subtitle}
        </p>
        <h2 className="text-2xl md:text-5xl font-light tracking-tight text-zinc-900">
          {title}
        </h2>
      </div>

      {/* Top Swiper (Images) */}
      <div className="relative w-full">
        {/* Navigation Arrows — outside the slide area so they don't overlap */}
        <button 
          ref={setPrevEl} 
          className="absolute left-2 md:left-6 top-[40%] -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-zinc-400/80 flex items-center justify-center hover:bg-zinc-500 transition-colors shadow-sm disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button 
          ref={setNextEl} 
          className="absolute right-2 md:right-6 top-[40%] -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-zinc-400/80 flex items-center justify-center hover:bg-zinc-500 transition-colors shadow-sm disabled:opacity-30 disabled:pointer-events-none"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="max-w-[1300px] mx-auto px-16 md:px-20 relative">
          <Swiper
            modules={[Navigation, Pagination]}
            initialSlide={0}
            centeredSlides
            slidesPerView={1.5}
            breakpoints={{
              640: { slidesPerView: 2.5, spaceBetween: 5 },
              1024: { slidesPerView: 3, spaceBetween: 5 }
            }}
            loop
            speed={400}
            grabCursor={true}
            spaceBetween={10}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevEl,
              nextEl: nextEl,
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            className="w-full !overflow-visible pb-12"
          >
            {products.map((p, idx) => (
              <SwiperSlide key={`${p.id}-${idx}`}>
                {({ isActive }) => (
                  <div className="relative aspect-[2.5/1] w-full flex items-center justify-center">
                    <div className={`flex items-center justify-center w-full h-full transition-all duration-300 ease-out will-change-transform ${isActive ? 'scale-[1.45] z-20' : 'scale-75 opacity-40 grayscale'}`}>
                      <img 
                        src={p.img} 
                        className={`max-h-full max-w-full object-contain drop-shadow-2xl transition-all duration-300 ease-in-out will-change-transform ${isActive ? 'scale-[1.35]' : 'scale-90'}`} 
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
        </div>
      </div>

      {/* Bottom info and button */}
      <div className="flex flex-col items-center mt-4 px-4 pb-4">
        {activeProduct && (
          <p className="text-[10px] md:text-xs text-zinc-500 mb-6 font-medium tracking-wide max-w-xs md:max-w-md text-center min-h-[30px]">
            {activeProduct.description}
          </p>
        )}
        <Button 
          size="lg"
          onClick={() => onProductClick(activeProduct)}
          className="bg-black text-white hover:bg-zinc-800 rounded-full px-12 h-12 uppercase tracking-widest text-[10px] font-black transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          VER DETALHES
        </Button>
      </div>
    </section>
  );
};
