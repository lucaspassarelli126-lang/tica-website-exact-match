import { Link, NavLink } from "react-router-dom";
import { Menu, Search, X, ShoppingBag, Glasses, MapPin } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { CartDrawer } from "./CartDrawer";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/localizacao", label: "Localização" },
  { to: "/contato", label: "Contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-accent">
      {/* ─── SUPER TOP BAR ─────────────────────────────────────────────── */}
      <div 
        className={`bg-accent text-white border-b border-white/20 transition-all duration-300 overflow-hidden ${
          isScrolled ? "h-0 py-0 opacity-0" : "h-[28px] md:h-[32px] opacity-100"
        }`}
      >
        <div className="container-luxe flex justify-between items-center px-4 md:px-6 text-[9px] md:text-[11px] font-medium tracking-wider uppercase h-full">
          <Link to="/localizacao" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <MapPin className="h-3 w-3 md:h-3.5 md:w-3.5 text-white" />
            <span className="hidden sm:inline">Encontre uma loja</span>
            <span className="sm:hidden">Lojas</span>
          </Link>
          <a href="https://wa.me/5519971528685" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 md:h-3.5 md:w-3.5 text-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            (19) 97152-8685
          </a>
        </div>
      </div>

      {/* ─── TOP ROW ─────────────────────────────────────────────────── */}
      <div className="bg-accent text-white">
        <div className="container-luxe relative flex h-16 items-center justify-center">
          
          {/* Mobile Search Icon (Absolute Left) */}
          <div className="absolute left-4 flex items-center md:hidden shrink-0">
            <button 
              className="p-1 text-white hover:text-white/70 transition-colors focus:outline-none"
              aria-label="Buscar"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            >
              <Search className="h-6 w-6" />
            </button>
          </div>

          {/* Group: Logo + Desktop Search */}
          <div className="flex items-center gap-10 md:-ml-32">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0" aria-label="ÓTICAS THEO TAVARES">
              <span className="flex flex-col items-center leading-none select-none">
                <span className="text-[8px] font-medium uppercase tracking-[0.5em] text-white/70 mb-0.5">Óticas</span>
                <span className="text-base font-black uppercase tracking-[0.2em] text-white">THEO TAVARES</span>
              </span>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-white rounded-sm overflow-hidden border border-white/30 shadow-inner w-[350px] lg:w-[450px]">
              <span className="pl-4 text-zinc-400">
                <Glasses className="h-4 w-4" />
              </span>
              <input
                ref={inputRef}
                type="text"
                placeholder="Pesquise aqui"
                className="flex-1 bg-transparent border-none outline-none text-zinc-700 placeholder:text-zinc-400 text-sm font-sans px-3 py-2.5"
              />
              <button
                aria-label="Buscar"
                className="bg-white px-4 py-2.5 text-zinc-500 hover:text-accent transition-colors border-l border-zinc-200"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Utility Icons (Absolute Right) */}
          <div className="absolute right-4 lg:right-6 flex items-center gap-5 shrink-0">
            {/* Cart */}
            <button 
              onClick={() => setCartOpen(true)}
              className="relative hover:text-white/70 transition-colors focus:outline-none"
              aria-label="Ver Carrinho"
            >
              <ShoppingBag className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-accent text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              aria-label="Menu"
              className="p-2 lg:hidden text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Dropdown */}
        <div 
          className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
            mobileSearchOpen ? 'max-h-16 border-b border-zinc-200 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex items-center h-14 px-4 gap-2">
            <Search className="h-4 w-4 text-zinc-400" />
            <input
              type="text"
              placeholder="O que você está procurando?"
              className="flex-1 h-full bg-transparent border-none outline-none text-zinc-700 placeholder:text-zinc-400 text-sm font-sans"
              autoFocus={mobileSearchOpen}
            />
            <button 
              onClick={() => setMobileSearchOpen(false)}
              className="p-2 text-zinc-400 hover:text-accent transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </div>

      {/* ─── BOTTOM NAV ROW ──────────────────────────────────────────── */}
      <div className="bg-white border-b border-zinc-100 shadow-sm hidden lg:block">
        <div className="container-luxe">
          <nav className="flex items-center justify-between">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative flex-1 text-center py-3 text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-200 border-b-2 group ${
                    isActive
                      ? "text-accent border-accent bg-accent/5"
                      : "text-zinc-600 border-transparent hover:text-accent hover:border-accent/40 hover:bg-accent/5"
                  }`
                }
              >
                {item.label === "Catálogo" ? (
                  <span className="inline-flex items-center gap-2">
                    {item.label}
                    <span className="bg-accent text-white text-[7px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                      NOVO
                    </span>
                  </span>
                ) : item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* ─── MOBILE MENU ─────────────────────────────────────────────── */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-white">
          {/* Mobile Search */}
          <div className="px-4 pt-4 pb-2">
            <div className="flex items-center gap-2 bg-zinc-100 rounded-sm px-4 py-2.5">
              <Glasses className="h-4 w-4 text-accent shrink-0" />
              <input
                type="text"
                placeholder="Pesquise aqui"
                className="flex-1 bg-transparent border-none outline-none text-sm text-zinc-900 placeholder:text-zinc-400"
              />
              <Search className="h-4 w-4 text-accent shrink-0" />
            </div>
          </div>

          {/* Mobile Nav */}
          <nav className="flex flex-col px-4 pb-4 gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 text-sm uppercase tracking-wide border-b border-zinc-100 last:border-0 ${
                    isActive ? "text-accent font-bold" : "text-zinc-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Utilities */}
          <div className="flex items-center justify-center px-4 py-4 border-t border-zinc-100 text-zinc-600">
            <button 
              onClick={() => {
                setOpen(false);
                setCartOpen(true);
              }} 
              className="flex flex-col items-center gap-1 text-xs relative"
            >
              <ShoppingBag className="h-5 w-5 text-accent" />
              <span className="uppercase tracking-wide text-[10px] font-bold">Carrinho</span>
              <span className="absolute -top-1 right-2 bg-accent text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">{totalItems}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
