import { Link } from "react-router-dom";
import { ArrowRight, Award, ShieldCheck, Sparkles, Truck } from "lucide-react";
import hero from "@/assets/banners/hero-banner1-v3.jpg";
import heroBanner2 from "@/assets/banners/hero-banner2.jpg";
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
import { ProductCarousel } from "@/components/ProductCarousel";
import { LayeredText } from "@/components/ui/layered-text";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
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

  const heroSlides = [
    { 
      src: hero, 
      alt: "Exame de vista Óticas Théo",
      premiumTextLayout: true
    },
    { 
      src: heroBanner2, 
      alt: "Conforto Visual Óticas Théo",
      textOverlay: true,
      layeredText: true,
      layeredLines: [
        { top: "\u00A0", bottom: "CONFORTO" },
        { top: "CONFORTO", bottom: "ESTILO" },
        { top: "ESTILO", bottom: "PRECISÃO" },
        { top: "PRECISÃO", bottom: "QUALIDADE" },
        { top: "QUALIDADE", bottom: "LUXO" },
        { top: "LUXO", bottom: "\u00A0" },
      ]
    },
    { src: davidBanner, alt: "Coleção David" },
    { src: pucciBanner, alt: "Coleção Pucci" },
    { src: saleBanner, alt: "Promoções" },
  ];

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
          <CarouselContent className="m-0">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="pl-0">
                <Link 
                  to="/catalogo" 
                  className="block group"
                >
                  <div className="w-full max-w-[1920px] mx-auto aspect-video relative flex items-center justify-center text-center">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ${slide.textOverlay ? 'group-hover:scale-105' : ''}`}
                    />
                    
                    {/* Default light overlay for no-text secondary banners */}
                    {index > 0 && !slide.textOverlay && (
                      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent pointer-events-none" />
                    )}

                    {/* Animated Text Overlay for specific layered banners */}
                    {slide.textOverlay && !slide.premiumTextLayout && (
                      <>
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />
                        <div className="relative z-10 flex flex-col items-center max-w-3xl px-6
                                      animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both delay-300">
                          {slide.layeredText ? (
                            <LayeredText 
                              lines={slide.layeredLines} 
                              className="text-white drop-shadow-xl transform scale-50 sm:scale-75 md:scale-100 pt-0 pb-0" 
                            />
                          ) : (
                            <>
                              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-3 md:mb-5 drop-shadow-md leading-tight">
                                {slide.title}
                              </h2>
                              <p className="text-sm md:text-xl text-white/90 font-light mb-6 md:mb-8 max-w-xl mx-auto drop-shadow-sm">
                                {slide.subtitle}
                              </p>
                              {slide.ctaText && (
                                <span className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-luxury text-xs md:text-sm tracking-[0.2em] uppercase font-medium border border-white hover:bg-white hover:text-black transition-colors duration-300 pointer-events-auto">
                                  {slide.ctaText}
                                </span>
                              )}
                            </>
                          )}
                        </div>
                      </>
                    )}

                    {/* Premium Text Layout Overlay (First slide) */}
                    {slide.premiumTextLayout && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
                        
                        <div className="relative z-10 w-full h-full max-w-[1920px] mx-auto px-6 sm:px-12 md:px-20 flex flex-col justify-between py-12 md:py-20 lg:py-24">
                          
                          {/* TOP BRANDING (Style: PUCCI in image) */}
                          <div className="animate-in fade-in slide-in-from-top-4 duration-1000">
                            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[120px] font-serif uppercase tracking-tight text-white/10 select-none pointer-events-none leading-none">
                              Óticas Théo
                            </h2>
                          </div>

                          {/* RIGHT SIDE LIST (Style: List with vertical line) */}
                          <div className="flex justify-end w-full mb-12 md:mb-32 lg:mb-40 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
                            <div className="flex items-stretch gap-4 md:gap-6 text-right">
                              <div className="space-y-1 md:space-y-2 py-1">
                                <p className="text-xl sm:text-2xl md:text-4xl font-light tracking-tight text-white/90">Exame de Vista</p>
                                <p className="text-xl sm:text-2xl md:text-4xl font-light tracking-tight text-white/90">Óculos Prontos</p>
                                <p className="text-xl sm:text-2xl md:text-4xl font-light tracking-tight text-white/90">Com Qualidade</p>
                                <p className="text-xl sm:text-2xl md:text-4xl font-light tracking-tight text-white/90">e Rapidez</p>
                                
                                <div className="pt-6 md:pt-10 flex flex-col items-end">
                                  <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/60 mb-2">A partir de</span>
                                  <div className="flex items-center gap-1 mt-1">
                                    <span className="text-base md:text-xl text-white font-medium -mt-2">R$</span>
                                    <HandWrittenTitle delay={1.5} className="mr-1">
                                      <span className="font-bold text-5xl sm:text-6xl md:text-7xl text-white">199,90</span>
                                    </HandWrittenTitle>
                                  </div>
                                </div>
                              </div>
                              <div className="w-[1px] md:w-[2px] bg-white/20 h-full" />
                            </div>
                          </div>

                        </div>
                      </>
                    )}
                  </div>
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
      <ProductCarousel 
        products={products} 
        subtitle="Destaques da Temporada"
        title="Encontre o seu estilo"
        badgeText="DESTAQUE"
      />

      {/* Featured brand banners */}
      <section className="container-luxe pb-16 grid md:grid-cols-2 gap-4">
        {[gucciBanner, miumiuBanner, celineBanner, davidBanner].map((src, i) => (
          <Link key={i} to="/catalogo" className="block overflow-hidden group">
            <img src={src} alt="Coleção" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
          </Link>
        ))}
      </section>

      <ProductCarousel 
        products={products} 
        subtitle="Novas Tendências"
        title="Lançamentos de Luxo"
        badgeText="NOVIDADE"
      />

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
