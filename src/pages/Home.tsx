import { Link } from "react-router-dom";
import { ArrowRight, Award, ShieldCheck, Sparkles, Truck, CreditCard, History, Glasses, Square, Smile, Baby } from "lucide-react";
import { motion } from "framer-motion";
import { TiltWrapper } from "@/components/ui/tilt-wrapper";
import hero from "@/assets/banners/hero-banner1-v3.jpg";
import heroBanner2 from "@/assets/banners/hero-banner2.jpg";
import heroBanner3 from "@/assets/banners/hero-banner3.jpg";
import promoProductBanner from "@/assets/products/Red White Professional Glasses Business Presentation.svg";
import { products, categories } from "@/data/site";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { ProductCarousel } from "@/components/ProductCarousel";
import { LayeredText } from "@/components/ui/layered-text";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { LampContainer } from "@/components/ui/lamp";

import { ScheduleExamSection } from "@/components/ScheduleExamSection";
import { VideoScrollHero } from "@/components/ui/video-scroll-hero";
import { NewsletterSection } from "@/components/NewsletterSection";
import { RecentlyViewedSection } from "@/components/RecentlyViewedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
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
      cta: null
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
                              className="text-5xl md:text-7xl lg:text-8xl font-numeric font-black text-accent tracking-tight drop-shadow-lg"
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
                                className="group relative inline-flex items-center gap-6 bg-accent text-white px-16 py-4 rounded-full text-[10px] md:text-xs uppercase tracking-[0.5em] font-sans font-black hover:bg-accent/90 transition-all duration-500 shadow-xl border border-white/5"
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
                          className="h-full bg-accent shadow-[0_0_10px_rgba(171,86,33,0.5)]"
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
          <CarouselDots className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30" />
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
                    <Icon className="h-4 w-4 text-accent" />
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

      {/* Categories Navigation - Text inside Bubbles */}
      <section className="container-luxe py-8 mt-12 md:mt-20">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-zinc-900 mb-4">
            Explore as Estéticas
          </h2>
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        </div>
        
        <div className="relative w-full">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-accent/30 -translate-y-1/2 z-0" />
          
          <div className="relative z-10 flex flex-wrap justify-between items-center w-full gap-4">
            {categories.map((c: any) => (
              <Link 
                key={c.slug} 
                to={`/catalogo?style=${c.slug}`} 
                className="group flex flex-col items-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border border-zinc-200 dark:border-zinc-800 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 bg-white dark:bg-zinc-950 shadow-sm relative overflow-hidden px-2 text-center">
                  <span className="text-[8px] md:text-[9px] font-black uppercase tracking-tighter transition-colors leading-tight">
                    {c.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>




      <ProductCarousel 
        products={products} 
        subtitle="Destaques da Temporada"
        title="Encontre o seu estilo"
        badgeText="DESTAQUE"
      />

      <section className="w-full py-4 md:py-6 flex flex-col items-center gap-2 -mt-12">
        <Link to="/catalogo" className="w-full block overflow-hidden group">
          <img src={promoProductBanner} alt="Coleção de Óculos" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]" />
        </Link>
        <div className="w-1 h-1 rounded-full bg-accent/30" />
      </section>


      <ScheduleExamSection />
      
      <VideoScrollHero className="-mt-20 md:-mt-32 relative z-10" />
      <RecentlyViewedSection />
      <NewsletterSection />













    </>
  );
};

export default Home;
