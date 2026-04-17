import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Controller, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
}

interface ProductCarouselProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  badgeText?: string;
  className?: string;
}

export const ProductCarousel = ({ products, title, subtitle, badgeText = "EXCLUSIVIDADE", className = "" }: ProductCarouselProps) => {
  const [firstSwiper, setFirstSwiper] = useState<any>(null);
  const [secondSwiper, setSecondSwiper] = useState<any>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className={`py-24 bg-[#F4F4F5] text-black overflow-hidden relative ${className}`}>
      {/* Top Badge */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <button className="bg-black text-white text-[11px] font-black px-8 py-2.5 rounded-full uppercase tracking-widest hover:scale-105 transition-transform">
          {badgeText}
        </button>
      </div>

      {(title || subtitle) && (
        <div className="container-luxe mb-4 text-center">
          {subtitle && <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-1">{subtitle}</p>}
          {title && <h2 className="text-4xl md:text-5xl font-serif mb-6">{title}</h2>}
        </div>
      )}

      {/* Top Swiper (Images) */}
      <div className="relative pt-12 pb-4 px-4 max-w-[1400px] mx-auto">
        <Swiper
          modules={[Navigation, Controller]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          centeredSlides
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          loop
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
          className="w-full !overflow-visible"
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              {({ isActive }) => (
                <div className="relative aspect-[4/3] w-full flex items-center justify-center">
                  <div className={`flex items-center justify-center ${isActive ? 'carousel-glasses' : ''}`}>
                    <img 
                      src={p.img} 
                      className={`max-h-full max-w-full object-contain relative z-10 transition-all duration-700 drop-shadow-xl ${isActive ? 'scale-110 blur-0' : 'scale-75 blur-[2px]'}`} 
                      alt={p.name}
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

      {/* Bottom Swiper (Details) */}
      <div className="container-luxe max-w-2xl px-4">
        <Swiper
          modules={[EffectFade, Controller, Pagination]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          className="w-full"
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="text-center">
                <p className="text-[11px] text-zinc-500 uppercase tracking-widest font-medium mb-4">
                  Compre {p.brand} {p.name}
                </p>

                <Button asChild size="lg" className="bg-black text-white hover:bg-zinc-800 rounded-full px-12 h-12 uppercase tracking-widest text-[10px] font-black transition-all hover:scale-105 active:scale-95 shadow-lg">
                  <Link to="/catalogo">COMPRE AGORA</Link>
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

