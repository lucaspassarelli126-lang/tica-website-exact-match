import { Link } from "react-router-dom";
import { ArrowRight, Award, ShieldCheck, Sparkles, Truck, ShoppingBag, Plus, Minus } from "lucide-react";
import hero from "@/assets/banners/hero.jpg";
import celineBanner from "@/assets/banners/celine.jpg";
import davidBanner from "@/assets/banners/david.jpg";
import pucciBanner from "@/assets/banners/pucci.jpg";
import saleBanner from "@/assets/banners/sale.jpg";
import miumiuBanner from "@/assets/banners/miumiu.png";
import gucciBanner from "@/assets/banners/gucci-vitrine.png";
import { products, brands, categories } from "@/data/site";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Controller, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  const [firstSwiper, setFirstSwiper] = useState<any>(null);
  const [secondSwiper, setSecondSwiper] = useState<any>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative w-full">
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full relative"
        >
          <CarouselContent>
            {[hero, celineBanner, davidBanner, pucciBanner, saleBanner].map((src, index) => (
              <CarouselItem key={index}>
                <Link to="/catalogo" className="block group">
                  <img
                    src={src}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-[55vh] md:h-[75vh] object-cover"
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex bg-background/50 border-none hover:bg-background/80" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex bg-background/50 border-none hover:bg-background/80" />
        </Carousel>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border">
        <div className="container-luxe grid grid-cols-2 md:grid-cols-4 gap-6 py-8 text-center">
          {[
            { icon: Truck, label: "Frete grátis", desc: "Para todo o Brasil" },
            { icon: ShieldCheck, label: "Compra segura", desc: "Loja certificada" },
            { icon: Award, label: "100% original", desc: "Marcas autenticadas" },
            { icon: Sparkles, label: "Curadoria de luxo", desc: "Selecionado a dedo" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <Icon className="h-6 w-6 text-accent" />
              <p className="text-sm font-medium">{label}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container-luxe py-16">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Curadoria</p>
          <h2 className="text-4xl md:text-5xl font-serif">Estilos para cada personalidade</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((c) => (
            <Link key={c.slug} to={`/catalogo?style=${c.slug}`} className="group block">
              <div className="aspect-square overflow-hidden bg-soft">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-center text-sm uppercase tracking-wider">{c.name}</p>
            </Link>
          ))}
        </div>
      </section>
      {/* Featured Products - Oakley Custom Style */}
      <section className="py-24 bg-[#EEEBF2] text-black overflow-hidden relative">
        {/* Top Badge */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
          <button className="bg-black text-white text-[11px] font-black px-8 py-2.5 rounded-full uppercase tracking-widest hover:scale-105 transition-transform">
            FAÇA O SEU
          </button>
        </div>

        <div className="container-luxe mb-4 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-1 opacity-0">Destaques</p>
        </div>

        {/* Top Swiper (Images) */}
        <div className="relative pt-12 pb-4 px-4 max-w-[1400px] mx-auto">
          <Swiper
            modules={[EffectCoverflow, Navigation, Controller]}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            effect="coverflow"
            centeredSlides
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            loop
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: -50,
              depth: 150,
              modifier: 1.5,
              scale: 0.8
            }}
            className="w-full !overflow-visible"
          >
            {products.map((p) => (
              <SwiperSlide key={p.id}>
                {({ isActive }) => (
                  <div className="relative aspect-[4/3] w-full flex items-center justify-center p-4">
                    {/* Subtle Floor Shadow - Only visible when active */}
                    <div className={`absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[60%] h-6 bg-black/10 blur-2xl rounded-[100%] transition-opacity duration-500 ${isActive ? 'opacity-60' : 'opacity-0'}`} />
                    <img 
                      src={p.img} 
                      className={`max-h-[75%] max-w-[90%] object-contain transition-all duration-700 ${isActive ? 'scale-100' : 'scale-75'}`} 
                      alt={p.name}
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Arrows */}
          <button className="swiper-button-prev-custom absolute left-4 md:left-20 top-[45%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-zinc-400/40 backdrop-blur-sm flex items-center justify-center hover:bg-zinc-400/60 transition-colors border border-white/20 shadow-sm">
            <Plus className="w-5 h-5 text-zinc-700 rotate-45" /> 
          </button>
          <button className="swiper-button-next-custom absolute right-4 md:right-20 top-[45%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/40 backdrop-blur-sm border-2 border-primary/20 flex items-center justify-center hover:bg-white/60 transition-colors shadow-sm">
            <ArrowRight className="w-6 h-6 text-blue-600" />
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

      {/* Featured brand banners */}
      <section className="container-luxe pb-16 grid md:grid-cols-2 gap-4">
        {[gucciBanner, miumiuBanner, celineBanner, davidBanner].map((src, i) => (
          <Link key={i} to="/catalogo" className="block overflow-hidden group">
            <img src={src} alt="Coleção" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
          </Link>
        ))}
      </section>

      {/* Brands grid */}
      <section className="bg-soft py-16">
        <div className="container-luxe">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Marcas parceiras</p>
            <h2 className="text-4xl md:text-5xl font-serif">As maisons mais desejadas</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {brands.map((b) => (
              <Link key={b.slug} to="/marcas" className="bg-background p-6 flex items-center justify-center aspect-square hover:shadow-md transition-shadow">
                <img src={b.img} alt={b.name} className="max-h-16 max-w-full object-contain" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/marcas">Ver todas as marcas <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sale banner */}
      <section className="container-luxe py-16">
        <Link to="/catalogo" className="block overflow-hidden group">
          <img src={pucciBanner} alt="Coleção exclusiva" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]" />
        </Link>
      </section>

      {/* CTA Schedule */}
      <section className="bg-luxury text-primary-foreground py-20">
        <div className="container-luxe text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Atendimento personalizado</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Agende seu exame de vista</h2>
          <p className="text-primary-foreground/70 mb-8 text-lg">
            Profissionais especializados, equipamentos de última geração e curadoria de marcas internacionais para encontrar a sua peça perfeita.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/contato#agendamento">Agendar agora <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Sale */}
      <section className="container-luxe py-16">
        <Link to="/catalogo" className="block overflow-hidden">
          <img src={saleBanner} alt="Promoções" className="w-full h-auto object-cover" />
        </Link>
      </section>
    </>
  );
};

export default Home;
