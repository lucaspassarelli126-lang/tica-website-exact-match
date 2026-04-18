import { Link } from "react-router-dom";
import { ArrowRight, Award, ShieldCheck, Sparkles, Truck } from "lucide-react";
import hero from "@/assets/banners/exame-theo-v2.jpg";
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
          <CarouselContent className="m-0">
            {[hero, celineBanner, davidBanner, pucciBanner, saleBanner].map((src, index) => (
              <CarouselItem key={index} className="pl-0">
                <Link 
                  to="/catalogo" 
                  className="relative group flex w-full max-w-[1920px] mx-auto overflow-hidden bg-stone-100"
                >
                  <div className="relative w-full aspect-[4/5] sm:aspect-video lg:aspect-[21/9] xl:aspect-[2.5/1]">
                    <img
                      src={src}
                      alt={index === 0 ? "Promoção Óticas Théo Exame + Óculos" : `Coleção Exclusiva ${index + 1}`}
                      fetchPriority={index === 0 ? "high" : "auto"}
                      loading={index === 0 ? "eager" : "lazy"}
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02] ${
                        index === 0 ? "object-[70%_center] sm:object-center" : "object-center"
                      }`}
                    />
                    {/* Premium overlay for depth and integration */}
                    {index > 0 && (
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700 pointer-events-none" />
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
