import { Link } from "react-router-dom";
import { ArrowRight, Award, ShieldCheck, Sparkles, Truck, ShoppingBag, Plus, Minus } from "lucide-react";
import hero from "@/assets/banners/hero.jpg";
import celineBanner from "@/assets/banners/celine.jpg";
import davidBanner from "@/assets/banners/david.jpg";
import pucciBanner from "@/assets/banners/pucci.jpg";
import saleBanner from "@/assets/banners/sale.jpg";
import miumiuBanner from "@/assets/banners/miumiu.png";
import gucciBanner from "@/assets/banners/gucci-vitrine.png";
import { brands, categories, products } from "@/data/site";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
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

      {/* Featured Products */}
      <section className="container-luxe pb-16 px-4 md:px-12 max-w-[1400px]">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Coleção em Destaque</p>
          <h2 className="text-4xl md:text-5xl font-serif">Encontre o modelo ideal</h2>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4">
            {products.map((p) => {
              const oldPrice = p.price * 1.15;
              const vistaPrice = p.price * 0.9;
              const installment = p.price / 10;
              
              return (
                <CarouselItem key={p.id} className="pl-4 basis-[85%] sm:basis-[60%] md:basis-1/3 lg:basis-1/5">
                  <div className="group flex flex-col h-full bg-white transition-all hover:shadow-sm border border-transparent hover:border-border/50">
                    <Link to={`/catalogo`} className="block">
                      <div className="aspect-[4/3] w-full overflow-hidden p-6 flex items-center justify-center bg-transparent">
                        <img src={p.img} alt={p.name} className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105 mix-blend-multiply" />
                      </div>
                    </Link>
                    <div className="px-4 pb-6 mt-4 text-center flex flex-col flex-grow">
                      <Link to={`/catalogo`} className="block mb-3">
                        <h3 className="text-[13px] font-bold uppercase tracking-wider text-[#333] leading-tight h-8 flex items-center justify-center">
                          {p.brand} {p.name}
                        </h3>
                      </Link>
                      
                      <div className="mt-auto">
                        <p className="text-xs text-muted-foreground line-through decoration-muted-foreground/50">
                          R$ {oldPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                        <p className="text-[22px] font-bold font-sans text-black my-1">
                          R$ {p.price.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                        
                        <p className="text-[11px] text-[#666] leading-tight mt-2 mb-6 h-10 flex flex-col items-center justify-center">
                          <span>R$ {vistaPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} à vista com desconto</span>
                          <span>ou <strong>10x</strong> de <strong>R$ {installment.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong> sem juros</span>
                        </p>

                        <div className="flex items-center gap-2 mt-4 px-2">
                          <div className="flex flex-row items-center bg-[#f8f9fa] border border-[#e5e7eb] h-[42px] w-[75px] overflow-hidden rounded-sm shrink-0">
                            <span className="text-sm font-medium flex-1 text-center text-[#333]">1</span>
                            <div className="flex flex-col items-center justify-center border-l border-[#e5e7eb] bg-white w-6 h-full">
                              <button className="flex-1 flex items-center justify-center w-full hover:bg-gray-50 border-b border-[#e5e7eb]"><Plus className="w-2.5 h-2.5 text-[#666]" /></button>
                              <button className="flex-1 flex items-center justify-center w-full hover:bg-gray-50"><Minus className="w-2.5 h-2.5 text-[#666]" /></button>
                            </div>
                          </div>
                          <Button className="flex-1 rounded-sm bg-black hover:bg-black/90 text-white h-[42px] flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider">
                            <ShoppingBag className="w-4 h-4 mb-0.5" />
                            Comprar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-6 md:-left-12 top-1/3 -translate-y-1/2 z-10 hidden md:flex bg-white border border-border shadow-sm hover:bg-white text-muted-foreground w-10 h-10" />
          <CarouselNext className="absolute -right-6 md:-right-12 top-1/3 -translate-y-1/2 z-10 hidden md:flex bg-white border border-border shadow-sm hover:bg-white text-muted-foreground w-10 h-10" />
        </Carousel>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="rounded-none tracking-widest uppercase text-xs">
            <Link to="/catalogo">Ver toda a coleção <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
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
