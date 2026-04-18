import { Link } from "react-router-dom";
import { ArrowRight, Award, ShieldCheck, Sparkles, Truck } from "lucide-react";
import hero from "@/assets/banners/hero-banner1-v3.jpg";
import heroBanner2 from "@/assets/banners/hero-banner2.jpg";
import heroBanner3 from "@/assets/banners/hero-banner3.jpg";
import celineBanner from "@/assets/banners/celine.jpg";
import davidBanner from "@/assets/banners/david.jpg";
import pucciBanner from "@/assets/banners/pucci.jpg";
import saleBanner from "@/assets/banners/sale.jpg";
import lensBanner from "@/assets/banners/lens_banner.png";
import miumiuBanner from "@/assets/banners/miumiu.png";
import gucciBanner from "@/assets/banners/gucci-vitrine.png";
import { products, brands, categories } from "@/data/site";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { ProductCarousel } from "@/components/ProductCarousel";
import { LayeredText } from "@/components/ui/layered-text";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import { BlurFade } from "@/components/ui/blur-fade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const Home = () => {
  const [firstSwiper, setFirstSwiper] = useState<any>(null);
  const [secondSwiper, setSecondSwiper] = useState<any>(null);
  const navigate = useNavigate();

  const heroSlides = [
    { 
      src: hero, 
      alt: "Exame de vista Óticas Théo",
      textOverlay: true,
      layeredText: true,
      fontSize: "64px",
      fontSizeMd: "38px",
      customClass: "-mt-20 md:-mt-40",
      cta: { label: "Agendar Exame", href: "/contato#agendamento" },
      layeredLines: [
        { top: "\u00A0", bottom: "EXAME DE VISTA" },
        { top: "EXAME DE VISTA", bottom: "+ ÓCULOS COMPLETO" },
        { top: "+ ÓCULOS COMPLETO", bottom: "A PARTIR DE" },
        { top: "A PARTIR DE", bottom: "R$ 199,90", bottomClass: "text-amber-400" },
        { top: "R$ 199,90", bottom: "\u00A0", topClass: "text-amber-400" },
      ]
    },
    { 
      src: heroBanner2, 
      alt: "Conforto Visual Óticas Théo",
      textOverlay: true,
      layeredText: true,
      cta: { label: "Ver Coleção", href: "/catalogo" },
      layeredLines: [
        { top: "\u00A0", bottom: "CONFORTO" },
        { top: "CONFORTO", bottom: "ESTILO" },
        { top: "ESTILO", bottom: "PRECISÃO" },
        { top: "PRECISÃO", bottom: "QUALIDADE" },
        { top: "QUALIDADE", bottom: "LUXO", bottomClass: "text-amber-400" },
        { top: "LUXO", bottom: "\u00A0", topClass: "text-amber-400" },
      ]
    },
    { 
      src: heroBanner3, 
      alt: "Atendimento Clínico Ótico",
      textOverlay: true,
      layeredText: true,
      cta: { label: "Falar com Consultor", href: "https://wa.me/5511999999999" },
      layeredLines: [
        { top: "\u00A0", bottom: "ALTA DEFINIÇÃO", bottomClass: "text-amber-400" },
        { top: "ALTA DEFINIÇÃO", bottom: "TECNOLOGIA", topClass: "text-amber-400" },
        { top: "TECNOLOGIA", bottom: "FILTRO AZUL" },
        { top: "FILTRO AZUL", bottom: "MULTIFOCAIS" },
        { top: "MULTIFOCAIS", bottom: "ANTIRREFLEXO" },
        { top: "ANTIRREFLEXO", bottom: "\u00A0" },
      ]
    }
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
              delay: 9000,
            }),
          ]}
          className="w-full relative"
        >
          <CarouselContent className="m-0">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="pl-0">
                <div 
                  onClick={() => navigate("/catalogo")}
                  className="block group cursor-pointer"
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
                        {/* Right-aligned vignette gradient for superior text legibility */}
                        <div className="absolute inset-y-0 right-0 w-full md:w-[70%] bg-gradient-to-l from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />
                        
                        {slide.layeredText ? (
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4 md:pr-16 lg:pr-32 w-full justify-end z-20 pointer-events-none overflow-hidden sm:overflow-visible">
                            <div className="flex flex-col items-end animate-in fade-in slide-in-from-right-10 duration-1000 fill-mode-both delay-300 pointer-events-auto">
                              <LayeredText 
                                lines={slide.layeredLines} 
                                fontSize={slide.fontSize}
                                fontSizeMd={slide.fontSizeMd}
                                className={`text-white drop-shadow-xl transform scale-[0.6] sm:scale-75 md:scale-100 origin-right ${slide.customClass || '-mt-10 md:-mt-20'}`} 
                              />
                              
                              {/* Minimalist CTA Button */}
                              {slide.cta && (
                                <motion.div 
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: false }}
                                  transition={{ duration: 0.7, delay: 1 }}
                                  className="mt-8 md:mt-12"
                                >
                                  <Link 
                                    to={slide.cta.href}
                                    onClick={(e) => e.stopPropagation()}
                                    className="inline-flex items-center px-10 py-4 bg-transparent border border-white text-white text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold hover:bg-white hover:text-black transition-all duration-300 drop-shadow-lg group pointer-events-auto"
                                  >
                                    {slide.cta.label}
                                    <ArrowRight className="ml-3 h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                                  </Link>
                                </motion.div>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="relative z-10 flex flex-col items-center max-w-3xl px-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both delay-300">
                            <BlurFade delay={0.25} inView>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-semibold tracking-tight text-white mb-3 md:mb-5 drop-shadow-md leading-tight text-center">
                                  {slide.title}
                                </h2>
                            </BlurFade>
                            <BlurFade delay={0.25 * 2} inView>
                                <p className="text-sm md:text-xl text-white/90 font-sans tracking-wide font-light mb-6 md:mb-8 max-w-xl mx-auto drop-shadow-sm text-center">
                                  {slide.subtitle}
                                </p>
                            </BlurFade>
                            {slide.ctaText && (
                                <span className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-luxury text-xs md:text-sm tracking-[0.2em] uppercase font-medium border border-white hover:bg-white hover:text-black transition-colors duration-300 pointer-events-auto">
                                  {slide.ctaText}
                                </span>
                            )}
                          </div>
                        )}
                      </>
                    )}
                    {/* Progress Bar (Thin line at the bottom indicating slide duration) */}
                    {slide.textOverlay && (
                      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10 z-30">
                        <motion.div 
                          key={index}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 9, ease: "linear" }}
                          className="h-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                        />
                      </div>
                    )}
                  </div>
                </div>
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
