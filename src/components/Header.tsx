import { Link, NavLink } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/marcas", label: "Marcas" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/blog", label: "Blog" },
  { to: "/localizacao", label: "Localização" },
  { to: "/contato", label: "Contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="bg-luxury text-primary-foreground text-xs py-2">
        <div className="container-luxe flex items-center justify-center gap-6 text-center">
          <span>Frete grátis para todo o Brasil</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Em até 10x sem juros</span>
        </div>
      </div>
      <div className="container-luxe flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex flex-col" aria-label="Óticas Théo">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="text-2xl font-black tracking-tighter text-foreground uppercase">Óticas</span>
            <span className="text-2xl font-black tracking-tighter text-accent uppercase">Théo</span>
          </div>
          <span className="text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground font-medium mt-0.5 ml-0.5">Curadoria de luxo</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-sm tracking-wide uppercase transition-colors hover:text-accent ${
                  isActive ? "text-accent font-medium" : "text-foreground"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Buscar" className="p-2 hover:text-accent transition-colors hidden sm:inline-flex">
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Menu"
            className="p-2 lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-luxe py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 text-sm uppercase tracking-wide ${isActive ? "text-accent font-medium" : "text-foreground"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
