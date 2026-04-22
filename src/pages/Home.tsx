import { Link } from "react-router-dom";
import { ArrowRight, Award, ShieldCheck, Sparkles, Truck, CreditCard, History } from "lucide-react";
import { motion } from "framer-motion";
import { TiltWrapper } from "@/components/ui/tilt-wrapper";
import hero from "@/assets/banners/hero-banner1-v3.jpg";
import heroBanner2 from "@/assets/banners/hero-banner2.jpg";
import heroBanner3 from "@/assets/banners/hero-banner3.jpg";
import celineBanner from "@/assets/banners/celine.jpg";
import davidBanner from "@/assets/banners/david.jpg";
import pucciBanner from "@/assets/banners/pucci.jpg";
import saleBanner from "@/assets/banners/sale.jpg";
import promoProductBanner from "@/assets/products/Red White Professional Glasses Business Presentation.svg";
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

import { ScheduleExamSection } from "@/components/ScheduleExamSection";
import { VideoScrollHero } from "@/components/ui/video-scroll-hero";
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
  const navigate = useNavigate();

  const heroSlides = [
    { 
      src: hero, 
      alt: "Exame de vista Óticas Théo",
      textOverlay: true,
      tagline: "Inovação & Estilo",
      mainTitle: "EXAME +\nÓCULOS COMPLETO",
      editorialAccent: "A PARTIR DE",
      editorialHighlight: "R$ 199,90",
      cta: { label: "Agendar Exame", href: "/contato#agendamento" }
    },
    { 
      src: heroBanner2, 
      alt: "Conforto Visual Óticas Théo",
      textOverlay: true,
      tagline: "Curadoria Premium",
      mainTitle: "CONFORTO",
      editorialAccent: "COLEÇÃO DE",
      editorialHighlight: "LUXO",
      cta: { label: "Ver Coleção", href: "/catalogo" }
    },
    { 
      src: heroBanner3, 
      alt: "Atendimento Clínico Ótico",
      textOverlay: true,
      tagline: "Visão sem Limites",
      mainTitle: "TECNOLOGIA",
      editorialAccent: "LENTES DE",
      editorialHighlight: "ALTA DEFINIÇÃO",
      cta: { label: "Falar com Consultor", href: "https://wa.me/5511999999999" }
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
                  <div className="w-full max-w-[1920px] mx-auto aspect-[4/3] md:aspect-[21/9] relative flex items-center justify-center text-center overflow-hidden">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ${slide.textOverlay ? 'group-hover:scale-105' : ''}`}
                    />
                    
                    {/* Celine Style Layout (Center-Aligned) */}
                    {slide.textOverlay && (
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        {/* Dark center overlay for contrast */}
                        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
                        
                        <div className="relative z-20 flex flex-col items-center text-center max-w-6xl px-6">
                          {/* Main Title (CELINE style) */}
                          <motion.h1 
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="text-4xl md:text-6xl lg:text-[5rem] font-sans font-black text-white leading-[0.85] mb-6 whitespace-pre-line tracking-tight"
                          >
                            {slide.mainTitle}
                          </motion.h1>
                          
                          {/* Tagline (O ÍCONE ATEMPORAL style) */}
                          <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-[10px] md:text-sm tracking-[0.8em] uppercase text-white/80 mb-16 font-sans font-light"
                          >
                            {slide.tagline}
                          </motion.p>
                          
                          {/* Promo Block */}
                          <div className="flex flex-col items-center gap-0 mb-12">
                            <motion.h2 
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 1, delay: 0.6 }}
                              className="text-lg md:text-2xl font-sans font-bold text-white tracking-[0.3em] uppercase"
                            >
                              {slide.editorialAccent}
                            </motion.h2>
                            
                            {/* Numeric Accent (Montserrat Bold style) */}
                            <motion.span 
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.8 }}
                              className="text-5xl md:text-7xl lg:text-8xl font-numeric font-black text-orange-500 tracking-tight drop-shadow-lg"
                            >
                              {slide.editorialHighlight}
                            </motion.span>
                          </div>
                          
                          {/* Rounded CTA Button */}
                          {slide.cta && (
                            <motion.div 
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 1 }}
                            >
                              <Link 
                                to={slide.cta.href}
                                onClick={(e) => e.stopPropagation()}
                                className="group relative inline-flex items-center gap-6 bg-black text-white px-16 py-4 rounded-full text-[10px] md:text-xs uppercase tracking-[0.5em] font-sans font-black hover:bg-orange-600 transition-all duration-500 shadow-xl border border-white/5"
                              >
                                {slide.cta.label}
                                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                              </Link>
                            </motion.div>
                          )}
                        </div>
                      </div>
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

      {/* Slim Floating Trust Bar - Solid White */}
      <section className="relative z-30 -mt-8 md:-mt-10 container-luxe px-4 max-w-5xl">
        <TiltWrapper glare={true} maxTilt={3}>
          <div className="bg-white dark:bg-zinc-950 rounded-xl md:rounded-full border border-border/50 shadow-lg py-4 md:py-5 px-8 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 w-full items-center">
              {[
                { 
                  icon: Truck,
                  label: "FRETE GRÁTIS", 
                  desc: "Para todo Brasil" 
                },
                { 
                  icon: History,
                  label: "60 ANOS", 
                  desc: "Tradição Ótica" 
                },
                { 
                  icon: CreditCard,
                  label: "10X SEM JUROS", 
                  desc: "No cartão" 
                },
                { 
                  icon: ShieldCheck,
                  label: "ORIGINALIDADE", 
                  desc: "Garantia Total" 
                },
              ].map(({ icon: Icon, label, desc }, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex items-center justify-center gap-3 text-left group ${idx !== 3 ? 'md:border-r border-border/50' : ''}`}
                >
                  <div className="shrink-0">
                    <Icon className="h-4 w-4 text-orange-600 dark:text-orange-500" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[9px] md:text-[10px] font-black tracking-[0.1em] text-foreground uppercase leading-none">{label}</p>
                    <p className="text-[7px] md:text-[8px] text-muted-foreground uppercase tracking-widest font-medium opacity-70 mt-0.5">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </TiltWrapper>
      </section>

      {/* Categories Bubble Navigation */}
      <section className="container-luxe py-12">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-16">
          {categories.map((c) => (
            <Link key={c.slug} to={`/catalogo?style=${c.slug}`} className="group flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:w-40 rounded-full overflow-hidden border-2 border-zinc-100 dark:border-zinc-800 group-hover:border-accent transition-all duration-500 shadow-sm p-1 bg-white dark:bg-zinc-900">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              <p className="text-[11px] md:text-sm font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-200 group-hover:text-accent transition-colors">
                {c.name}
              </p>
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

      {/* Promo Product Banner */}
      <section className="w-full py-0">
        <Link to="/catalogo" className="block overflow-hidden group">
          <img src={promoProductBanner} alt="Coleção de Óculos" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]" />
        </Link>
      </section>


      <ScheduleExamSection />
      <VideoScrollHero />













    </>
  );
};

export default Home;
