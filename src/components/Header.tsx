import { Link, NavLink } from "react-router-dom";
import { Menu, Search, X, Truck, User, ShoppingBag, Glasses } from "lucide-react";
import { useState, useRef } from "react";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/blog", label: "Blog" },
  { to: "/localizacao", label: "Localização" },
  { to: "/contato", label: "Contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">

      {/* ─── TOP ROW ─────────────────────────────────────────────────── */}
      <div className="bg-accent text-white">
        <div className="container-luxe flex h-16 items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0" aria-label="ÓTICAS THÉO">
            <span className="flex flex-col leading-none select-none">
              <span className="text-[11px] font-light uppercase tracking-[0.35em] text-white/70">Óticas</span>
              <span className="text-2xl font-black uppercase tracking-widest text-white">THÉO</span>
            </span>
          </Link>

          {/* Search Bar (center) */}
          <div className="flex-1 max-w-xl">
            <div className="flex items-center bg-white rounded-sm overflow-hidden border border-white/30 shadow-inner">
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

          {/* Utility Icons */}
          <div className="hidden md:flex items-center gap-6 shrink-0">
            {/* Rastrear */}
            <Link to="/localizacao" className="flex items-center gap-2 hover:text-white/70 transition-colors group">
              <Truck className="h-5 w-5" />
              <div className="flex flex-col leading-none">
                <span className="text-[9px] uppercase tracking-wider text-white/60">Rastrear</span>
                <span className="text-[11px] font-bold uppercase tracking-wide">Pedidos</span>
              </div>
            </Link>

            {/* Account */}
            <Link to="/contato" className="flex items-center gap-2 hover:text-white/70 transition-colors group">
              <User className="h-5 w-5" />
              <div className="flex flex-col leading-none">
                <span className="text-[9px] uppercase tracking-wider text-white/60">Bem-vindo(a)</span>
                <span className="text-[11px] font-bold uppercase tracking-wide">Entrar ou Cadastrar</span>
              </div>
            </Link>

            {/* Cart */}
            <Link to="/catalogo" className="relative hover:text-white/70 transition-colors">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-white text-accent text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

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
          <div className="flex items-center justify-around px-4 py-4 border-t border-zinc-100 text-zinc-600">
            <Link to="/localizacao" onClick={() => setOpen(false)} className="flex flex-col items-center gap-1 text-xs">
              <Truck className="h-5 w-5 text-accent" />
              <span className="uppercase tracking-wide text-[10px] font-bold">Rastrear</span>
            </Link>
            <Link to="/contato" onClick={() => setOpen(false)} className="flex flex-col items-center gap-1 text-xs">
              <User className="h-5 w-5 text-accent" />
              <span className="uppercase tracking-wide text-[10px] font-bold">Entrar</span>
            </Link>
            <Link to="/catalogo" onClick={() => setOpen(false)} className="flex flex-col items-center gap-1 text-xs relative">
              <ShoppingBag className="h-5 w-5 text-accent" />
              <span className="uppercase tracking-wide text-[10px] font-bold">Carrinho</span>
              <span className="absolute -top-1 right-2 bg-accent text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
