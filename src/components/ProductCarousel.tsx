import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Controller, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TiltWrapper } from "@/components/ui/tilt-wrapper";

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
    <section className={`pt-24 pb-8 bg-white text-black overflow-hidden relative ${className}`}>
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
      <div className="relative pt-12 pb-0 px-4 max-w-[1400px] mx-auto -mb-8">
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
                <div className="relative aspect-[21/9] w-full flex items-center justify-center">
                  <div className={`flex items-center justify-center ${isActive ? 'carousel-glasses' : ''}`}>
                    <TiltWrapper glare={isActive} maxTilt={isActive ? 15 : 0} className={isActive ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"}>
                      <img 
                        src={p.img} 
                        className={`max-h-full max-w-full object-contain relative z-10 transition-all duration-700 drop-shadow-xl ${isActive ? 'scale-110 blur-0' : 'scale-75 blur-[2px]'}`} 
                        alt={p.name}
                      />
                    </TiltWrapper>
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
      <div className="container-luxe max-w-2xl px-4 -mt-4">
        <Swiper
          modules={[EffectFade, Controller, Pagination]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{ clickable: true }}
          className="w-full pb-10"
        >
          {products.map((p, i) => (
            <SwiperSlide key={p.id}>
              <div className="text-center py-0">
                {/* Star Ratings */}
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[1,2,3,4,5].map((star) => (
                    <svg key={star} className={`w-4 h-4 ${star <= 4 ? 'text-amber-400' : 'text-amber-200'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-[11px] text-zinc-400 ml-1">(4.{(i * 3 + 7) % 10 + 1} · {80 + i * 13} avaliações)</span>
                </div>

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
