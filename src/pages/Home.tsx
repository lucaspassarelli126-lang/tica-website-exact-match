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

      {/* Trust strip */}
      <section className="border-b border-border bg-white dark:bg-black/50">
        <div className="container-luxe flex justify-center py-10 md:py-16">
          <div className="grid grid-cols-2 gap-12 md:gap-32 max-w-4xl w-full">
            {[
              { 
                icon: (props: any) => (
                  <svg viewBox="0 0 479 479" {...props}>
                    <path fill="currentColor" d="M371.9,139.7c-5.2-1.9-8.5-5.6-11.7-10c-3.1-4.4-6.4-9.1-10.7-12.7c-5-4.2-11.1-6.1-17.6-6.1c-1.9,0-3.9,0.1-5.7,0.4 c2-2.1,4.3-4.1,6.5-6.2c4.4-3.9,8.5-8,12-12.4c3.9-4.9,4.4-11,1.5-16.1c-2.8-4.9-7.7-7-12.8-5.3c-4.4,1.4-8.4,4.2-12.1,7.2 c-3,2.4-5.9,4.9-8.9,7.4c-4.2,3.5-8.4,7-12.5,10.6c-4.4,3.9-8.6,8.1-12.9,12.1c-3.9,3.7-7.9,7.3-12,10.9c-4,3.5-8.1,6.9-12.3,10.1 c-4,3.1-8.1,6-12.3,8.7c-4,2.6-8.2,5.1-12.5,7.2c-4.4,2-9,3.8-13.8,5.1c-1.3,0.3-2.6,0.7-4,1c-1.3,1.3-2.6,2.6-3.8,3.9 c-2,2.1-4.1,4.3-6.2,6.5c-4.1,4.4-8.1,8.9-11.9,13.6c-4,4.9-7.9,9.9-11.6,15c-4,5.4-7.7,10.9-11.2,16.6c-3.5,5.6-6.9,11.3-10.1,17.2 c-3.2,5.8-6.1,11.7-8.8,17.7c-2.8,6.2-5.3,12.4-7.5,18.8c-2.3,6.5-4.2,13.1-5.8,19.8c-1.6,6.7-2.9,13.4-3.8,20.2 c-0.1,0.5-0.1,1-0.2,1.5c-0.1,2.8,0.5,5.4,1.8,7.8c0.1,0.2,0.2,0.4,0.3,0.6c0,0.1,0.1,0.2,0.1,0.3l3,4.4c0.1,0.1,0.2,0.2,0.3,0.3 c3.1,4.4,6.4,9.1,10.7,12.7c5,4.2,11.1,6.1,17.6,6.1c5.2,0,10.5-1.2,15.2-3.8c4.4-2.4,8.1-5.8,11.1-9.9c2.8-3.9,4.9-8.3,6.3-12.9 c1.4-4.6,2.2-9.3,2.6-14.1c0.4-4.8,0.5-9.6,0.3-14.4c0-0.4-0.1-0.7-0.1-1.1c-0.2-2.8-0.8-5.5-1.7-8.1c1.4-0.1,2.8-0.3,4.1-0.5 c6.4-1.1,12.7-2.7,18.7-5.1c6.1-2.4,11.9-5.4,17.3-9c5.2-3.5,10.1-7.4,14.6-11.8c4.2-4.1,8.2-8.4,11.9-13c3.7-4.6,7.1-9.4,10.2-14.4 c3-4.8,5.8-9.8,8.2-14.9c2.5-5.1,4.7-10.4,6.6-15.8c1.9-5.4,3.5-10.9,4.8-16.5c1.3-5.6,2.3-11.2,3-16.9c0.8-5.7,1.2-11.5,1.4-17.2 C372,143.9,372,141.8,371.9,139.7z" />
                  </svg>
                ),
                label: "FRETE GRÁTIS", 
                desc: "Para todo Brasil" 
              },
              { 
                icon: (props: any) => (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
                    <path d="M12 15l-2 5-2-5-5-2 5-2 2-5 2 5 5 2-5 2z" />
                    <circle cx="12" cy="12" r="7" />
                    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" />
                  </svg>
                ),
                label: "60 ANOS", 
                desc: "No mercado" 
              },
            ].map(({ icon: Icon, label, desc }, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 group">
                <div className="bg-orange-50 dark:bg-orange-950/30 p-5 rounded-full transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-10 w-10 text-orange-600 dark:text-orange-500" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm md:text-base font-black tracking-[0.2em] text-orange-600 dark:text-orange-500">{label}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">{desc}</p>
                </div>
              </div>
            ))}
          </div>
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

      {/* Featured brand video showcase */}
      <section className="container-luxe pb-16">
        <div className="relative w-full aspect-[21/9] md:aspect-[2.35/1] overflow-hidden rounded-2xl shadow-2xl bg-black group">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
          >
            <source src="/Luxury_Eyewear_Commercial_Video_Generation.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
          
          {/* Subtle vignette and gradient overlay for luxury feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
          
          {/* Optional textual accent if needed later */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/30 backdrop-blur-[2px]">
            <div className="relative space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <h3 className="text-white text-4xl md:text-6xl lg:text-8xl font-sans font-black tracking-[0.15em] uppercase mb-4 drop-shadow-2xl">
                  ÓTICAS THÉO
                </h3>
                
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "120px", opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-[2px] bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.2 }}
                className="text-white/95 text-xs md:text-sm lg:text-base tracking-[1em] uppercase font-sans font-light pl-[1em]"
              >
                A arte da visão
              </motion.p>
            </div>
          </div>

        </div>
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
