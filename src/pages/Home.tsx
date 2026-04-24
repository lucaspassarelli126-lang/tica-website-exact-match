import { Link } from "react-router-dom";
import { ArrowRight, Award, ShieldCheck, Sparkles, Truck, CreditCard, History, Glasses, Square, Smile, Baby } from "lucide-react";
import { motion } from "framer-motion";
import { TiltWrapper } from "@/components/ui/tilt-wrapper";
import hero from "@/assets/banners/hero-banner1-v3.jpg";
import heroBanner2 from "@/assets/banners/hero-banner2.jpg";
import heroBanner3 from "@/assets/banners/hero-banner3.jpg";
import promoProductBanner from "@/assets/banners/promo-99-v2.png";
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
import { RecentlyViewedSection } from "@/components/RecentlyViewedSection";
import { CategoryScrollInteractive } from "@/components/CategoryScrollInteractive";
import { ProductDetailModal } from "@/components/ProductDetailModal";
import { Product as ProductType } from "@/data/site";
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
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleProductClick = (product: ProductType) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const heroSlides = [
    { 
      src: hero, 
      alt: "Exame de vista gratuito Óticas Theo",
      textOverlay: true,
      tagline: "EXCELÊNCIA & SOFISTICAÇÃO VISUAL",
      mainTitle: "A ARTE DE\nENXERGAR BEM",
      editorialAccent: "DESCUBRA SUA NOVA",
      editorialHighlight: "IDENTIDADE",
      cta: { label: "Explorar Coleção", href: "https://wa.me/5519971528684?text=Olá! Gostaria de explorar a nova coleção de óculos que vi no site." }
    },
    { 
      src: heroBanner2, 
      alt: "Conforto Visual Óticas Theo",
      textOverlay: true,
      tagline: "DESIGN EXCLUSIVO",
      mainTitle: "CONFORTO",
      editorialAccent: "COLEÇÃO DE",
      editorialHighlight: "LUXO",
      cta: { label: "Ver Coleção", href: "https://wa.me/5519971528684?text=Olá! Gostaria de ver a coleção de luxo que vi no site." }
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
              delay: 4000,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
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
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] will-change-transform ${slide.textOverlay ? 'group-hover:scale-105' : ''}`}
                    />
                    
                    {/* Celine Style Layout (Center-Aligned) */}
                    {slide.textOverlay && (
                      <div className="absolute inset-0 flex items-center justify-center z-20 pb-12 md:pb-16">
                        {/* Dark center overlay for contrast */}
                        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
                        
                        <div className="relative z-20 flex flex-col items-center text-center max-w-6xl px-6">
                          {/* Main Title (CELINE style) */}
                          <motion.h1 
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="text-2xl md:text-6xl lg:text-[5rem] font-sans font-black text-white leading-[1.1] mb-2 md:mb-6 whitespace-pre-line tracking-tight drop-shadow-md"
                          >
                            {slide.mainTitle}
                          </motion.h1>
                          
                          {/* Tagline (O ÍCONE ATEMPORAL style) - More refined, no heavy pill */}
                          <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-[9px] md:text-sm tracking-[0.3em] md:tracking-[0.5em] uppercase text-white/80 mb-8 md:mb-12 font-sans font-medium border-y border-white/20 py-1"
                          >
                            {slide.tagline}
                          </motion.p>
                          
                          {/* Promo Block */}
                          <div className="flex flex-col items-center gap-0 mb-8 md:mb-12">
                            <motion.h2 
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 1, delay: 0.6 }}
                              className="text-[10px] md:text-2xl font-serif italic text-white/90 tracking-[0.15em] md:tracking-[0.3em] uppercase"
                            >
                              {slide.editorialAccent}
                            </motion.h2>
                            
                            {/* Numeric Accent (Montserrat Bold style) */}
                            <motion.span 
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.8 }}
                              className="text-4xl md:text-7xl lg:text-8xl font-numeric font-black text-accent tracking-tighter leading-none drop-shadow-lg"
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
                              <a 
                                href={slide.cta.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="group relative inline-flex items-center gap-2 md:gap-6 bg-accent text-white px-6 py-2.5 md:px-16 md:py-4 rounded-full text-[7px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.5em] font-sans font-black hover:bg-accent/90 transition-all duration-500 shadow-xl border border-white/5"
                              >
                                {slide.cta.label}
                                <ArrowRight className="w-3 h-3 md:w-5 md:h-5 transform group-hover:translate-x-2 transition-transform" />
                              </a>
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
                          transition={{ duration: 4, ease: "linear" }}
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
      <section className="relative z-30 -mt-6 md:-mt-10 container-luxe px-2 md:px-4 max-w-5xl">
        <TiltWrapper glare={true} maxTilt={3}>
          <div className="bg-white dark:bg-zinc-950 rounded-xl md:rounded-full border border-border/50 shadow-lg py-2.5 md:py-5 px-2 md:px-12">
            <div className="grid grid-cols-4 gap-1 md:gap-0 w-full items-start md:items-center px-0 md:px-0">
              {[
                { 
                  icon: Glasses,
                  label: "EXAME", 
                  desc: "De Vista" 
                },
                { 
                  icon: Award,
                  label: "7 ANOS", 
                  desc: "Excelência" 
                },
                { 
                  icon: CreditCard,
                  label: "PARCELA", 
                  desc: "Facilitada" 
                },
                { 
                  icon: ShieldCheck,
                  label: "GARANTIA", 
                  desc: "Total" 
                },
              ].map(({ icon: Icon, label, desc }, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center justify-start md:justify-center gap-1.5 md:gap-3 text-center md:text-left group ${idx !== 3 ? 'md:border-r border-border/50' : ''}`}
                >
                  <div className="shrink-0 mb-1 md:mb-0">
                    <Icon className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[7.5px] md:text-[10px] font-black tracking-[0.05em] md:tracking-[0.1em] text-foreground uppercase leading-tight md:leading-none">{label}</p>
                    <p className="text-[6px] md:text-[8px] text-muted-foreground uppercase tracking-widest font-medium opacity-70 mt-0.5 md:mt-1">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </TiltWrapper>
      </section>

      {/* Interactive Categories Navigation */}
      <CategoryScrollInteractive />




      <div className="relative z-30 bg-background mt-0 pt-12 md:pt-20">
        <ProductCarousel 
          products={products} 
          subtitle="Destaques da Temporada"
          title="Encontre o seu estilo"
          badgeText="DESTAQUE"
          onProductClick={handleProductClick}
        />
      </div>

      <section className="w-full py-0 flex flex-col items-center gap-6 mt-8 px-4 md:px-8">
        <div className="relative w-full max-w-6xl mx-auto group overflow-hidden rounded-3xl shadow-xl">
          <Link to="/catalogo" className="block">
            <img 
              src={promoProductBanner} 
              alt="Promoção Armações R$ 99,90" 
              className="w-full h-auto max-h-[200px] md:max-h-[350px] object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]" 
            />
          </Link>
        </div>
        
        <Button 
          asChild
          size="lg"
          className="bg-black text-white hover:bg-zinc-800 rounded-full px-8 md:px-16 h-10 md:h-14 uppercase tracking-[0.3em] text-[9px] md:text-[11px] font-black transition-all hover:scale-105 active:scale-95 shadow-2xl"
        >
          <Link to="/catalogo">VER AGORA!</Link>
        </Button>

        <div className="w-1 h-1 rounded-full bg-accent/30 mt-2" />
      </section>


      <ScheduleExamSection />
      
      <VideoScrollHero className="-mt-20 md:-mt-32 relative z-10" />
      <RecentlyViewedSection onProductClick={handleProductClick} />







      <ProductDetailModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Home;
