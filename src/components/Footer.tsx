import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-white">
      <div className="container-luxe py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex flex-col mb-4">
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-widest text-white uppercase">ÓTICAS</span>
              <span className="text-xl font-black tracking-widest text-white/80 uppercase">THEO TAVARES</span>
            </div>
            <span className="text-[0.62rem] uppercase tracking-[0.3em] text-white/50 font-medium mt-1">Excelência Visual há 7 anos</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Sua parceira de confiança na saúde visual. Qualidade, profissionalismo e atendimento excepcional em Sumaré e Paulínia.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://www.instagram.com/oticastheotavares/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 border border-white/20 hover:bg-white/10 transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest mb-6 font-bold border-b border-white/10 pb-2">Institucional</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre nós</Link></li>
            <li><Link to="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
            <li><Link to="/catalogo" className="hover:text-white transition-colors">Catálogo</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest mb-6 font-bold border-b border-white/10 pb-2">Atendimento</h4>
          <div className="space-y-4 text-sm text-white/70">
            <div>
              <p className="font-bold text-white mb-1">Horários</p>
              <p>Seg a Sex: 09:00 - 18:00</p>
              <p>Sáb: 09:00 - 13:00</p>
            </div>
            <div className="pt-2">
              <Link to="/contato#agendamento" className="inline-block bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors text-xs font-bold uppercase tracking-widest">
                Agendar Consulta
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest mb-6 font-bold border-b border-white/10 pb-2">Onde Estamos</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-1 shrink-0 text-white" /> 
              <span>
                <strong>Sumaré:</strong> Av. Emílio Bosco, 551 - Matão
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-1 shrink-0 text-white" /> 
              <span>
                <strong>Paulínia:</strong> Av. Brasília, 1035 - Vila Bressani
              </span>
            </li>
            <li className="flex items-center gap-3 pt-2">
              <svg viewBox="0 0 24 24" fill="#25D366" className="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> 
              <span className="font-bold text-white">(19) 97152-8684</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-luxe py-6 text-center text-[10px] text-white/40 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} ÓTICAS THEO TAVARES. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
