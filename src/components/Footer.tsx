import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-accent text-white">
      <div className="container-luxe py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex flex-col mb-4">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-2xl font-black tracking-tighter text-white uppercase">ÓTICAS</span>
              <span className="text-2xl font-black tracking-tighter text-white/80 uppercase">THEO</span>
            </div>
            <span className="text-[0.62rem] uppercase tracking-[0.3em] text-white/50 font-medium mt-0.5 ml-0.5">Curadoria de luxo</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Variedade, excelência e curadoria de luxo em óculos das marcas mais desejadas do mundo.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 border border-white/20 hover:bg-white/10 transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 border border-white/20 hover:bg-white/10 transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest mb-4 font-medium">Institucional</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/sobre" className="hover:text-accent">Sobre nós</Link></li>
            <li><Link to="/servicos" className="hover:text-accent">Serviços</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest mb-4 font-medium">Atendimento</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/contato" className="hover:text-accent">Fale conosco</Link></li>
            <li><Link to="/localizacao" className="hover:text-accent">Como chegar</Link></li>
            <li><Link to="/contato#agendamento" className="hover:text-accent">Agendar exame</Link></li>
          </ul>
          <div className="mt-4 text-sm text-white/70">
            <p className="font-medium text-primary-foreground">Horário</p>
            <p>Seg a Sex: 9h às 19h</p>
            <p>Sáb: 9h às 14h</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest mb-4 font-medium">Contato</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Rua das Óticas, 123 — Centro</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> (11) 99999-9999</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> contato@oticastheo.com.br</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-luxe py-5 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} ÓTICAS THEO. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
