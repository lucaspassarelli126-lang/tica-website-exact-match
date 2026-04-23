import { Link, NavLink } from "react-router-dom";
import { Menu, Search, X, Truck, ShoppingBag, Glasses } from "lucide-react";
import { useState, useRef } from "react";
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
  const { totalItems } = useCart();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* ─── TOP ROW ─────────────────────────────────────────────────── */}
      <div className="bg-accent text-white">
        <div className="container-luxe relative flex h-16 items-center justify-center">
          {/* Group: Logo + Search (shifted slightly left) */}
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
            <Link to="/catalogo" onClick={() => setOpen(false)} className="flex flex-col items-center gap-1 text-xs relative">
              <ShoppingBag className="h-5 w-5 text-accent" />
              <span className="uppercase tracking-wide text-[10px] font-bold">Carrinho</span>
              <span className="absolute -top-1 right-2 bg-accent text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">{totalItems}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
